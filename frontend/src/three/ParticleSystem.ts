import * as THREE from "three";
import { OrbState, STATE_COLORS } from "./colors";

const PARTICLE_COUNT = 2000;

const vertexShader = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPulse;
  uniform float uRadius;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    float angle = uTime * uSpeed;
    float pulseFactor = 1.0 + uPulse * sin(uTime * 1.5 + pos.x * 2.0);

    pos *= pulseFactor;

    float c = cos(angle);
    float s = sin(angle);
    pos.xz = mat2(c, -s, s, c) * pos.xz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (200.0 / -mvPosition.z) * (0.8 + 0.4 * sin(uTime * 2.0 + pos.y * 3.0));
    gl_Position = projectionMatrix * mvPosition;

    vAlpha = 0.6 + 0.4 * sin(uTime * 1.2 + pos.x * 4.0 + pos.y * 3.0 + pos.z * 2.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying float vAlpha;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    if (dist > 0.5) discard;

    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    vec3 color = mix(uColor1, uColor2, glow);

    float alpha = vAlpha * glow;
    gl_FragColor = vec4(color, alpha);
  }
`;

export class ParticleSystem {
  private points: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private time: number = 0;
  private currentState: OrbState = "idle";

  constructor(scene: THREE.Scene) {
    this.geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 0.4;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0.15 },
        uPulse: { value: 0.05 },
        uRadius: { value: 2.0 },
        uColor1: { value: new THREE.Vector3(0.15, 0.3, 0.8) },
        uColor2: { value: new THREE.Vector3(0.1, 0.15, 0.5) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    scene.add(this.points);
  }

  setState(state: OrbState) {
    this.currentState = state;
  }

  update(delta: number) {
    this.time += delta;
    const u = this.material.uniforms;

    u.uTime.value = this.time;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const lerpColor = (a: number[], b: number[], t: number) => [
      lerp(a[0], b[0], t),
      lerp(a[1], b[1], t),
      lerp(a[2], b[2], t),
    ];

    const target = STATE_COLORS[this.currentState];
    const speed = 0.05;

    u.uSpeed.value = lerp(u.uSpeed.value, target.speed, speed);
    u.uPulse.value = lerp(u.uPulse.value, target.pulse, speed);
    u.uRadius.value = lerp(u.uRadius.value, target.radius, speed);

    const c1 = u.uColor1.value as THREE.Vector3;
    const c2 = u.uColor2.value as THREE.Vector3;
    const t1 = lerpColor([c1.x, c1.y, c1.z], target.color1, speed);
    const t2 = lerpColor([c2.x, c2.y, c2.z], target.color2, speed);
    c1.set(t1[0], t1[1], t1[2]);
    c2.set(t2[0], t2[1], t2[2]);
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
