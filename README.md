# CIPHER — AI Voice Assistant for macOS

A low-latency, voice-controlled AI assistant for macOS with a 3D particle visualizer. CIPHER listens via your browser microphone, routes intents to local AppleScript actions or LLMs (Ollama/Gemini), and responds with both on-screen text and spoken audio.

## Architecture

```
┌─────────────┐     WebSocket      ┌──────────────────┐
│  React SPA  │ ◄──────────────►  │  FastAPI Backend  │
│  (Vite)     │    /ws            │  (port 8765)      │
│  port 5173  │                   │                   │
├─────────────┤                   ├──────────────────┤
│ SpeechRecog │                   │ Task Planning     │
│ SpeechSynth │                   │  → 35 intents     │
│ Three.js    │                   │  → 3-tier routing │
│ ParticleOrb │                   │ System Actions    │
└─────────────┘                   │  → AppleScript    │
                                  │ FTS5 Memory      │
                                  │ LLM Fallback     │
                                  └──────────────────┘
```

## Features

- **Voice in / Voice out** — Browser `SpeechRecognition` captures input; `SpeechSynthesis` reads responses aloud
- **Streaming TTS** — Response fragments stream progressively so audio starts before the full reply is ready
- **Hybrid routing** — System commands execute locally (zero LLM latency); chat uses Ollama (`llama3.2`); code/research uses Gemini (`2.0-flash`)
- **macOS integration** — Open/quit apps, check battery/WiFi, calendar, mail, notes, reminders, screenshots, terminal commands, and more via AppleScript
- **Persistent memory** — SQLite FTS5 stores conversations and injects relevant context into LLM prompts
- **3D visualizer** — Animated particle orb with per-state colors and motion (idle/listening/thinking/speaking)
- **Wake gate** — Audio engine unlocks only after user clicks "Activate System" (bypasses browser autoplay policy)

## Prerequisites

- Python 3.10+
- Node.js 18+
- [Ollama](https://ollama.ai) with `llama3.2` pulled (`ollama pull llama3.2`)
- Google Gemini API key ([get one free](https://aistudio.google.com/app/apikey))
- macOS (for system action features)

## Quick Start

### 1. Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create `backend/.env`:

```env
GEMINI_API_KEY=your_key_here
OLLAMA_URL=http://localhost:11434
DATABASE_PATH=cipher_memory.db
```

Start the backend:

```bash
python3 main.py
# → http://localhost:8765
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### 3. Activate

Open `http://localhost:5173` in Chrome, click **Activate System**, and speak.

## Project Structure

```
├── backend/
│   ├── main.py                       # FastAPI entry, lifespan, REST endpoints
│   ├── config.py                     # dotenv loader + env vars
│   ├── models.py                     # Pydantic schemas (WSMessage, etc.)
│   ├── requirements.txt
│   ├── routers/
│   │   └── websocket.py              # WebSocket endpoint /ws
│   ├── services/
│   │   ├── task_planning.py          # Intent classifier + LLM router
│   │   ├── system_actions.py         # Async AppleScript/zsh runner
│   │   ├── system_info.py            # Battery, WiFi, volume, brightness
│   │   ├── memory_management.py      # SQLite FTS5 conversation store
│   │   ├── applescript_bridge.py     # osascript subprocess wrapper
│   │   ├── calendar_access.py        # macOS Calendar.app bridge
│   │   ├── mail_access.py            # macOS Mail.app bridge
│   │   └── notes.py                  # macOS Notes.app bridge
│   └── scripts/
│       └── init_db.py                # Standalone FTS5 schema initializer
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts                # Vite + proxy to backend
│   ├── tsconfig.json
│   └── src/
│       ├── main.tsx                  # React root
│       ├── App.tsx                   # Main component, wake gate, message dispatch
│       ├── styles.css                # All styles (dark theme, glassmorphism)
│       ├── types.d.ts                # Web Speech API type declarations
│       ├── hooks/
│       │   ├── useWebSocket.ts       # WebSocket with reconnect
│       │   ├── useSpeechSynthesis.ts # TTS queue with cancel-before-speak
│       │   └── useSpeechRecognition.ts # Mic capture with silence flush
│       ├── components/
│       │   ├── ParticleOrb.tsx       # Three.js canvas wrapper
│       │   └── StatusBar.tsx         # State indicator pill
│       └── three/
│           ├── colors.ts             # Per-state visual params
│           ├── ParticleSystem.ts     # GLSL particle shader system
│           └── OrbEngine.ts          # Three.js scene/renderer
├── .env.example
└── .gitignore
```

## API

### WebSocket — `/ws`

**Client → Server:**
```json
{"type": "transcript", "text": "what's my battery at?"}
```

**Server → Client (streaming):**
```json
{"type": "state", "state": "thinking"}
{"type": "fragment", "text": "Your battery", "state": "speaking"}
{"type": "fragment", "text": "is at 85% and charging.", "state": "speaking"}
{"type": "response", "text": "Your battery is at 85% and charging.", "state": "speaking"}
{"type": "state", "state": "idle"}
```

### HTTP

| Endpoint | Method | Returns |
|----------|--------|---------|
| `/` | GET | App metadata |
| `/status` | GET | Battery, WiFi, system info, active app |
| `/history` | GET | Last 20 conversation entries |

## Intent Routing

| Tier | Handler | Examples |
|------|---------|---------|
| **Action** | Local macOS (no LLM) | `open_app`, `screenshot`, `set_volume`, `lock_screen`, `check_calendar` |
| **Local** | Ollama `llama3.2` | Chat, small talk, general Q&A |
| **Cloud** | Gemini `2.0-flash` | Code generation, research, planning |

All tiers fall back gracefully: Ollama → Gemini → friendly error message.

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `GEMINI_API_KEY` | — | Google Gemini API key (required) |
| `OLLAMA_URL` | `http://localhost:11434` | Local Ollama endpoint |
| `DATABASE_PATH` | `cipher_memory.db` | SQLite FTS5 database path |

## Color States

| State | Color | Description |
|-------|-------|-------------|
| Idle | Blue | Standing by |
| Listening | Cyan | Microphone active |
| Thinking | Purple → Gold | Processing intent |
| Speaking | Orange → Gold | Audio output |

## Browser Support

- **Chrome** — Fully supported (recommended)
- **Safari** — Speech synthesis supported, speech recognition may vary
- **Firefox** — Limited; no `SpeechRecognition` API
