import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Props = { count?: number; spread?: number; size?: number; color?: string; animate?: boolean };

export function ParticleField({ count = 150, spread = 8, size = 0.03, color = "#0a1b33", animate = true }: Props) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;
    }
    return arr;
  }, [count, spread]);

  useFrame((_, d) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.y += Math.min(d, 0.05) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
}
