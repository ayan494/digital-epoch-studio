import { SceneCanvas } from "./SceneCanvas";
import { Lighting } from "./Lighting";
import { PointerRig } from "./PointerRig";
import { GlassShape, Orb } from "./Orb";
import { FloatingShape } from "./FloatingShape";

/** Small decorative scenes reused by About (glass object) and CTA (orb). */
export default function AccentScene({ variant }: { variant: "glass" | "orb" }) {
  return (
    <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 6], fov: 40 }}>
      {({ reduced, mobile }) => {
        const animate = !reduced;
        if (variant === "orb") {
          return (
            <>
              <Lighting />
              <PointerRig enabled={animate} strength={0.2} autoRotate={0.05}>
                <Orb radius={mobile ? 0.9 : 1.2} animate={animate} color="#8fbcff" intensity={1.1} />
                <FloatingShape kind="ring" scale={2.1} color="#0a1b33" metal animate={animate} speed={0.3} />
                <FloatingShape kind="ring" scale={2.6} color="#b39cff" animate={animate} speed={0.2} />
              </PointerRig>
            </>
          );
        }
        return (
          <>
            <Lighting />
            <PointerRig enabled={animate} strength={0.25}>
              <GlassShape radius={mobile ? 1 : 1.3} animate={animate} light={mobile} geometry="torus" />
              <FloatingShape kind="octa" position={[1.9, 1.2, -0.5]} scale={0.25} color="#0a1b33" metal animate={animate} />
              <FloatingShape kind="box" position={[-1.9, -1.1, 0]} scale={0.22} color="#dbe7ff" animate={animate} />
            </PointerRig>
          </>
        );
      }}
    </SceneCanvas>
  );
}
