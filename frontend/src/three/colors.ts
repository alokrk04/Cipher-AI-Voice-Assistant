export interface OrbStateColors {
  color1: [number, number, number];
  color2: [number, number, number];
  speed: number;
  pulse: number;
  radius: number;
}

export type OrbState = "idle" | "listening" | "thinking" | "speaking";

export const STATE_COLORS: Record<OrbState, OrbStateColors> = {
  idle: {
    color1: [0.3, 0.6, 1.0],
    color2: [0.1, 0.3, 0.8],
    speed: 0.15,
    pulse: 0.08,
    radius: 2.0,
  },
  listening: {
    color1: [0.0, 0.83, 1.0],
    color2: [0.0, 0.5, 0.8],
    speed: 0.4,
    pulse: 0.12,
    radius: 2.2,
  },
  thinking: {
    color1: [0.66, 0.33, 0.97],
    color2: [0.98, 0.75, 0.0],
    speed: 0.8,
    pulse: 0.2,
    radius: 2.5,
  },
  speaking: {
    color1: [0.98, 0.45, 0.09],
    color2: [1.0, 0.8, 0.4],
    speed: 0.5,
    pulse: 0.18,
    radius: 2.4,
  },
};
