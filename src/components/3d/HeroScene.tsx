import { Float, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { SceneCanvas } from "./SceneCanvas";
import { Lighting } from "./Lighting";
import { PointerRig } from "./PointerRig";
import { FloatingShape } from "./FloatingShape";
import { GlassShape, Orb } from "./Orb";
import { ParticleField } from "./ParticleField";

function FloatingCard({ position, rotation, animate }: { position: [number, number, number]; rotation: [number, number, number]; animate: boolean }) {
  return (
    <Float speed={animate ? 1.4 : 0} rotationIntensity={0.25} floatIntensity={0.9}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[1.5, 0.9, 0.05]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial color="#ffffff" roughness={0.15} metalness={0.05} clearcoat={1} transparent opacity={0.92} />
        </RoundedBox>
        <mesh position={[-0.45, 0.22, 0.03]}>
          <boxGeometry args={[0.35, 0.08, 0.01]} />
          <meshBasicMaterial color="#0a1b33" />
        </mesh>
        <mesh position={[-0.25, 0.02, 0.03]}>
          <boxGeometry args={[0.75, 0.05, 0.01]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        <mesh position={[-0.3, -0.12, 0.03]}>
          <boxGeometry args={[0.65, 0.05, 0.01]} />
          <meshBasicMaterial color="#e2e8f0" />
        </mesh>
        <mesh position={[0.45, -0.25, 0.03]}>
          <circleGeometry args={[0.1, 24]} />
          <meshBasicMaterial color="#7fb2ff" />
        </mesh>
      </group>
    </Float>
  );
}

function Structure({ animate }: { animate: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.y += Math.min(d, 0.05) * 0.25;
    ref.current.rotation.z += Math.min(d, 0.05) * 0.05;
  });
  return (
    <group ref={ref} position={[0, 0, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[(i * Math.PI) / 3, (i * Math.PI) / 4, 0]}>
          <torusGeometry args={[1.9 + i * 0.25, 0.012, 8, 96]} />
          <meshStandardMaterial color="#0a1b33" metalness={0.8} roughness={0.3} transparent opacity={0.55 - i * 0.12} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 8.5], fov: 38 }}>
      {({ reduced, mobile }) => {
        const animate = !reduced;
        return (
          <>
            <Lighting />
            <PointerRig enabled={animate} strength={0.14}>
              <GlassShape radius={mobile ? 1.05 : 1.25} animate={animate} light={mobile} />
              <Structure animate={animate} />
              <Orb position={[2.4, 1.3, -1]} radius={0.22} animate={animate} />
              <FloatingShape kind="octa" position={[-2.6, 1.4, -0.5]} scale={0.32} color="#0a1b33" metal animate={animate} />
              <FloatingShape kind="box" position={[2.9, -1.2, 0.2]} scale={0.3} color="#dbe7ff" animate={animate} />
              <FloatingShape kind="icosa" position={[-2.3, -1.5, 0.4]} scale={0.26} color="#0a1b33" metal animate={animate} speed={0.7} />
              {!mobile && (
                <>
                  <FloatingCard position={[-3.4, -0.1, 0.6]} rotation={[0.1, 0.5, -0.05]} animate={animate} />
                  <FloatingCard position={[3.3, 0.4, 0.4]} rotation={[-0.05, -0.55, 0.05]} animate={animate} />
                </>
              )}
              <ParticleField count={mobile ? 50 : 140} spread={10} animate={animate} />
            </PointerRig>
          </>
        );
      }}
    </SceneCanvas>
  );
}
