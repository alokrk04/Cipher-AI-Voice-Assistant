import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path, override=False)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://localhost:11434")
DATABASE_PATH = os.environ.get("DATABASE_PATH", "cipher_memory.db")

if not os.path.isabs(DATABASE_PATH):
    DATABASE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), DATABASE_PATH)

if not GEMINI_API_KEY:
    raise RuntimeError(
        "GEMINI_API_KEY is not set. Create a .env file with your key.\n"
        "See backend/.env.example for reference."
    )
