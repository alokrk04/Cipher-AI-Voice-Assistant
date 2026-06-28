from .applescript_bridge import run_applescript


def fetch_today_events() -> list[dict]:
    script = """
    tell application "Calendar"
        set todayEvents to every event of calendar 1 whose start date is greater than or equal to (current date)
        set output to ""
        repeat with ev in todayEvents
            set output to output & (summary of ev) & "|" & (start date of ev) & "|" & (end date of ev) & linefeed
        end repeat
        return output
    end tell
    """
    raw = run_applescript(script)
    events = []
    for line in raw.strip().split("\n"):
        if not line:
            continue
        parts = line.split("|")
        if len(parts) >= 3:
            events.append({
                "title": parts[0],
                "start": parts[1],
                "end": parts[2],
            })
    return events


def create_event(title: str, start_date: str = "", duration_minutes: int = 60) -> str:
    if start_date:
        date_part = f'start date:date "{start_date}"'
    else:
        date_part = f'start date:(current date)'
    script = f"""
    tell application "Calendar"
        tell calendar 1
            make new event with properties {{summary:"{title}", {date_part}, duration:{duration_minutes}}}
        end tell
    end tell
    """
    return run_applescript(script)
