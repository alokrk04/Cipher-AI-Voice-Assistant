import { useState, useCallback, useRef, useEffect } from "react";
import ParticleOrb from "./components/ParticleOrb";
import StatusBar from "./components/StatusBar";
import { useWebSocket } from "./hooks/useWebSocket";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "./hooks/useSpeechSynthesis";
import type { OrbState } from "./three/colors";

type TranscriptEntry = { role: "user" | "assistant"; text: string };

export default function App() {
  const [awake, setAwake] = useState(false);
  const [state, setState] = useState<OrbState>("idle");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const fragmentBuf = useRef("");
  const restartTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  const handleSpeechDone = useCallback(() => {
    setState("idle");
  }, []);

  const speech = useSpeechSynthesis(handleSpeechDone);

  const handleMessage = useCallback((data: Record<string, unknown>) => {
    const type = data.type as string;
    if (type === "state") {
      setState(data.state as OrbState);
    } else if (type === "fragment") {
      setState("speaking");
      fragmentBuf.current += data.text as string;
      speech.enqueue(data.text as string);
      setTranscript((prev) => {
        const copy = [...prev];
        if (copy.length > 0 && copy[copy.length - 1].role === "assistant") {
          copy[copy.length - 1] = { role: "assistant", text: fragmentBuf.current };
        } else {
          copy.push({ role: "assistant", text: fragmentBuf.current });
        }
        return copy;
      });
    } else if (type === "response") {
      setState("speaking");
      fragmentBuf.current = "";
      setTranscript((prev) => {
        const copy = [...prev];
        if (copy.length > 0 && copy[copy.length - 1].role === "assistant") {
          copy[copy.length - 1] = { role: "assistant", text: data.text as string };
        } else {
          copy.push({ role: "assistant", text: data.text as string });
        }
        return copy;
      });
      speech.speak(data.text as string);
    } else if (type === "error") {
      console.error("Server error:", data.text);
      setState("idle");
    }
  }, [speech]);

  const ws = useWebSocket(handleMessage);

  const sendTranscript = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      setTranscript((prev) => [...prev, { role: "user", text }]);
      ws.send({ type: "transcript", text });
      setState("thinking");
    },
    [ws]
  );

  const recognition = useSpeechRecognition(
    useCallback((text: string) => {
      sendTranscript(text);
    }, [sendTranscript])
  );

  const handleWake = useCallback(() => {
    speech.warmup();
    ws.connect();
    setAwake(true);
    setTimeout(() => {
      recognition.start();
    }, 100);
  }, [speech, ws, recognition]);

  const handleMicClick = useCallback(() => {
    if (recognition.isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  }, [recognition]);

  useEffect(() => {
    if (!awake) return;
    if (state === "idle" && !recognition.isListening) {
      restartTimer.current = setTimeout(() => {
        recognition.start();
      }, 500);
    }
    return () => {
      if (restartTimer.current !== null) {
        clearTimeout(restartTimer.current);
        restartTimer.current = null;
      }
    };
  }, [awake, state, recognition.isListening, recognition.start]);

  useEffect(() => {
    if (transcriptEndRef.current) {
      transcriptEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [transcript, recognition.liveInterim]);

  return (
    <>
      <ParticleOrb state={awake ? state : "idle"} />
      {!speech.supported && (
        <div className="banner warn">Your browser does not support speech synthesis. Use Chrome or Safari.</div>
      )}
      {!awake ? (
        <div className="wake-overlay">
          <div className="orb-fallback">CIPHER</div>
          <p className="wake-subtitle">AI Assistant for macOS</p>
          <button onClick={handleWake} className="wake-btn">
            Activate System
          </button>
        </div>
      ) : (
        <div className="overlay">
          <StatusBar state={state} />
          <button
            onClick={handleMicClick}
            className="mic-btn"
          >
            {recognition.isListening ? "Listening..." : "Speak"}
          </button>
          <div className="transcript">
            {transcript.map((entry, i) => (
              <div key={i} className={entry.role}>
                <strong>{entry.role === "user" ? "You" : "CIPHER"}:</strong>{" "}
                {entry.text}
              </div>
            ))}
            {recognition.liveInterim && (
              <div className="user interim">
                <strong>You:</strong> {recognition.liveInterim}
              </div>
            )}
            <div ref={transcriptEndRef} />
          </div>
        </div>
      )}
    </>
  );
}
