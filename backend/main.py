import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.websocket import router as ws_router
from services.memory_management import init_db
from services.system_info import battery_status, wifi_status, system_load
from services.system_actions import get_system_info, get_active_app


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title="CIPHER AI Assistant — Siri for macOS", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ws_router)


@app.get("/")
async def root():
    return {
        "name": "CIPHER",
        "version": "1.0.0",
        "status": "online",
        "description": "macOS AI Assistant — like Siri for your Mac",
    }


@app.get("/status")
async def full_status():
    loop = asyncio.get_running_loop()
    batt = await loop.run_in_executor(None, battery_status)
    wifi = await loop.run_in_executor(None, wifi_status)
    sys_info, active_app = await asyncio.gather(
        get_system_info(),
        get_active_app(),
    )
    return {
        "system": sys_info,
        "battery": batt,
        "wifi": wifi,
        "active_app": active_app,
    }


@app.get("/history")
async def get_history():
    from services.memory_management import recent_entries
    return recent_entries(20)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8765, reload=True)
