from pydantic import BaseModel


class WSMessage(BaseModel):
    type: str
    text: str | None = None
    state: str | None = None


class TranscriptRequest(BaseModel):
    text: str


class StateUpdate(BaseModel):
    state: str
