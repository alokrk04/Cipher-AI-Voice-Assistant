import asyncio
import shlex
import os
import platform
import datetime


async def _run_osascript(script: str) -> str:
    proc = await asyncio.create_subprocess_exec(
        "osascript", "-e", script,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=15)
    except asyncio.TimeoutError:
        proc.kill()
        raise RuntimeError("AppleScript timed out")
    if proc.returncode != 0:
        raise RuntimeError(f"AppleScript error: {stderr.decode().strip()}")
    return stdout.decode().strip()


async def _run_terminal(cmd: str, timeout: int = 60) -> dict:
    proc = await asyncio.create_subprocess_exec(
        "zsh", "-c", cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
    except asyncio.TimeoutError:
        proc.kill()
        return {"success": False, "stdout": "", "stderr": "Command timed out"}
    return {
        "success": proc.returncode == 0,
        "stdout": stdout.decode().strip(),
        "stderr": stderr.decode().strip(),
    }


async def _run_binary(*args: str, timeout: int = 15) -> str:
    proc = await asyncio.create_subprocess_exec(
        *args,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
    except asyncio.TimeoutError:
        proc.kill()
        raise RuntimeError(f"Command timed out: {' '.join(args[:2])}")
    if proc.returncode != 0:
        raise RuntimeError(stderr.decode().strip())
    return stdout.decode().strip()


async def run_applescript(script: str) -> str:
    return await _run_osascript(script)


async def execute_terminal(command: str) -> dict:
    return await _run_terminal(command)


async def open_app(app_name: str) -> str:
    escaped = shlex.quote(app_name)
    try:
        await _run_osascript(f'tell app {escaped} to activate')
    except RuntimeError:
        await _run_binary("open", "-a", app_name)
    return f"Opened {app_name}."


async def get_active_app() -> str:
    result = await _run_osascript(
        'tell app "System Events" to get name of first process whose frontmost is true'
    )
    return result or "Unknown"


async def quit_app(app_name: str) -> str:
    escaped = shlex.quote(app_name)
    try:
        await _run_osascript(f'tell app {escaped} to quit')
        return f"Closed {app_name}."
    except RuntimeError:
        return f"Could not close {app_name}."


async def minimize_all_windows() -> str:
    await _run_osascript('tell app "System Events" to keystroke "m" using command down')
    return "Minimized all windows."


async def show_desktop() -> str:
    await _run_osascript('tell app "System Events" to key code 103')
    return "Showing desktop."


async def take_screenshot() -> str:
    path = f"{os.path.expanduser('~')}/Desktop/screenshot_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
    try:
        await _run_binary("screencapture", "-x", path)
        return f"Screenshot saved to {path}"
    except RuntimeError:
        return "Failed to take screenshot."


async def get_system_info() -> dict:
    mem_result = await _run_binary("sysctl", "-n", "hw.memsize")
    mem_bytes = int(mem_result.strip()) if mem_result.strip().isdigit() else 0
    load_result = await _run_binary("sysctl", "-n", "vm.loadavg")
    uptime_result = await _run_terminal("uptime")
    disk_result = await _run_terminal("df -h /")
    disk_line = disk_result["stdout"].split("\n")[-1] if disk_result["stdout"] else ""
    disk_parts = disk_line.split()
    disk_used = disk_parts[4] if len(disk_parts) >= 5 else "?"
    cpu = "?"
    try:
        cpu_result = await _run_terminal("ps -A -o %cpu")
        lines = cpu_result["stdout"].split("\n")[1:]
        vals = [float(l.strip()) for l in lines if l.strip().replace(".", "").isdigit()]
        cpu = f"{sum(vals) / len(vals):.1f}%" if vals else "?"
    except Exception:
        pass
    return {
        "hostname": platform.node(),
        "os": f"{platform.system()} {platform.release()}",
        "memory_gb": round(mem_bytes / (1024 ** 3), 1),
        "cpu_load": load_result.strip() if load_result else "?",
        "uptime": uptime_result["stdout"].strip() if uptime_result["stdout"] else "?",
        "disk_used": disk_used,
        "cpu_usage": cpu,
    }


async def find_files(query: str, limit: int = 10) -> list[dict]:
    try:
        result = await _run_binary("mdfind", "-name", query, "-limit", str(limit))
        files = []
        for path in result.strip().split("\n"):
            if path:
                name = path.split("/")[-1]
                files.append({"name": name, "path": path})
        return files
    except RuntimeError:
        return []


async def dispatch(action: str, params: dict | None = None) -> str:
    params = params or {}
    handlers = {
        "open_app": lambda: open_app(params.get("name", "")),
        "quit_app": lambda: quit_app(params.get("name", "")),
        "get_active_app": lambda: get_active_app(),
        "execute_terminal": lambda: execute_terminal(params.get("command", "")),
        "minimize_all_windows": lambda: minimize_all_windows(),
        "show_desktop": lambda: show_desktop(),
        "take_screenshot": lambda: take_screenshot(),
        "get_clipboard": lambda: _run_binary("pbpaste"),
        "set_clipboard": lambda: _run_terminal(f"printf '%s' {shlex.quote(params.get('text', ''))} | pbcopy"),
        "find_files": lambda: _find_files_text(params.get("query", "")),
        "run_applescript": lambda: run_applescript(params.get("script", "")),
    }
    handler = handlers.get(action)
    if handler is None:
        return f"Unknown action: {action}"
    try:
        result = await handler()
        if isinstance(result, dict):
            if result.get("success") is False:
                return f"Command failed: {result.get('stderr', '')}"
            return result.get("stdout", str(result))
        return str(result)
    except Exception as e:
        return f"Action '{action}' failed: {e}"


async def _find_files_text(query: str) -> str:
    files = await find_files(query)
    if not files:
        return f"No files found matching '{query}'."
    return "\n".join(f"• {f['name']}" for f in files[:10])
