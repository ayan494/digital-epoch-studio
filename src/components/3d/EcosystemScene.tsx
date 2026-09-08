import { Float, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { SceneCanvas } from "./SceneCanvas";
import { Lighting } from "./Lighting";
import { PointerRig } from "./PointerRig";
import { GlassShape, Orb } from "./Orb";
import { FloatingShape } from "./FloatingShape";
import { ParticleField } from "./ParticleField";

type Node = { pos: THREE.Vector3; r: number; glow: boolean };

function buildNodes(count: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const ring = i % 2 === 0 ? 2.6 : 3.6;
    const y = Math.sin(a * 2 + i) * 0.9;
    nodes.push({
      pos: new THREE.Vector3(Math.cos(a) * ring, y, Math.sin(a) * ring * 0.55),
      r: i % 3 === 0 ? 0.18 : 0.11,
      glow: i % 4 === 0,
    });
  }
  return nodes;
}

function Network({ animate, mobile }: { animate: boolean; mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => buildNodes(mobile ? 8 : 14), [mobile]);
  const links = useMemo(() => {
    const out: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      out.push([nodes[i].pos, nodes[(i + 1) % nodes.length].pos]);
      if (i % 2 === 0) out.push([nodes[i].pos, nodes[(i + 3) % nodes.length].pos]);
      if (i % 3 === 0) out.push([nodes[i].pos, new THREE.Vector3(0, 0, 0)]);
    }
    return out;
  }, [nodes]);

  useFrame((_, d) => {
    if (!animate || !group.current) return;
    group.current.rotation.y += Math.min(d, 0.05) * 0.08;
  });

  return (
    <group ref={group}>
      {links.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color="#0a1b33" transparent opacity={0.18} lineWidth={1} />
      ))}
      {nodes.map((n, i) =>
        n.glow ? (
          <Orb key={i} position={n.pos.toArray() as [number, number, number]} radius={n.r} animate={animate} intensity={0.8} color={i % 8 === 0 ? "#b39cff" : "#7fb2ff"} />
        ) : (
          <Float key={i} speed={animate ? 1 : 0} floatIntensity={0.3} rotationIntensity={0}>
            <mesh position={n.pos}>
              <sphereGeometry args={[n.r, 20, 20]} />
              <meshStandardMaterial color={i % 2 ? "#0a1b33" : "#ffffff"} metalness={0.6} roughness={0.25} />
            </mesh>
          </Float>
        ),
      )}
    </group>
  );
}

export default function EcosystemScene() {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 1.2, 9.5], fov: 42 }}>
      {({ reduced, mobile }) => {
        const animate = !reduced;
        return (
          <>
            <Lighting />
            <PointerRig enabled={animate} strength={0.18}>
              <GlassShape radius={mobile ? 0.9 : 1.1} animate={animate} light={mobile} geometry="icosa" />
              <Network animate={animate} mobile={mobile} />
              <FloatingShape kind="ring" position={[0, 0, 0]} scale={2.2} color="#0a1b33" metal animate={animate} speed={0.35} />
              <FloatingShape kind="box" position={[-3.8, 1.8, -1]} scale={0.34} color="#0a1b33" metal animate={animate} />
              <FloatingShape kind="box" position={[3.6, -1.6, 0.5]} scale={0.28} color="#dbe7ff" animate={animate} speed={0.8} />
              <FloatingShape kind="octa" position={[4, 1.9, -1.5]} scale={0.3} color="#ffffff" animate={animate} />
              <ParticleField count={mobile ? 60 : 200} spread={12} animate={animate} />
            </PointerRig>
          </>
        );
      }}
    </SceneCanvas>
  );
}
