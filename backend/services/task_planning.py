import httpx
import re
from config import OLLAMA_URL, GEMINI_API_KEY
from services.memory_management import context_string, store_entry
from services import system_actions, calendar_access, mail_access, notes, applescript_bridge, system_info
from google import genai

client = genai.Client(api_key=GEMINI_API_KEY)

SIMPLE_INTENTS = {"greeting", "farewell", "thanks", "identity", "small_talk", "capabilities"}
LOCAL_INTENTS = {"chat", "small_talk"}
CLOUD_INTENTS = {"code", "research", "planning"}


def classify_intent(text: str) -> str:
    lower = text.lower()

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

    if re.search(r"\b(date|time|day|today|clock)\b", lower) and re.search(r"\b(what|whats|current|tell|is it|is today)\b", lower):
        if not re.search(r"\b(event|calendar|schedule|meeting|appointment)\b", lower):
            return "date_time"

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

    if re.search(r"\b(open|launch|start)\b", lower) and not re.search(r"\b(file|document|note)\b", lower):
        return "open_app"
    if re.search(r"\b(close|quit|exit)\b", lower) and re.search(r"\b(app|application)\b", lower):
        return "quit_app"
    if re.search(r"\b(what.*app|frontmost|active|current app|what.*running)\b", lower):
        return "get_active_app"

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

    if re.search(r"\b(clipboard|clip.?board)\b", lower) and re.search(r"\b(what|whats|show|get|check|tell|my|in)\b", lower):
        return "get_clipboard"
    if re.search(r"\b(copy|clipboard)\b", lower) and re.search(r"\b(this|that|text|to|following|onto)\b", lower):
        return "set_clipboard"

    if re.search(r"\b(contact|contacts|address.?book|phone.?book)\b", lower):
        return "search_contacts"

    if re.search(r"\b(find|search|locate)\b", lower) and re.search(r"\b(file|document|folder|named|called)\b", lower):
        return "find_files"
    if re.search(r"\b(empty.*trash|clean.*trash|clear.*trash)\b", lower):
        return "empty_trash"

    if re.search(r"\b(run|execute)\s+(command|terminal|shell|script|a\s+command)\b", lower):
        return "run_terminal"

    if re.search(r"\b(run|execute)\s+applescript\b", lower):
        return "run_applescript"

    if re.search(r"\b(calendar|events|event|schedule|appointment|meeting)\b", lower) or (re.search(r"\b(today|day)\b", lower) and re.search(r"\b(what|my|have|got|look|agenda)\b", lower)):
        if re.search(r"\b(add|create|new|schedule|set.?up|make)\b", lower):
            return "create_event"
        return "check_calendar"

    if re.search(r"\b(email|mail|inbox|message|gmail|outlook)\b", lower):
        if re.search(r"\b(send|compose|write|new|draft)\b", lower):
            return "send_email"
        return "read_email"

    if re.search(r"\b(note|notes)\b", lower):
        if re.search(r"\b(create|new|make|write|add|take)\b", lower):
            return "create_note"
        if re.search(r"\b(find|search|look.?for)\b", lower):
            return "search_notes"
        return "list_notes"

    if re.search(r"\b(remind|reminder|reminders|to.?do|task)\b", lower):
        if re.search(r"\b(create|new|make|add|set|me)\b", lower):
            return "create_reminder"
        return "get_reminders"

    if re.search(r"\b(code|write a|function|program|script|implement|python|javascript)\b", lower):
        return "code"
    if re.search(r"\b(search|research|look up|find|browse|google|what is|tell me about)\b", lower):
        return "research"
    if re.search(r"\b(plan|analyze|compare|evaluate|strategy|summarize)\b", lower):
        return "planning"

    return "chat"


def _route_tier(intent: str) -> str:
    if intent in ACTION_INTENTS:
        return "action"
    if intent in CLOUD_INTENTS:
        return "cloud"
    return "local"


async def route_to_ollama(text: str, context: str) -> str:
    prompt = f"""You are CIPHER, a macOS AI assistant. Keep responses concise and natural.

{context}

User: {text}
CIPHER:"""
    async with httpx.AsyncClient(timeout=30) as http:
        resp = await http.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": "llama3.2", "prompt": prompt, "stream": False},
        )
        resp.raise_for_status()
        data = resp.json()
        return data.get("response", "").strip()


async def route_to_gemini(text: str, context: str, system_extra: str = "") -> str:
    system = "You are CIPHER, an AI assistant for macOS. Respond conversationally and concisely, like Siri."
    if system_extra:
        system += f"\n\n{system_extra}"
    if context:
        system += f"\n\nConversation history:\n{context}"
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[system, text],
    )
    return response.text.strip()


async def handle_action_intent(intent: str, text: str) -> str:
    lower = text.lower()

    try:
        if intent == "date_time":
            result = await system_actions._run_terminal('date "+%A, %B %d, %Y  %I:%M %p"')
            return f"It's {result['stdout']}."

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
            info = await system_actions.get_system_info()
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
                "contacts": "Contacts", "reminders": "Reminders",
            }
            for keyword, app_name in app_map.items():
                if keyword in lower:
                    return await system_actions.open_app(app_name)
            m = re.search(r"(?:open|launch|start)\s+(.+?)$", text, re.IGNORECASE)
            app = m.group(1).strip().title() if m else text.replace("open", "").strip().title()
            return await system_actions.open_app(app)

        if intent == "quit_app":
            m = re.search(r"(?:close|quit)\s+(?:app\s+)?(.+?)$", text, re.IGNORECASE)
            app = m.group(1).strip().title() if m else "the app"
            return await system_actions.quit_app(app)

        if intent == "get_active_app":
            app = await system_actions.get_active_app()
            return f"The current active application is {app}."

        if intent == "lock_screen":
            return system_info.lock_screen()

        if intent == "sleep":
            return system_info.sleep()

        if intent == "screenshot":
            return await system_actions.take_screenshot()

        if intent == "show_desktop":
            return await system_actions.show_desktop()

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

        if intent == "get_clipboard":
            content = system_info.get_clipboard()
            if content:
                return f"Your clipboard contains: {content[:200]}"
            return "Your clipboard is empty."

        if intent == "set_clipboard":
            m = re.search(r"(?:copy|save|put)\s+(?:this|that|the following\s*)?:?\s*(.+?)$", text, re.IGNORECASE)
            content = m.group(1).strip() if m else text
            system_info.set_clipboard(content)
            return "Copied to clipboard."

        if intent == "run_terminal":
            m = re.search(r"(?:run|execute)\s+(?:command|terminal|shell|script)\s+(.+?)$", text, re.IGNORECASE)
            cmd = m.group(1).strip().strip('"\'') if m else text
            result = await system_actions.execute_terminal(cmd)
            if result["success"]:
                output = result["stdout"][:300]
                return f"Executed: {cmd}\n{output}" if output else f"Executed: {cmd}"
            return f"Command failed: {result['stderr'][:200]}"

        if intent == "run_applescript":
            m = re.search(r"(?:run|execute)\s+applescript\s+(.+?)$", text, re.IGNORECASE)
            script = m.group(1).strip().strip('"\'') if m else text
            result = applescript_bridge.run_applescript(script)
            return f"AppleScript result: {result[:200]}" if result else "AppleScript executed."

        if intent == "check_calendar":
            events = calendar_access.fetch_today_events()
            if not events:
                return "You have no events on your calendar today."
            lines = [f"• {e['title']} from {e['start']} to {e['end']}" for e in events]
            return "Here are your events today:\n" + "\n".join(lines)

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
            calendar_access.create_event(title, start_date)
            if not start_date:
                return f"Created a new event: {title} for today."
            return f"Created a new event: {title} on {start_date}."

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
            subject = subj_m.group(1) if subj_m else "From CIPHER"
            if to:
                mail_access.send_email(to, subject, text)
                return f"Email sent to {to} with subject '{subject}'."
            return "Who should I send the email to?"

        if intent == "list_notes":
            all_notes = notes.list_notes()
            if not all_notes:
                return "You have no notes."
            lines = [f"• {n['title']}" for n in all_notes[:10]]
            return "Your notes:\n" + "\n".join(lines)

        if intent == "create_note":
            title_m = re.search(r"(?:create|make|write|add|take)\s+(?:a\s+)?note\s+(?:called\s+|named\s+)?[\"']?(.+?)[\"']?(?:\s*(?::|with\s+body)\s*(.*))?$", text, re.IGNORECASE)
            if title_m:
                title = title_m.group(1).strip()
                body = title_m.group(2).strip() if title_m.group(2) else ""
            else:
                title = "Note from CIPHER"
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

        if intent == "get_reminders":
            reminders = system_info.get_reminders()
            if not reminders:
                return "You have no pending reminders."
            lines = [f"• [{r['list']}] {r['title']}" for r in reminders]
            return "Your reminders:\n" + "\n".join(lines)

        if intent == "create_reminder":
            m = re.search(r"(?:remind|create|make|add|set)\s+(?:me\s+)?(?:to\s+)?(.+?)$", text, re.IGNORECASE)
            title = m.group(1).strip() if m else text
            system_info.create_reminder(title)
            return f"I'll remind you to {title}."

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

        if intent == "find_files":
            m = re.search(r"(?:find|search|locate)\s+(?:files?\s+)?(?:named|called|for)?\s*(.+?)$", text, re.IGNORECASE)
            query = m.group(1).strip() if m else text
            return await system_actions._find_files_text(query)

        if intent == "empty_trash":
            return system_info.empty_trash()

    except Exception as e:
        return f"I ran into an issue: {str(e)}. Please try again."

    return ""


async def process_intent(text: str) -> str:
    intent = classify_intent(text)
    context = context_string(text)
    store_entry("user", text, intent, "user")

    tier = _route_tier(intent)

    try:
        if tier == "action":
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
                try:
                    response = await route_to_gemini(text, context, "Respond with a brief greeting as CIPHER.")
                except Exception:
                    response = await _local_or_fallback(text, context)
            elif intent == "farewell":
                try:
                    response = await route_to_gemini(text, context, "Respond with a brief farewell as CIPHER.")
                except Exception:
                    response = await _local_or_fallback(text, context)
            elif intent == "identity":
                response = (
                    "I'm CIPHER, your personal AI assistant for macOS. "
                    "I can help you with apps, emails, calendar, notes, reminders, "
                    "system control, and more. What would you like me to do?"
                )
            else:
                response = await _local_or_fallback(text, context)
        elif tier == "cloud":
            try:
                response = await route_to_gemini(text, context)
            except Exception:
                response = await _local_or_fallback(text, context)
        else:
            response = await _local_or_fallback(text, context)
    except Exception as e:
        err = str(e)
        if "QUOTA" in err.upper() or "RESOURCE_EXHAUSTED" in err or "429" in err:
            response = "I'm having trouble with my cloud AI right now due to API limits. Let me try locally..."
            try:
                response = await _local_or_fallback(text, context)
            except Exception:
                response = (
                    "I'm currently unable to process that request. Both my local and cloud "
                    "AI models are unavailable. Please check that Ollama is running locally."
                )
        else:
            response = f"Sorry, I encountered an error. Please try again."

    store_entry("assistant", response, intent, "assistant")
    return response


async def _local_or_fallback(text: str, context: str) -> str:
    try:
        return await route_to_ollama(text, context)
    except Exception:
        pass
    try:
        return await route_to_gemini(text, context)
    except Exception:
        return "I'm having trouble connecting to my language models right now. Please check that Ollama is running and try again."


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
