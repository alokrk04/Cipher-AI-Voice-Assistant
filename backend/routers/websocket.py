from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from services.task_planning import process_intent
import json

router = APIRouter()


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            raw = await websocket.receive_text()
            data = json.loads(raw)

            if data.get("type") != "transcript":
                continue

            text = data.get("text", "").strip()
            if not text:
                continue

            await websocket.send_json({"type": "state", "state": "thinking"})

            try:
                response = await process_intent(text)
            except Exception as e:
                await websocket.send_json({"type": "error", "text": str(e)})
                await websocket.send_json({"type": "state", "state": "idle"})
                continue

            words = response.split()
            buffer = ""
            for word in words:
                buffer += word + " "
                if len(buffer) >= 80 or word in {".", "!", "?", ":", ";"}:
                    await websocket.send_json({"type": "fragment", "text": buffer.strip(), "state": "speaking"})
                    buffer = ""
            if buffer.strip():
                await websocket.send_json({"type": "fragment", "text": buffer.strip(), "state": "speaking"})

            await websocket.send_json({"type": "response", "text": response, "state": "speaking"})
            await websocket.send_json({"type": "state", "state": "idle"})

    except WebSocketDisconnect:
        pass
    except Exception as e:
        try:
            await websocket.send_json({"type": "error", "text": f"Internal error: {str(e)}"})
        except Exception:
            pass
