import { useRef, useCallback } from "react";

type MessageHandler = (data: Record<string, unknown>) => void;

export function useWebSocket(onMessage: MessageHandler) {
  const ws = useRef<WebSocket | null>(null);
  const retries = useRef(0);
  const maxRetries = 10;
  const onMessageRef = useRef(onMessage);
  onMessageRef.current = onMessage;

  const connect = useCallback(() => {
    if (ws.current?.readyState === WebSocket.OPEN) return;

    const protocol = location.protocol === "https:" ? "wss:" : "ws:";
    const socket = new WebSocket(`${protocol}//${location.host}/ws`);

    socket.onopen = () => {
      retries.current = 0;
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessageRef.current(data);
      } catch {
        // ignore malformed messages
      }
    };

    socket.onclose = () => {
      ws.current = null;
      if (retries.current < maxRetries) {
        const delay = Math.min(1000 * 2 ** retries.current, 30000);
        retries.current++;
        setTimeout(connect, delay);
      }
    };

    ws.current = socket;
  }, []);

  const send = useCallback((data: Record<string, unknown>) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(data));
    }
  }, []);

  return { send, connect };
}
