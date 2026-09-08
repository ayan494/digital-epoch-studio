import { useFrame } from "@react-three/fiber";
import { useRef, type ReactNode } from "react";
import * as THREE from "three";

type Props = { children: ReactNode; strength?: number; enabled?: boolean; autoRotate?: number };

/** Gently tilts its children toward the pointer (state.pointer is normalized -1..1). */
export function PointerRig({ children, strength = 0.12, enabled = true, autoRotate = 0 }: Props) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }, d) => {
    if (!ref.current) return;
    const dt = Math.min(d, 0.05);
    const tx = enabled ? -pointer.y * strength : 0;
    const ty = enabled ? pointer.x * strength : 0;
    const k = 1 - Math.exp(-4 * dt);
    ref.current.rotation.x += (tx - ref.current.rotation.x) * k;
    ref.current.rotation.y += (ty + (enabled ? clock.getElapsedTime() * autoRotate : 0) - ref.current.rotation.y) * k;
  });
  return <group ref={ref}>{children}</group>;
}
