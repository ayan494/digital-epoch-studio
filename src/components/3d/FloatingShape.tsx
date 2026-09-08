import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Kind = "box" | "octa" | "torus" | "icosa" | "ring";

type Props = {
  kind?: Kind;
  position?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  animate?: boolean;
  metal?: boolean;
};

export function FloatingShape({
  kind = "box",
  position = [0, 0, 0],
  scale = 0.4,
  color = "#0a1b33",
  speed = 1,
  animate = true,
  metal = false,
}: Props) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (!animate || !ref.current) return;
    const dt = Math.min(d, 0.05);
    ref.current.rotation.x += dt * 0.3 * speed;
    ref.current.rotation.y += dt * 0.45 * speed;
  });

  return (
    <Float speed={animate ? 1.2 * speed : 0} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        {kind === "box" && <boxGeometry args={[1, 1, 1]} />}
        {kind === "octa" && <octahedronGeometry args={[1, 0]} />}
        {kind === "icosa" && <icosahedronGeometry args={[1, 0]} />}
        {kind === "torus" && <torusGeometry args={[1, 0.28, 16, 48]} />}
        {kind === "ring" && <torusGeometry args={[1, 0.06, 12, 64]} />}
        <meshStandardMaterial
          color={color}
          metalness={metal ? 0.9 : 0.2}
          roughness={metal ? 0.15 : 0.35}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}
