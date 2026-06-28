import sqlite3
from config import DATABASE_PATH


def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    conn = get_connection()
    conn.execute("""
        CREATE VIRTUAL TABLE IF NOT EXISTS conversation_memory
        USING fts5(timestamp, role, content, intent, source);
    """)
    conn.commit()
    conn.close()


def store_entry(role: str, content: str, intent: str = "chat", source: str = "user") -> None:
    conn = get_connection()
    conn.execute(
        "INSERT INTO conversation_memory (timestamp, role, content, intent, source) "
        "VALUES (datetime('now'), ?, ?, ?, ?)",
        (role, content, intent, source),
    )
    conn.commit()
    conn.close()


def _sanitize_fts5(query: str) -> str:
    words = [w for w in query.split() if w.isalnum()]
    return " OR ".join(words) if words else query


def search_context(query: str, limit: int = 5) -> list[dict]:
    conn = get_connection()
    safe_query = _sanitize_fts5(query)
    if not safe_query:
        conn.close()
        return []
    rows = conn.execute(
        "SELECT timestamp, role, content, intent, source, rank "
        "FROM conversation_memory "
        "WHERE conversation_memory MATCH ? "
        "ORDER BY rank "
        "LIMIT ?",
        (safe_query, limit),
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def recent_entries(limit: int = 10) -> list[dict]:
    conn = get_connection()
    rows = conn.execute(
        "SELECT timestamp, role, content, intent, source "
        "FROM conversation_memory "
        "ORDER BY rowid DESC "
        "LIMIT ?",
        (limit,),
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]
