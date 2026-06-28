import { useEffect, useRef } from "react";
import { OrbEngine } from "../three/OrbEngine";
import { OrbState } from "../three/colors";

interface Props {
  state: OrbState;
}

export default function ParticleOrb({ state }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<OrbEngine | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const engine = new OrbEngine(canvas);
      engineRef.current = engine;
      engine.start();

      const handleResize = () => {
        if (canvasRef.current) {
          engine.resize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        }
      };
      window.addEventListener("resize", handleResize);

      return () => {
        engine.dispose();
        window.removeEventListener("resize", handleResize);
      };
    } catch (e) {
      console.warn("Three.js init failed:", e);
    }
  }, []);

  useEffect(() => {
    engineRef.current?.setState(state);
  }, [state]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
    </>
  );
}
