import { Canvas } from "@react-three/fiber";
import { Suspense, type ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type SceneQuality = {
  reduced: boolean;
  mobile: boolean;
};

function detectWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function useSceneQuality(): SceneQuality {
  const [q, setQ] = useState<SceneQuality>({ reduced: false, mobile: false });
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mm = window.matchMedia("(max-width: 767px)");
    const update = () => setQ({ reduced: rm.matches, mobile: mm.matches });
    update();
    rm.addEventListener("change", update);
    mm.addEventListener("change", update);
    return () => {
      rm.removeEventListener("change", update);
      mm.removeEventListener("change", update);
    };
  }, []);
  return q;
}

type Props = {
  children: (quality: SceneQuality) => ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
  fallback?: ReactNode;
};

export function SceneCanvas({ children, className, camera = { position: [0, 0, 8], fov: 40 }, fallback }: Props) {
  const [supported, setSupported] = useState<boolean | null>(null);
  const quality = useSceneQuality();

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  if (supported === false) {
    return (
      <div className={cn("pointer-events-none", className)} aria-hidden>
        {fallback ?? <div className="h-full w-full rounded-full bg-gradient-to-br from-glow-blue/30 via-glow-violet/20 to-glow-cyan/30 blur-3xl" />}
      </div>
    );
  }
  if (supported === null) return <div className={className} aria-hidden />;

  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={quality.mobile ? [1, 1.25] : [1, 1.75]}
        camera={camera}
        gl={{ antialias: !quality.mobile, alpha: true, powerPreference: "high-performance" }}
        frameloop={quality.reduced ? "demand" : "always"}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>{children(quality)}</Suspense>
      </Canvas>
    </div>
  );
}
