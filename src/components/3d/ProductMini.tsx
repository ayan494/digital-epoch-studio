import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { SceneCanvas } from "./SceneCanvas";
import { Lighting } from "./Lighting";
import { Orb } from "./Orb";

export type ProductVariant = "nexus" | "orbit" | "forge";

function Nexus({ speed, animate }: { speed: number; animate: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!animate || !g.current) return;
    g.current.rotation.y += Math.min(d, 0.05) * 0.5 * speed;
  });
  return (
    <group ref={g}>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 1.3, Math.sin(a * 2) * 0.3, Math.sin(a) * 1.3]}>
            <sphereGeometry args={[0.18, 20, 20]} />
            <meshStandardMaterial color={i % 2 ? "#0a1b33" : "#ffffff"} metalness={0.6} roughness={0.25} />
          </mesh>
        );
      })}
      <Orb radius={0.35} animate={animate} color="#7fb2ff" />
    </group>
  );
}

function Orbit({ speed, animate }: { speed: number; animate: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!animate || !g.current) return;
    g.current.rotation.y += Math.min(d, 0.05) * 0.4 * speed;
    g.current.rotation.x += Math.min(d, 0.05) * 0.15 * speed;
  });
  return (
    <group ref={g}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[(i * Math.PI) / 3, i * 0.6, 0]}>
          <torusGeometry args={[1.1 + i * 0.25, 0.02, 8, 80]} />
          <meshStandardMaterial color="#0a1b33" metalness={0.8} roughness={0.25} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.1} clearcoat={1} transmission={0.5} thickness={0.5} />
      </mesh>
    </group>
  );
}

function Forge({ speed, animate }: { speed: number; animate: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!animate || !g.current) return;
    g.current.rotation.y += Math.min(d, 0.05) * 0.45 * speed;
  });
  return (
    <group ref={g}>
      {[
        [0, 0, 0],
        [0.7, 0.7, 0],
        [-0.7, 0.7, 0],
        [0, -0.75, 0.5],
        [0.4, 0.1, -0.9],
      ].map((p, i) => (
        <Float key={i} speed={animate ? 1.5 : 0} floatIntensity={0.4} rotationIntensity={0.3}>
          <mesh position={p as [number, number, number]} rotation={[i * 0.4, i * 0.7, 0]}>
            <boxGeometry args={[0.55, 0.55, 0.55]} />
            <meshStandardMaterial color={i === 0 ? "#ffcf8a" : i % 2 ? "#0a1b33" : "#ffffff"} metalness={0.5} roughness={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function ProductMini({ variant, active }: { variant: ProductVariant; active: boolean }) {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0.6, 5.2], fov: 40 }}>
      {({ reduced }) => {
        const animate = !reduced;
        const speed = active ? 2.4 : 1;
        return (
          <>
            <Lighting />
            <Float speed={animate ? 1 : 0} floatIntensity={0.6} rotationIntensity={0.2}>
              {variant === "nexus" && <Nexus speed={speed} animate={animate} />}
              {variant === "orbit" && <Orbit speed={speed} animate={animate} />}
              {variant === "forge" && <Forge speed={speed} animate={animate} />}
            </Float>
          </>
        );
      }}
    </SceneCanvas>
  );
}
