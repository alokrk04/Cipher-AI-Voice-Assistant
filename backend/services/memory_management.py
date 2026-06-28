import re
import sqlite3
import threading
from config import DATABASE_PATH

_local = threading.local()


def _get_connection() -> sqlite3.Connection:
    conn = getattr(_local, "conn", None)
    if conn is None:
        conn = sqlite3.connect(DATABASE_PATH, check_same_thread=False)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA journal_mode=WAL")
        conn.execute("PRAGMA synchronous=NORMAL")
        _local.conn = conn
    return conn


def init_db() -> None:
    conn = _get_connection()
    conn.execute("""
        CREATE VIRTUAL TABLE IF NOT EXISTS conversation_memory
        USING fts5(timestamp, role, content, intent, source);
    """)
    conn.commit()


def store_entry(role: str, content: str, intent: str = "chat", source: str = "user") -> None:
    conn = _get_connection()
    conn.execute(
        "INSERT INTO conversation_memory (timestamp, role, content, intent, source) "
        "VALUES (datetime('now'), ?, ?, ?, ?)",
        (role, content, intent, source),
    )
    conn.commit()


def _sanitize_fts5(query: str) -> str:
    words = re.findall(r"[a-zA-Z0-9_]+", query)
    return " OR ".join(words) if words else query


def search_context(query: str, limit: int = 5) -> list[dict]:
    conn = _get_connection()
    safe_query = _sanitize_fts5(query)
    if not safe_query:
        return []
    try:
        rows = conn.execute(
            "SELECT timestamp, role, content, intent, source, rank "
            "FROM conversation_memory "
            "WHERE conversation_memory MATCH ? "
            "ORDER BY rank "
            "LIMIT ?",
            (safe_query, limit),
        ).fetchall()
    except sqlite3.OperationalError:
        rows = conn.execute(
            "SELECT timestamp, role, content, intent, source "
            "FROM conversation_memory "
            "WHERE content LIKE ? "
            "ORDER BY rowid DESC "
            "LIMIT ?",
            (f"%{query[:100]}%", limit),
        ).fetchall()
    return [dict(r) for r in rows]


def context_string(query: str, limit: int = 5) -> str:
    results = search_context(query, limit)
    if not results:
        return ""
    lines = []
    for r in results:
        lines.append(f"[{r['timestamp']}] {r['role']}: {r['content']}")
    return "Relevant history:\n" + "\n".join(lines)


def recent_entries(limit: int = 20) -> list[dict]:
    conn = _get_connection()
    rows = conn.execute(
        "SELECT timestamp, role, content, intent, source "
        "FROM conversation_memory "
        "ORDER BY rowid DESC "
        "LIMIT ?",
        (limit,),
    ).fetchall()
    return [dict(r) for r in rows]
