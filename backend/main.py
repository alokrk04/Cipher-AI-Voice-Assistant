from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.websocket import router as ws_router
from services.memory_management import init_db
from services.system_info import battery_status, wifi_status, system_load
from services.system_actions import get_system_info, get_active_app
from config import GEMINI_API_KEY

app = FastAPI(title="JARVIS AI Assistant — Siri for macOS")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ws_router)


@app.on_event("startup")
async def startup():
    init_db()

@app.get("/")
async def root():
    return {
        "name": "JARVIS",
        "version": "1.0.0",
        "status": "online",
        "description": "macOS AI Assistant — like Siri for your Mac",
    }


@app.get("/status")
async def full_status():
    return {
        "system": get_system_info(),
        "battery": battery_status(),
        "wifi": wifi_status(),
        "active_app": get_active_app(),
    }


@app.get("/history")
async def get_history():
    from services.memory_management import recent_entries
    return recent_entries(20)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8765, reload=True)
