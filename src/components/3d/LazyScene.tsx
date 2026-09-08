import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState, type ComponentProps } from "react";
import type { ProductVariant } from "./ProductMini";

const HeroScene = lazy(() => import("./HeroScene"));
const EcosystemScene = lazy(() => import("./EcosystemScene"));
const ProductMini = lazy(() => import("./ProductMini"));
const AccentScene = lazy(() => import("./AccentScene"));

/** Mounts children only once the wrapper is near the viewport (saves GPU/JS on load). */
function InView({ children, className, eager = false }: { children: React.ReactNode; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);
  useEffect(() => {
    if (eager || !ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [eager]);
  return (
    <div ref={ref} className={className}>
      {visible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}

type SceneProps =
  | { kind: "hero"; className?: string }
  | { kind: "ecosystem"; className?: string }
  | ({ kind: "product"; className?: string } & ComponentProps<typeof ProductMini>)
  | ({ kind: "accent"; className?: string } & { variant: ProductVariant extends never ? never : "glass" | "orb" });

export function LazyScene(props: SceneProps) {
  const { kind, className } = props;
  return (
    <ClientOnly fallback={<div className={className} aria-hidden />}>
      <InView className={className} eager={kind === "hero"}>
        {kind === "hero" && <HeroScene />}
        {kind === "ecosystem" && <EcosystemScene />}
        {kind === "product" && <ProductMini variant={props.variant} active={props.active} />}
        {kind === "accent" && <AccentScene variant={props.variant} />}
      </InView>
    </ClientOnly>
  );
}
