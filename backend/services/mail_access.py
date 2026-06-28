from .applescript_bridge import run_applescript


def read_inbox(count: int = 5) -> list[dict]:
    script = f"""
    tell application "Mail"
        set msgs to messages of inbox whose read status is false
        set output to ""
        repeat with i from 1 to {count}
            set msg to item i of msgs
            set output to output & (subject of msg) & "|" & (sender of msg) & "|" & (content of msg) & linefeed
        end repeat
        return output
    end tell
    """
    raw = run_applescript(script)
    mails = []
    for line in raw.strip().split("\n"):
        if not line:
            continue
        parts = line.split("|")
        if len(parts) >= 3:
            mails.append({
                "subject": parts[0],
                "from": parts[1],
                "body": parts[2],
            })
    return mails


def send_email(to: str, subject: str, body: str) -> str:
    script = f"""
    tell application "Mail"
        set newMsg to make new outgoing message with properties {{subject:"{subject}", content:"{body}", visible:true}}
        tell newMsg
            make new to recipient at end of to recipients with properties {{address:"{to}"}}
            send
        end tell
    end tell
    """
    return run_applescript(script)
