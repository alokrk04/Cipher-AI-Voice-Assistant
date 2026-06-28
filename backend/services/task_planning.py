import httpx
import re
from config import OLLAMA_URL, GEMINI_API_KEY
from services.memory_management import search_context, store_entry
from services import system_actions, calendar_access, mail_access, notes, applescript_bridge, system_info
from google import genai


client = genai.Client(api_key=GEMINI_API_KEY)

SIMPLE_INTENTS = {"greeting", "farewell", "thanks", "identity", "small_talk", "capabilities"}


def classify_intent(text: str) -> str:
    lower = text.lower()

    # Greetings
    if re.search(r"\b(hi|hello|hey|morning|evening|sup|yo|howdy)\b", lower) and not re.search(r"\b(search|find|open|launch)\b", lower):
        return "greeting"
    if re.search(r"\b(bye|goodbye|see you|later|exit|quit)\b", lower):
        return "farewell"
    if re.search(r"\b(thanks|thank you|appreciate|cheers)\b", lower):
        return "thanks"
    if re.search(r"\b(who are you|your name|what are you)\b", lower):
        return "identity"
    if re.search(r"\b(what can you do|capabilities|help|features|what do you do)\b", lower):
        return "capabilities"

    # Date & Time (check before calendar to avoid "what is today's date" → calendar)
    if re.search(r"\b(date|time|day|today|clock)\b", lower) and re.search(r"\b(what|whats|current|tell|is it|is today)\b", lower):
        if not re.search(r"\b(event|calendar|schedule|meeting|appointment)\b", lower):
            return "date_time"

    # System info
    if re.search(r"\b(battery|power|charge)\b", lower) and re.search(r"\b(status|level|percent|how much|remaining|left|what|whats|tell|check|my)\b", lower):
        return "battery_status"
    if re.search(r"\b(wifi|internet|network|connected)\b", lower) and re.search(r"\b(status|speed|name|ssid|check|what|whats|tell|my)\b", lower):
        return "wifi_status"
    if re.search(r"\b(system|computer|mac|machine|this mac)\b", lower) and re.search(r"\b(info|status|specs|specifications|about|tell)\b", lower):
        return "system_info"
    if re.search(r"\b(uptime|how long.*running|when.*start)\b", lower):
        return "uptime"
    if re.search(r"\b(disk|storage|space|hard drive)\b", lower) and re.search(r"\b(how much|free|used|available|status|left)\b", lower):
        return "disk_status"

    # App control
    if re.search(r"\b(open|launch|start)\b", lower) and not re.search(r"\b(file|document|note)\b", lower):
        return "open_app"
    if re.search(r"\b(close|quit|exit)\b", lower) and re.search(r"\b(app|application)\b", lower):
        return "quit_app"
    if re.search(r"\b(what.*app|frontmost|active|current app|what.*running)\b", lower):
        return "get_active_app"

    # Screen & system control
    if re.search(r"\b(lock|lock screen|screen lock)\b", lower):
        return "lock_screen"
    if re.search(r"\b(sleep|go to sleep)\b", lower):
        return "sleep"
    if re.search(r"\b(screenshot|screen capture|take.*screenshot|capture.*screen)\b", lower):
        return "screenshot"
    if re.search(r"\b(show.*desktop|hide.*windows|minimize.*windows)\b", lower):
        return "show_desktop"
    if re.search(r"\b(volume|sound)\b", lower) and re.search(r"\b(set|change|turn|increase|decrease|up|down|level)\b", lower):
        return "set_volume"
    if re.search(r"\b(brightness)\b", lower) and re.search(r"\b(set|change|turn|increase|decrease|up|down)\b", lower):
        return "set_brightness"
    if re.search(r"\b(volume|sound)\b", lower) and re.search(r"\b(what|current|level|check|status)\b", lower):
        return "get_volume"
    if re.search(r"\b(brightness)\b", lower) and re.search(r"\b(what|current|level|check|status)\b", lower):
        return "get_brightness"

    # Clipboard
    if re.search(r"\b(clipboard|clip.?board)\b", lower) and re.search(r"\b(what|whats|show|get|check|tell|my|in)\b", lower):
        return "get_clipboard"
    if re.search(r"\b(copy|clipboard)\b", lower) and re.search(r"\b(this|that|text|to|following|onto)\b", lower):
        return "set_clipboard"

    # Contacts (check BEFORE files to disambiguate "find contacts named X")
    if re.search(r"\b(contact|contacts|address.?book|phone.?book)\b", lower):
        return "search_contacts"

    # Files
    if re.search(r"\b(find|search|locate)\b", lower) and re.search(r"\b(file|document|folder|named|called)\b", lower):
        return "find_files"
    if re.search(r"\b(empty.*trash|clean.*trash|clear.*trash)\b", lower):
        return "empty_trash"

    # Terminal
    if re.search(r"\b(run|execute)\s+(command|terminal|shell|script|a\s+command)\b", lower):
        return "run_terminal"

    # AppleScript
    if re.search(r"\b(run|execute)\s+applescript\b", lower):
        return "run_applescript"

    # Calendar
    if re.search(r"\b(calendar|events|event|schedule|appointment|meeting)\b", lower) or (re.search(r"\b(today|day)\b", lower) and re.search(r"\b(what|my|have|got|look|agenda)\b", lower)):
        if re.search(r"\b(add|create|new|schedule|set.?up|make)\b", lower):
            return "create_event"
        return "check_calendar"

    # Email
    if re.search(r"\b(email|mail|inbox|message|gmail|outlook)\b", lower):
        if re.search(r"\b(send|compose|write|new|draft)\b", lower):
            return "send_email"
        if re.search(r"\b(read|check|what|show|any|unread|new)\b", lower):
            return "read_email"
        return "read_email"

    # Notes
    if re.search(r"\b(note|notes)\b", lower):
        if re.search(r"\b(create|new|make|write|add|take)\b", lower):
            return "create_note"
        if re.search(r"\b(find|search|look.?for)\b", lower):
            return "search_notes"
        if re.search(r"\b(list|show|what|all|my)\b", lower):
            return "list_notes"
        return "list_notes"

    # Reminders
    if re.search(r"\b(remind|reminder|reminders|to.?do|task)\b", lower):
        if re.search(r"\b(create|new|make|add|set|me)\b", lower):
            return "create_reminder"
        if re.search(r"\b(list|show|what|get|my|all|pending)\b", lower):
            return "get_reminders"
        return "get_reminders"

    # Code / Research
    if re.search(r"\b(code|write a|function|program|script|implement|python|javascript)\b", lower):
        return "code"
    if re.search(r"\b(search|research|look up|find|browse|google|what is|tell me about)\b", lower):
        return "research"

    # Planning / Analysis
    if re.search(r"\b(plan|analyze|compare|evaluate|strategy|summarize)\b", lower):
        return "planning"

    return "chat"


async def build_context(text: str) -> str:
    results = search_context(text, limit=5)
    if not results:
        return ""
    return "\n".join(
        f"[{r['timestamp']}] {r['role']}: {r['content']}" for r in results
    )


async def route_to_ollama(text: str, context: str) -> str:
    prompt = f"""You are JARVIS, a macOS AI assistant. Keep responses concise and natural.

Relevant context:
{context}

User: {text}
JARVIS:"""
    async with httpx.AsyncClient(timeout=30) as http:
        resp = await http.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": "llama3.2", "prompt": prompt, "stream": False},
        )
        resp.raise_for_status()
        data = resp.json()
        return data.get("response", "")


async def route_to_gemini(text: str, context: str, system_extra: str = "") -> str:
    system = "You are JARVIS, an AI assistant for macOS. Respond conversationally and concisely, like Siri."
    if system_extra:
        system += f"\n\n{system_extra}"
    if context:
        system += f"\n\nConversation history:\n{context}"
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[system, text],
    )
    return response.text


async def handle_action_intent(intent: str, text: str) -> str:
    lower = text.lower()

    try:
        # ---- Date & Time ----
        if intent == "date_time":
            import subprocess
            result = subprocess.run(["date", "+%A, %B %d, %Y  %I:%M %p"], capture_output=True, text=True)
            return f"It's {result.stdout.strip()}."

        # ---- System Info ----
        if intent == "battery_status":
            batt = system_info.battery_status()
            status = "charging" if batt["charging"] else "on battery"
            remaining = f" Approximately {batt['remaining']} remaining." if batt["remaining"] != "unknown" else ""
            return f"Your battery is at {batt['percent']}%, {status}.{remaining}"

        if intent == "wifi_status":
            wifi = system_info.wifi_status()
            if wifi["connected"]:
                return f"You're connected to {wifi['ssid']} with signal strength of {wifi['signal']} dBm."
            return "You're not connected to Wi-Fi."

        if intent == "system_info":
            info = system_actions.get_system_info()
            return (
                f"Running {info['os']} on {info['hostname']}. "
                f"{info['memory_gb']} GB of memory. "
                f"CPU load: {info['cpu_load']}. "
                f"Disk usage: {info['disk_used']}. "
                f"{info['uptime']}"
            )

        if intent == "uptime":
            uptime = system_info.system_load()["uptime"]
            return f"{uptime}"

        if intent == "disk_status":
            disk = system_info.system_load()["disk"]
            return f"Disk status: {disk[:120]}"

        # ---- App Control ----
        if intent == "open_app":
            app_map = {
                "chrome": "Google Chrome", "safari": "Safari", "firefox": "Firefox",
                "terminal": "Terminal", "iterm": "iTerm2", "spotify": "Spotify",
                "slack": "Slack", "vscode": "Visual Studio Code",
                "code": "Visual Studio Code", "finder": "Finder",
                "mail": "Mail", "calendar": "Calendar", "notes": "Notes",
                "settings": "System Settings", "photos": "Photos",
                "music": "Music", "messages": "Messages", "facetime": "FaceTime",
                "maps": "Maps", "siri": "Siri", "calculator": "Calculator",
                "calendar": "Calendar", "contacts": "Contacts", "reminders": "Reminders",
            }
            for keyword, app_name in app_map.items():
                if keyword in lower:
                    return system_actions.open_app(app_name)
            m = re.search(r"(?:open|launch|start)\s+(.+?)$", text, re.IGNORECASE)
            app = m.group(1).strip().title() if m else text.replace("open", "").strip().title()
            return system_actions.open_app(app)

        if intent == "quit_app":
            m = re.search(r"(?:close|quit)\s+(?:app\s+)?(.+?)$", text, re.IGNORECASE)
            app = m.group(1).strip().title() if m else "the app"
            return system_actions.quit_app(app)

        if intent == "get_active_app":
            app = system_actions.get_active_app()
            return f"The current active application is {app}."

        # ---- Screen & System ----
        if intent == "lock_screen":
            return system_info.lock_screen()

        if intent == "sleep":
            return system_info.sleep()

        if intent == "screenshot":
            return system_actions.take_screenshot()

        if intent == "show_desktop":
            return system_actions.show_desktop()

        if intent == "set_volume":
            m = re.search(r"(\d+)", text)
            if m:
                level = int(m.group(1))
                system_info.set_volume(level)
                return f"Volume set to {level}%."
            if any(w in lower for w in ["up", "increase", "higher"]):
                current = system_info.get_volume()
                system_info.set_volume(min(100, current + 10))
                return f"Volume increased to {min(100, current + 10)}%."
            if any(w in lower for w in ["down", "decrease", "lower"]):
                current = system_info.get_volume()
                system_info.set_volume(max(0, current - 10))
                return f"Volume decreased to {max(0, current - 10)}%."
            if any(w in lower for w in ["mute", "silent", "off"]):
                system_info.set_volume(0)
                return "Volume muted."
            return f"Current volume is {system_info.get_volume()}%."

        if intent == "get_volume":
            return f"Current volume is {system_info.get_volume()}%."

        if intent == "set_brightness":
            m = re.search(r"(\d+)", text)
            if m:
                level = min(100, max(0, int(m.group(1)))) / 100.0
                system_info.set_brightness(level)
                return f"Brightness set to {int(level * 100)}%."
            if any(w in lower for w in ["up", "increase", "higher"]):
                current = system_info.get_brightness()
                new_val = min(1.0, current + 0.1)
                system_info.set_brightness(new_val)
                return f"Brightness increased to {int(new_val * 100)}%."
            if any(w in lower for w in ["down", "decrease", "lower"]):
                current = system_info.get_brightness()
                new_val = max(0.0, current - 0.1)
                system_info.set_brightness(new_val)
                return f"Brightness decreased to {int(new_val * 100)}%."
            return f"Current brightness is {int(system_info.get_brightness() * 100)}%."

        if intent == "get_brightness":
            return f"Current brightness is {int(system_info.get_brightness() * 100)}%."

        # ---- Clipboard ----
        if intent == "get_clipboard":
            content = system_info.get_clipboard()
            if content:
                return f"Your clipboard contains: {content[:200]}"
            return "Your clipboard is empty."

        if intent == "set_clipboard":
            m = re.search(r"(?:copy|save|put)\s+(?:this|that|the following\s*)?:?\s*(.+?)$", text, re.IGNORECASE)
            content = m.group(1).strip() if m else text
            system_info.set_clipboard(content)
            return f"Copied to clipboard."

        # ---- Terminal ----
        if intent == "run_terminal":
            m = re.search(r"(?:run|execute)\s+(?:command|terminal|shell|script)\s+(.+?)$", text, re.IGNORECASE)
            cmd = m.group(1).strip().strip('"\'') if m else text
            result = system_actions.execute_terminal(cmd)
            if result["success"]:
                output = result["stdout"][:300]
                return f"Executed: {cmd}\n{output}" if output else f"Executed: {cmd}"
            return f"Command failed: {result['stderr'][:200]}"

        # ---- AppleScript ----
        if intent == "run_applescript":
            m = re.search(r"(?:run|execute)\s+applescript\s+(.+?)$", text, re.IGNORECASE)
            script = m.group(1).strip().strip('"\'') if m else text
            result = applescript_bridge.run_applescript(script)
            return f"AppleScript result: {result[:200]}" if result else "AppleScript executed."

        # ---- Calendar ----
        if intent == "check_calendar":
            events = calendar_access.fetch_today_events()
            if not events:
                return "You have no events on your calendar today."
            lines = [f"• {e['title']} from {e['start']} to {e['end']}" for e in events]
            return f"Here are your events today:\n" + "\n".join(lines)

        if intent == "create_event":
            title = "New Event"
            start_date = ""
            m = re.search(r"(?:add|create|schedule)\s+(?:an?\s+)?event\s+(?:called\s+|named\s+)?[\"']?(.+?)[\"']?(?:\s+(?:on|for)\s+(.+))?$", text, re.IGNORECASE)
            if m:
                title = m.group(1).strip()
                if m.group(2):
                    start_date = m.group(2).strip()
            else:
                m2 = re.search(r"(?:add|create|schedule)\s+(?:an?\s+)?(.+?)\s+(?:on|for)\s+(.+?)$", text, re.IGNORECASE)
                if m2:
                    title = m2.group(1).strip()
                    start_date = m2.group(2).strip()
            result = calendar_access.create_event(title, start_date)
            if not start_date:
                return f"Created a new event: {title} for today."
            return f"Created a new event: {title} on {start_date}."

        # ---- Email ----
        if intent == "read_email":
            mails = mail_access.read_inbox(5)
            if not mails:
                return "You have no unread emails."
            lines = [f"• From: {m['from']} — {m['subject']}" for m in mails]
            return f"You have {len(mails)} unread emails:\n" + "\n".join(lines)

        if intent == "send_email":
            to_m = re.search(r"(?:to|send)\s+([\w.@]+)", text)
            subj_m = re.search(r"(?:subject|about|regarding)\s+[\"'](.+?)[\"']", text, re.IGNORECASE)
            to = to_m.group(1) if to_m else ""
            subject = subj_m.group(1) if subj_m else "From JARVIS"
            if to:
                mail_access.send_email(to, subject, text)
                return f"Email sent to {to} with subject '{subject}'."
            return "Who should I send the email to?"

        # ---- Notes ----
        if intent == "list_notes":
            all_notes = notes.list_notes()
            if not all_notes:
                return "You have no notes."
            lines = [f"• {n['title']}" for n in all_notes[:10]]
            return f"Your notes:\n" + "\n".join(lines)

        if intent == "create_note":
            title_m = re.search(r"(?:create|make|write|add|take)\s+(?:a\s+)?note\s+(?:called\s+|named\s+)?[\"']?(.+?)[\"']?(?:\s*(?::|with\s+body)\s*(.*))?$", text, re.IGNORECASE)
            if title_m:
                title = title_m.group(1).strip()
                body = title_m.group(2).strip() if title_m.group(2) else ""
            else:
                title = "Note from JARVIS"
                body = text
            notes.create_note(title, body)
            return f"Created note: {title}"

        if intent == "search_notes":
            m = re.search(r"(?:find|search|look\s+for)\s+(.+?)$", text, re.IGNORECASE)
            query = m.group(1).strip() if m else text
            results = notes.search_notes(query)
            if not results:
                return f"No notes found matching '{query}'."
            lines = [f"• {n['title']}: {n['body'][:80]}..." for n in results]
            return f"Notes matching '{query}':\n" + "\n".join(lines)

        # ---- Reminders ----
        if intent == "get_reminders":
            reminders = system_info.get_reminders()
            if not reminders:
                return "You have no pending reminders."
            lines = [f"• [{r['list']}] {r['title']}" for r in reminders]
            return f"Your reminders:\n" + "\n".join(lines)

        if intent == "create_reminder":
            m = re.search(r"(?:remind|create|make|add|set)\s+(?:me\s+)?(?:to\s+)?(.+?)$", text, re.IGNORECASE)
            title = m.group(1).strip() if m else text
            system_info.create_reminder(title)
            return f"I'll remind you to {title}."

        # ---- Contacts ----
        if intent == "search_contacts":
            m = re.search(r"(?:find|search|look\s+for|get)\s+(?:contact\s+)?(.+?)$", text, re.IGNORECASE)
            query = m.group(1).strip() if m else ""
            contacts = system_info.get_contacts(query)
            if not contacts:
                return f"No contacts found{f' for {query}' if query else ''}."
            lines = []
            for c in contacts[:5]:
                info = c["name"]
                if c["phone"]:
                    info += f" — {c['phone']}"
                if c["email"]:
                    info += f" — {c['email']}"
                lines.append(f"• {info}")
            return "Contacts:\n" + "\n".join(lines)

        # ---- Files ----
        if intent == "find_files":
            m = re.search(r"(?:find|search|locate)\s+(?:files?\s+)?(?:named|called|for)?\s*(.+?)$", text, re.IGNORECASE)
            query = m.group(1).strip() if m else text
            files = system_actions.find_files(query)
            if not files:
                return f"No files found matching '{query}'."
            lines = [f"• {f['name']}" for f in files[:10]]
            return f"Found {len(files)} files matching '{query}':\n" + "\n".join(lines)

        # ---- Empty Trash ----
        if intent == "empty_trash":
            return system_info.empty_trash()

    except Exception as e:
        return f"I ran into an issue: {str(e)}. Please try again."

    return ""


async def process_intent(text: str) -> str:
    intent = classify_intent(text)
    context = await build_context(text)
    store_entry("user", text, intent, "user")

    if intent in ACTION_INTENTS:
        response = await handle_action_intent(intent, text)
    elif intent in SIMPLE_INTENTS:
        if intent == "capabilities":
            response = (
                "I can help you with many things! Here's what I can do:\n"
                "• Open and close applications\n"
                "• Check your calendar and create events\n"
                "• Read and send emails\n"
                "• Create, search, and list notes\n"
                "• Check reminders and create new ones\n"
                "• Search your contacts\n"
                "• Check system status (battery, Wi-Fi, disk space, uptime)\n"
                "• Control volume and brightness\n"
                "• Lock your screen or put it to sleep\n"
                "• Take screenshots\n"
                "• Search files on your Mac\n"
                "• Run terminal commands\n"
                "• Answer questions and have conversations\n"
                "Just tell me what you need!"
            )
        elif intent == "greeting":
            response = await route_to_gemini(text, context, "Respond with a brief greeting as JARVIS.")
        elif intent == "farewell":
            response = await route_to_gemini(text, context, "Respond with a brief farewell as JARVIS.")
        elif intent == "identity":
            response = (
                "I'm JARVIS, your personal AI assistant for macOS. "
                "I can help you with apps, emails, calendar, notes, reminders, "
                "system control, and more. What would you like me to do?"
            )
        else:
            try:
                response = await route_to_ollama(text, context)
            except Exception:
                response = await route_to_gemini(text, context)
    elif intent == "chat":
        try:
            response = await route_to_ollama(text, context)
        except Exception:
            response = await route_to_gemini(text, context)
    else:
        response = await route_to_gemini(text, context)

    store_entry("assistant", response, intent, "assistant")
    return response


ACTION_INTENTS = {
    "date_time", "battery_status", "wifi_status", "system_info", "uptime", "disk_status",
    "open_app", "quit_app", "get_active_app",
    "lock_screen", "sleep", "screenshot", "show_desktop",
    "set_volume", "get_volume", "set_brightness", "get_brightness",
    "get_clipboard", "set_clipboard",
    "run_terminal", "run_applescript",
    "check_calendar", "create_event",
    "read_email", "send_email",
    "list_notes", "create_note", "search_notes",
    "get_reminders", "create_reminder",
    "search_contacts",
    "find_files", "empty_trash",
}
