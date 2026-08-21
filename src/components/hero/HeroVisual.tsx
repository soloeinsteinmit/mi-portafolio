"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { seeded } from "@/lib/hash";

/**
 * Signal topology — an irregular network of nodes drifting through a layered
 * field, with edges that follow. The whole animation runs in the vertex shader
 * so the CPU stays free; the pointer opens a shallow well in the field.
 *
 * Constraints this respects, deliberately:
 *  - never renders over text (alpha falls off toward the left column)
 *  - honours prefers-reduced-motion by rendering a single static frame
 *  - is not mounted at all on small or low-power devices (see HeroCanvas)
 */

const DISPLACE = /* glsl */ `
  vec3 displace(vec3 p, float phase) {
    float t = uTime;
    float w1 = sin(p.x * 0.42 + t * 0.30 + phase) * 0.36;
    float w2 = cos(p.y * 0.55 - t * 0.24 + phase * 1.27) * 0.32;
    float w3 = sin((p.x + p.y) * 0.21 + t * 0.17) * 0.24;
    vec2 d = p.xy - uPointer;
    float dist2 = dot(d, d);
    float well = exp(-dist2 * 0.10);
    vec2 push = d * well * 0.26;
    return vec3(p.x + push.x, p.y + push.y, p.z + w1 + w2 + w3 + well * 1.15);
  }
`;

const HEAD = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uFade;
  varying float vAlpha;
`;

/** Left-edge falloff keeps the field out from behind the headline. */
const ALPHA = /* glsl */ `
  float edge = smoothstep(-5.2, 0.6, p.x);
  float depth = 0.45 + 0.55 * smoothstep(-13.0, -6.0, mvPosition.z);
  vAlpha = edge * depth * uFade;
`;

const pointsVertex = /* glsl */ `
  ${HEAD}
  uniform float uSize;
  attribute float aScale;
  attribute float aPhase;
  attribute float aHot;
  varying float vHot;
  ${DISPLACE}
  void main() {
    vec3 p = displace(position, aPhase);
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    ${ALPHA}
    vHot = aHot;
    gl_PointSize = uSize * aScale * (1.0 + aHot * 0.9) * (10.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const pointsFragment = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform vec3 uAccent;
  varying float vAlpha;
  varying float vHot;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = 1.0 - smoothstep(0.10, 0.5, d);
    vec3 c = mix(uColor, uAccent, vHot);
    float glow = vHot * (1.0 - smoothstep(0.22, 0.5, d)) * 0.5;
    gl_FragColor = vec4(c, (a + glow) * vAlpha * 0.95);
  }
`;

const linesVertex = /* glsl */ `
  ${HEAD}
  attribute float aPhase;
  ${DISPLACE}
  void main() {
    vec3 p = displace(position, aPhase);
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    ${ALPHA}
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const linesFragment = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha * 0.9);
  }
`;

type Geo = {
  positions: Float32Array;
  scales: Float32Array;
  phases: Float32Array;
  hot: Float32Array;
  linePositions: Float32Array;
  linePhases: Float32Array;
};

function buildGeometry(density: number): Geo {
  const rand = seeded(20260821);
  const cols = Math.round(20 * density);
  const rows = Math.round(13 * density);
  const spanX = 13;
  const spanY = 8.4;

  const pts: { x: number; y: number; z: number; phase: number }[] = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (rand() < 0.14) continue; // dropout keeps it a network, not a mesh
      const jx = (rand() - 0.5) * (spanX / cols) * 1.7;
      const jy = (rand() - 0.5) * (spanY / rows) * 1.7;
      pts.push({
        x: -spanX / 2 + (c / (cols - 1)) * spanX + jx,
        y: -spanY / 2 + (r / (rows - 1)) * spanY + jy,
        z: (rand() - 0.5) * 1.2,
        phase: rand() * Math.PI * 2,
      });
    }
  }

  const positions = new Float32Array(pts.length * 3);
  const scales = new Float32Array(pts.length);
  const phases = new Float32Array(pts.length);
  const hot = new Float32Array(pts.length);
  pts.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
    scales[i] = 0.55 + rand() * 0.8;
    phases[i] = p.phase;
    hot[i] = rand() < 0.09 ? 1 : 0;
  });

  // Edges to near neighbours. Enough of them that the field reads as a graph
  // rather than a starfield, few enough that it stays a single cheap draw call.
  const maxDist = (spanX / cols) * 2.4;
  const segs: number[] = [];
  const segPhase: number[] = [];
  const degree = new Array(pts.length).fill(0);
  for (let i = 0; i < pts.length; i++) {
    if (degree[i] >= 3) continue;
    const near = pts
      .map((q, j) => ({ j, d: Math.hypot(q.x - pts[i].x, q.y - pts[i].y) }))
      .filter((n) => n.j !== i && n.d <= maxDist && degree[n.j] < 3)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
    for (const n of near) {
      if (degree[i] >= 3) break;
      if (rand() < 0.22) continue; // a little irregularity, not a lattice
      segs.push(pts[i].x, pts[i].y, pts[i].z, pts[n.j].x, pts[n.j].y, pts[n.j].z);
      segPhase.push(pts[i].phase, pts[n.j].phase);
      degree[i]++;
      degree[n.j]++;
    }
  }

  return {
    positions,
    scales,
    phases,
    hot,
    linePositions: new Float32Array(segs),
    linePhases: new Float32Array(segPhase),
  };
}

function Topology({
  density,
  animate,
  colors,
}: {
  density: number;
  animate: boolean;
  colors: { node: string; accent: string; line: string };
}) {
  const geo = useMemo(() => buildGeometry(density), [density]);
  const pointsMat = useRef<THREE.ShaderMaterial>(null);
  const lineMat = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));

  /* Built once and handed to both materials. Every per-frame write goes
     through the material refs so it lands on the compiled program. */
  const shared = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uFade: { value: 0 },
    }),
    []
  );

  const pointUniforms = useMemo(
    () => ({
      ...shared,
      uSize: { value: 6.0 },
      uColor: { value: new THREE.Color(colors.node) },
      uAccent: { value: new THREE.Color(colors.accent) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shared]
  );

  const lineUniforms = useMemo(
    () => ({ ...shared, uColor: { value: new THREE.Color(colors.line) } }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shared]
  );

  useEffect(() => {
    const pm = pointsMat.current;
    const lm = lineMat.current;
    if (pm) {
      pm.uniforms.uColor.value.set(colors.node);
      pm.uniforms.uAccent.value.set(colors.accent);
    }
    if (lm) lm.uniforms.uColor.value.set(colors.line);
  }, [colors]);

  useEffect(() => {
    if (!animate) return;
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1);
      target.current.set(nx * 6.5, ny * 4.2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [animate]);

  useFrame((state, delta) => {
    const pm = pointsMat.current;
    const lm = lineMat.current;
    if (!pm || !lm) return;

    const fade = Math.min(1, pm.uniforms.uFade.value + delta * 0.9);
    const size = 6.0 * state.gl.getPixelRatio();

    if (animate) {
      pm.uniforms.uTime.value += Math.min(delta, 0.05);
      pointer.current.lerp(target.current, 0.045);
      pm.uniforms.uPointer.value.copy(pointer.current);
      state.camera.position.x += (pointer.current.x * 0.12 - state.camera.position.x) * 0.02;
      state.camera.position.y += (pointer.current.y * 0.08 - state.camera.position.y) * 0.02;
      state.camera.lookAt(0, 0, 0);
    }

    pm.uniforms.uFade.value = fade;
    pm.uniforms.uSize.value = size;
    // The line material has its own uniform objects; mirror the animated ones.
    lm.uniforms.uTime.value = pm.uniforms.uTime.value;
    lm.uniforms.uPointer.value.copy(pm.uniforms.uPointer.value);
    lm.uniforms.uFade.value = fade;
  });

  return (
    <group>
      <lineSegments frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[geo.linePositions, 3]} />
          <bufferAttribute attach="attributes-aPhase" args={[geo.linePhases, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={lineMat}
          vertexShader={linesVertex}
          fragmentShader={linesFragment}
          uniforms={lineUniforms}
          transparent
          depthWrite={false}
        />
      </lineSegments>

      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[geo.positions, 3]} />
          <bufferAttribute attach="attributes-aScale" args={[geo.scales, 1]} />
          <bufferAttribute attach="attributes-aPhase" args={[geo.phases, 1]} />
          <bufferAttribute attach="attributes-aHot" args={[geo.hot, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={pointsMat}
          vertexShader={pointsVertex}
          fragmentShader={pointsFragment}
          uniforms={pointUniforms}
          transparent
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = (n: string, f: string) => cs.getPropertyValue(n).trim() || f;
  return {
    node: v("--viz-node", "#858e99"),
    accent: v("--accent", "#5cc8ff"),
    line: v("--viz-line", "#333941"),
  };
}

export default function HeroVisual({ animate }: { animate: boolean }) {
  // This module is only ever loaded on the client (dynamic import, ssr:false),
  // so the DOM can be read during initialisation instead of in an effect.
  const [colors, setColors] = useState(readColors);
  const [density] = useState(() => (window.innerWidth < 1100 ? 0.72 : 1));

  useEffect(() => {
    const obs = new MutationObserver(() => setColors(readColors()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => obs.disconnect();
  }, []);

  return (
    <Canvas
      dpr={[1, 1.6]}
      frameloop={animate ? "always" : "demand"}
      camera={{ position: [0, 0, 9], fov: 52 }}
      gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <Topology density={density} animate={animate} colors={colors} />
    </Canvas>
  );
}
