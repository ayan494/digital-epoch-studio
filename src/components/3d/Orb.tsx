import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type OrbProps = {
  position?: [number, number, number];
  radius?: number;
  color?: string;
  animate?: boolean;
  intensity?: number;
};

/** Soft glowing orb: emissive core + additive halo shell. */
export function Orb({ position = [0, 0, 0], radius = 0.4, color = "#7fb2ff", animate = true, intensity = 1 }: OrbProps) {
  const halo = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!halo.current) return;
    const t = animate ? clock.getElapsedTime() : 0;
    const s = 1 + Math.sin(t * 1.6) * 0.06;
    halo.current.scale.setScalar(s);
  });
  return (
    <Float speed={animate ? 1 : 0} floatIntensity={0.6} rotationIntensity={0}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2 * intensity} roughness={0.4} />
        </mesh>
        <mesh ref={halo}>
          <sphereGeometry args={[radius * 1.8, 24, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.16 * intensity} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        <pointLight color={color} intensity={2 * intensity} distance={6} decay={2} />
      </group>
    </Float>
  );
}

type GlassProps = {
  position?: [number, number, number];
  radius?: number;
  animate?: boolean;
  light?: boolean;
  geometry?: "sphere" | "icosa" | "torus";
};

/** Transmissive glass shape; `light` swaps to a cheap physical material for mobile. */
export function GlassShape({ position = [0, 0, 0], radius = 1, animate = true, light = false, geometry = "sphere" }: GlassProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.y += Math.min(d, 0.05) * 0.15;
    ref.current.rotation.x += Math.min(d, 0.05) * 0.08;
  });
  return (
    <Float speed={animate ? 1.1 : 0} rotationIntensity={0.3} floatIntensity={0.7}>
      <mesh ref={ref} position={position}>
        {geometry === "sphere" && <sphereGeometry args={[radius, 48, 48]} />}
        {geometry === "icosa" && <icosahedronGeometry args={[radius, 1]} />}
        {geometry === "torus" && <torusKnotGeometry args={[radius * 0.6, radius * 0.2, 96, 16]} />}
        {light ? (
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.6}
            thickness={0.6}
            roughness={0.1}
            metalness={0}
            transparent
            opacity={0.85}
            clearcoat={1}
          />
        ) : (
          <MeshTransmissionMaterial
            samples={4}
            resolution={256}
            thickness={0.8}
            roughness={0.08}
            chromaticAberration={0.04}
            anisotropy={0.2}
            distortion={0.15}
            distortionScale={0.4}
            temporalDistortion={0.1}
            ior={1.3}
            color="#f4f8ff"
            background={new THREE.Color("#ffffff")}
          />
        )}
      </mesh>
    </Float>
  );
}
