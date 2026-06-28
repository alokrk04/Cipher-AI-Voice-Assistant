import { useRef, useCallback, useEffect, useState } from "react";

interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  liveInterim: string;
  lastTranscript: string;
  start: () => void;
  stop: () => void;
  clearTranscript: () => void;
}

const SILENCE_TIMEOUT_MS = 800;

export function useSpeechRecognition(
  onResult?: (text: string) => void
): SpeechRecognitionHook {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [liveInterim, setLiveInterim] = useState("");
  const [lastTranscript, setLastTranscript] = useState("");
  const recognition = useRef<SpeechRecognition | null>(null);
  const silenceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finalBuf = useRef("");
  const interimBuf = useRef("");
  const lastSentRef = useRef("");
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const clearTranscript = useCallback(() => {
    setLastTranscript("");
    setTranscript("");
    setLiveInterim("");
    finalBuf.current = "";
    interimBuf.current = "";
    lastSentRef.current = "";
  }, []);

  const flush = useCallback(() => {
    const finalText = finalBuf.current.trim();
    const interimText = interimBuf.current.trim();
    const text = finalText || interimText;
    if (text && text !== lastSentRef.current) {
      lastSentRef.current = text;
      setLastTranscript(text);
      finalBuf.current = "";
      interimBuf.current = "";
      setTranscript("");
      setLiveInterim("");
      onResultRef.current?.(text);
    } else if (text) {
      finalBuf.current = "";
      interimBuf.current = "";
    }
  }, []);

  const clearSilenceTimer = useCallback(() => {
    if (silenceTimer.current !== null) {
      clearTimeout(silenceTimer.current);
      silenceTimer.current = null;
    }
  }, []);

  const resetSilenceTimer = useCallback(() => {
    clearSilenceTimer();
    silenceTimer.current = setTimeout(flush, SILENCE_TIMEOUT_MS);
  }, [clearSilenceTimer, flush]);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      console.warn("SpeechRecognition not available");
      return;
    }
    const inst = new SR();
    inst.continuous = true;
    inst.interimResults = true;
    inst.lang = "en-US";

    inst.onresult = (e: SpeechRecognitionEvent) => {
      let newInterim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) {
          finalBuf.current += r[0].transcript;
        } else {
          newInterim += r[0].transcript;
        }
      }
      if (newInterim) {
        interimBuf.current = newInterim;
        setLiveInterim(newInterim);
      } else {
        setLiveInterim("");
      }
      setTranscript(finalBuf.current + interimBuf.current);
      resetSilenceTimer();
    };

    inst.onend = () => {
      setIsListening(false);
      flush();
    };

    recognition.current = inst;
  }, [resetSilenceTimer, flush]);

  const start = useCallback(() => {
    if (recognition.current && !isListening) {
      finalBuf.current = "";
      interimBuf.current = "";
      lastSentRef.current = "";
      setTranscript("");
      setLiveInterim("");
      try {
        recognition.current.start();
        setIsListening(true);
      } catch (e) {
        console.warn("SpeechRecognition start failed:", e);
      }
    }
  }, [isListening]);

  const stop = useCallback(() => {
    clearSilenceTimer();
    if (recognition.current && isListening) {
      try {
        recognition.current.stop();
      } catch (e) {
        console.warn("SpeechRecognition stop failed:", e);
      }
      setIsListening(false);
    }
    flush();
  }, [isListening, clearSilenceTimer, flush]);

  return { isListening, transcript, liveInterim, lastTranscript, start, stop, clearTranscript };
}
