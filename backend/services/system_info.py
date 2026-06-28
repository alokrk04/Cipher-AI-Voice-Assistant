import subprocess
import plistlib


def _run(cmd: list[str]) -> str:
    return subprocess.run(cmd, capture_output=True, text=True, timeout=10).stdout.strip()


def _osascript(script: str) -> str:
    result = subprocess.run(
        ["osascript", "-e", script],
        capture_output=True, text=True, timeout=10,
    )
    if result.returncode != 0:
        return f"Error: {result.stderr.strip()}"
    return result.stdout.strip()


def battery_status() -> dict:
    raw = _run(["pmset", "-g", "batt"])
    lines = raw.split("\n")
    info = {"charging": False, "percent": 0, "remaining": "unknown"}
    for line in lines:
        if "InternalBattery" in line or "AppleInternalBattery" in line:
            parts = line.split("\t")[-1] if "\t" in line else line
            if ";" in parts:
                stats = parts.split(";")
                if len(stats) >= 2:
                    pct = stats[0].strip().replace("%", "")
                    try:
                        info["percent"] = int(pct)
                    except ValueError:
                        pass
                    info["charging"] = "charging" in parts.lower() or "AC" in parts
                    if ";" in parts:
                        remaining_part = parts.split(";")[-1].strip()
                        if remaining_part and "no estimate" not in remaining_part.lower():
                            info["remaining"] = remaining_part
    return info


def wifi_status() -> dict:
    raw = _run(["/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport", "-I"])
    info = {"ssid": "Unknown", "signal": 0, "connected": False}
    for line in raw.split("\n"):
        line = line.strip()
        if "SSID:" in line and "BSSID" not in line:
            info["ssid"] = line.split("SSID:")[-1].strip()
            info["connected"] = True
        if "agrCtlRSSI:" in line:
            try:
                info["signal"] = int(line.split("agrCtlRSSI:")[-1].strip())
            except ValueError:
                pass
    return info


def system_load() -> dict:
    uptime_raw = _run(["uptime"])
    load_raw = _run(["sysctl", "-n", "vm.loadavg"])
    memory_raw = _run(["vm_stat"])
    disk_raw = _run(["df", "-h", "/"])
    return {
        "uptime": uptime_raw,
        "load": load_raw,
        "memory": memory_raw[:200],
        "disk": disk_raw,
    }


def get_frontmost_app() -> str:
    return _osascript('tell app "System Events" to get name of first process whose frontmost is true')


def get_volume() -> int:
    raw = _osascript("output volume of (get volume settings)")
    try:
        return int(raw)
    except ValueError:
        return 50


def set_volume(level: int) -> str:
    level = max(0, min(100, level))
    return _osascript(f"set volume output volume {level}")


def get_brightness() -> float:
    raw = _run(["brightness", "-l"])
    for line in raw.split("\n"):
        if "brightness" in line.lower():
            try:
                return float(line.split()[-1])
            except (ValueError, IndexError):
                pass
    return 0.5


def set_brightness(level: float) -> str:
    level = max(0.0, min(1.0, level))
    _run(["brightness", str(level)])
    return f"Brightness set to {int(level * 100)}%"


def lock_screen() -> str:
    # Modern macOS (Ventura+): simulate Control+Cmd+Q to trigger lock screen
    result = _osascript('tell app "System Events" to keystroke "q" using {control down, command down}')
    if not result or "error" not in result.lower():
        return "Screen locked."
    # Fallback: try the older CGSession method
    legacy = "/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession"
    alt = "/System/Library/CoreServices/RemoteManagement/AppleVNCServer.bundle/Contents/Support/lock"
    for path in [legacy, alt]:
        try:
            subprocess.run([path, "-suspend"], capture_output=True, timeout=5)
            return "Screen locked."
        except Exception:
            continue
    return "Could not lock screen. Try using the keyboard shortcut Control+Cmd+Q."


def sleep() -> str:
    _run(["pmset", "sleepnow"])
    return "System going to sleep."


def empty_trash() -> str:
    _osascript('tell app "Finder" to empty the trash')
    return "Trash emptied."


def get_clipboard() -> str:
    return _run(["pbpaste"])


def set_clipboard(text: str) -> str:
    p = subprocess.run(["pbcopy"], input=text.encode(), timeout=5)
    return "Copied to clipboard."


def get_reminders() -> list[dict]:
    script = """
    tell app "Reminders"
        set output to ""
        try
            set allLists to every list
            repeat with lst in allLists
                set reminderItems to every reminder in lst
                repeat with r in reminderItems
                    if completed of r is false then
                        set output to output & (name of lst) & "||" & (name of r) & "\\n"
                    end if
                end repeat
            end repeat
        end try
        return output
    end tell
    """
    raw = _osascript(script)
    items = []
    for line in raw.strip().split("\n"):
        if "||" in line:
            parts = line.split("||", 1)
            items.append({"list": parts[0], "title": parts[1]})
    return items


def create_reminder(title: str, list_name: str = "Reminders") -> str:
    script = f"""
    tell app "Reminders"
        tell list "{list_name}"
            make new reminder with properties {{name:"{title}"}}
        end tell
    end tell
    """
    return _osascript(script)


def get_contacts(query: str = "") -> list[dict]:
    script = """
    tell app "Contacts"
        set output to ""
        try
            set people to every person
            repeat with p in people
                set name to name of p
                set phones to ""
                set emails to ""
                try
                    set phones to phone of p
                end try
                try
                    set emails to email of p
                end try
                set output to output & name & "||" & phones & "||" & emails & "\\n"
            end repeat
        end try
        return output
    end tell
    """
    raw = _osascript(script)
    contacts = []
    for line in raw.strip().split("\n"):
        if "||" in line:
            parts = line.split("||", 2)
            name = parts[0]
            phones = parts[1] if len(parts) > 1 else ""
            emails = parts[2] if len(parts) > 2 else ""
            if not query or query.lower() in name.lower() or query.lower() in emails.lower():
                contacts.append({"name": name, "phone": phones, "email": emails})
    return contacts
