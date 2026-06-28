import * as THREE from "three";
import { ParticleSystem } from "./ParticleSystem";
import { OrbState } from "./colors";

export class OrbEngine {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particleSystem: ParticleSystem;
  private animId: number = 0;
  private lastTime: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    this.camera.position.set(0, 0, 5);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    this.particleSystem = new ParticleSystem(this.scene);
  }

  setState(state: OrbState) {
    this.particleSystem.setState(state);
  }

  start() {
    this.lastTime = performance.now();
    const loop = (now: number) => {
      const delta = (now - this.lastTime) / 1000;
      this.lastTime = now;
      this.particleSystem.update(delta);
      this.renderer.render(this.scene, this.camera);
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  stop() {
    cancelAnimationFrame(this.animId);
  }

  resize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  dispose() {
    this.stop();
    this.particleSystem.dispose();
    this.renderer.dispose();
  }
}
