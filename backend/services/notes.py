from .applescript_bridge import run_applescript


def list_notes() -> list[dict]:
    script = """
    tell application "Notes"
        set noteList to every note
        set output to ""
        repeat with n in noteList
            set output to output & (name of n) & "|" & (body of n) & linefeed
        end repeat
        return output
    end tell
    """
    raw = run_applescript(script)
    notes = []
    for line in raw.strip().split("\n"):
        if not line:
            continue
        parts = line.split("|", 1)
        if len(parts) == 2:
            notes.append({"title": parts[0], "body": parts[1]})
    return notes


def create_note(title: str, body: str) -> str:
    escaped_body = body.replace('"', '\\"')
    script = f"""
    tell application "Notes"
        make new note with properties {{name:"{title}", body:"{escaped_body}"}}
    end tell
    """
    return run_applescript(script)


def search_notes(query: str) -> list[dict]:
    escaped = query.replace('"', '\\"')
    script = f"""
    tell application "Notes"
        set matchingNotes to every note whose name contains "{escaped}"
        set output to ""
        repeat with n in matchingNotes
            set output to output & (name of n) & "|" & (body of n) & linefeed
        end repeat
        return output
    end tell
    """
    raw = run_applescript(script)
    results = []
    for line in raw.strip().split("\n"):
        if not line:
            continue
        parts = line.split("|", 1)
        if len(parts) == 2:
            results.append({"title": parts[0], "body": parts[1]})
    return results
