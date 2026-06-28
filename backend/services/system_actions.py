import subprocess
import shlex
import os
import platform


def execute_terminal(command: str) -> dict:
    try:
        result = subprocess.run(
            ["zsh", "-c", command],
            capture_output=True, text=True, timeout=60,
        )
        return {
            "success": result.returncode == 0,
            "stdout": result.stdout.strip(),
            "stderr": result.stderr.strip(),
        }
    except subprocess.TimeoutExpired:
        return {"success": False, "stdout": "", "stderr": "Command timed out"}
    except Exception as e:
        return {"success": False, "stdout": "", "stderr": str(e)}


def open_app(app_name: str) -> str:
    result = subprocess.run(
        ["osascript", "-e", f'tell app "{app_name}" to activate'],
        capture_output=True, text=True, timeout=10,
    )
    if result.returncode != 0:
        open_result = subprocess.run(
            ["open", "-a", app_name],
            capture_output=True, text=True, timeout=10,
        )
        if open_result.returncode != 0:
            return f"Could not open {app_name}."
    return f"Opened {app_name}."


def get_active_app() -> str:
    result = subprocess.run(
        ["osascript", "-e", 'tell app "System Events" to get name of first process whose frontmost is true'],
        capture_output=True, text=True, timeout=5,
    )
    return result.stdout.strip() or "Unknown"


def quit_app(app_name: str) -> str:
    result = subprocess.run(
        ["osascript", "-e", f'tell app "{app_name}" to quit'],
        capture_output=True, text=True, timeout=10,
    )
    return f"Closed {app_name}." if result.returncode == 0 else f"Could not close {app_name}."


def minimize_all_windows() -> str:
    subprocess.run(
        ["osascript", "-e", 'tell app "System Events" to keystroke "m" using command down'],
        capture_output=True, timeout=5,
    )
    return "Minimized all windows."


def show_desktop() -> str:
    subprocess.run(
        ["osascript", "-e", 'tell app "System Events" to key code 103'],
        capture_output=True, timeout=5,
    )
    return "Showing desktop."


def take_screenshot() -> str:
    import datetime
    path = f"{os.path.expanduser('~')}/Desktop/screenshot_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
    result = subprocess.run(
        ["screencapture", "-x", path],
        capture_output=True, text=True, timeout=10,
    )
    if result.returncode == 0:
        return f"Screenshot saved to {path}"
    return "Failed to take screenshot."


def get_system_info() -> dict:
    vm = subprocess.run(["sysctl", "-n", "hw.memsize"], capture_output=True, text=True, timeout=5)
    mem_bytes = int(vm.stdout.strip()) if vm.stdout.strip().isdigit() else 0
    load = subprocess.run(["sysctl", "-n", "vm.loadavg"], capture_output=True, text=True, timeout=5)
    uptime = subprocess.run(["uptime"], capture_output=True, text=True, timeout=5)
    disk = subprocess.run(["df", "-h", "/"], capture_output=True, text=True, timeout=5)
    disk_line = disk.stdout.strip().split("\n")[-1] if disk.stdout else ""
    disk_parts = disk_line.split()
    disk_used = disk_parts[4] if len(disk_parts) >= 5 else "?"
    cpu = "?"
    try:
        cpu_res = subprocess.run(["ps", "-A", "-o", "%cpu"], capture_output=True, text=True, timeout=5)
        lines = cpu_res.stdout.strip().split("\n")[1:]
        vals = [float(l.strip()) for l in lines if l.strip().replace(".", "").isdigit()]
        cpu = f"{sum(vals) / len(vals):.1f}%" if vals else "?"
    except Exception:
        pass
    return {
        "hostname": platform.node(),
        "os": f"{platform.system()} {platform.release()}",
        "memory_gb": round(mem_bytes / (1024**3), 1),
        "cpu_load": load.stdout.strip() if load.stdout else "?",
        "uptime": uptime.stdout.strip() if uptime.stdout else "?",
        "disk_used": disk_used,
        "cpu_usage": cpu,
    }


def find_files(query: str, limit: int = 10) -> list[dict]:
    try:
        result = subprocess.run(
            ["mdfind", "-name", query, "-limit", str(limit)],
            capture_output=True, text=True, timeout=15,
        )
        files = []
        for path in result.stdout.strip().split("\n"):
            if path:
                name = path.split("/")[-1]
                files.append({"name": name, "path": path})
        return files
    except Exception:
        return []
