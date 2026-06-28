import { useCallback, useEffect, useRef, useState } from "react";

export function useSpeechSynthesis(onDone?: () => void) {
  const queue = useRef<string[]>([]);
  const speaking = useRef(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
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
    u.onerror = () => dequeueRef.current();
    window.speechSynthesis.speak(u);
  }, []);

  dequeueRef.current = dequeue;

  useEffect(() => {
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
  }, []);

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel();
    queue.current = [];
    queue.current.push(text);
    setTimeout(() => {
      if (queue.current.length > 0) {
        dequeue();
      }
    }, 50);
  }, [dequeue]);

  const enqueue = useCallback((fragment: string) => {
    queue.current.push(fragment);
    if (!speaking.current) {
      dequeue();
    }
  }, [dequeue]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    queue.current = [];
    speaking.current = false;
    setIsSpeaking(false);
  }, []);

  return { speak, enqueue, stop, isSpeaking };
}
