import type { OrbState } from "../three/colors";

interface Props {
  state: OrbState;
}

const LABELS: Record<OrbState, string> = {
  idle: "Standing by",
  listening: "Listening...",
  thinking: "Thinking...",
  speaking: "Speaking",
};

export default function StatusBar({ state }: Props) {
  return (
    <div className="status-bar">
      <span className={`status-dot ${state}`} />
      <span>{LABELS[state]}</span>
    </div>
  );
}
