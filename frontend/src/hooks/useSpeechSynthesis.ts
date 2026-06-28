import { useCallback, useEffect, useRef, useState } from "react";

export function useSpeechSynthesis(onDone?: () => void) {
  const queue = useRef<string[]>([]);
  const speaking = useRef(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported] = useState(() => !!window.speechSynthesis);
  const dequeueRef = useRef<() => void>(() => {});
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  const dequeue = useCallback(() => {
    if (queue.current.length === 0) {
      speaking.current = false;
      setIsSpeaking(false);
      onDoneRef.current?.();
      return;
    }
    speaking.current = true;
    setIsSpeaking(true);
    const text = queue.current.shift()!;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.0;
    u.pitch = 0.9;
    if (voiceRef.current) u.voice = voiceRef.current;
    u.onend = () => dequeueRef.current();
    u.onerror = (e) => {
      console.warn("speechSynthesis error:", e.error);
      dequeueRef.current();
    };
    window.speechSynthesis.speak(u);
  }, []);

  dequeueRef.current = dequeue;

  useEffect(() => {
    if (!supported) return;
    const load = () => {
      const voices = window.speechSynthesis.getVoices();
      const en = voices.find(v => v.lang.startsWith("en"));
      if (en) voiceRef.current = en;
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel();
    queue.current = [];
    queue.current.push(text);
    speaking.current = false;
    dequeue();
  }, [dequeue]);

  const enqueue = useCallback((fragment: string) => {
    queue.current.push(fragment);
    if (!speaking.current) {
      dequeue();
    }
  }, [dequeue]);

  const warmup = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
  }, [supported]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    queue.current = [];
    speaking.current = false;
    setIsSpeaking(false);
  }, []);

  return { speak, enqueue, stop, warmup, isSpeaking, supported };
}
