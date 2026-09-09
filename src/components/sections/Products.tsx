import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { LazyScene } from "@/components/3d/LazyScene";
import type { ProductVariant } from "@/components/3d/ProductMini";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const products: { variant: ProductVariant; name: string; tag: "live" | "beta" | "soon"; label: string; body: string; features: string[] }[] = [
  {
    variant: "nexus",
    name: "Nexus",
    tag: "live",
    label: "Live",
    body: "An agent runtime that connects models, tools and on-chain actions with full replayability.",
    features: ["Tool sandboxing", "Replay & evals", "Usage metering"],
  },
  {
    variant: "orbit",
    name: "Orbit",
    tag: "beta",
    label: "Beta",
    body: "Multi-chain indexing and settlement, exposed through one typed API and one dashboard.",
    features: ["12 chains", "Sub-second reads", "Webhooks"],
  },
  {
    variant: "forge",
    name: "Forge",
    tag: "soon",
    label: "Soon",
    body: "A component foundry for real-time 3D interfaces — production-ready, accessible, themeable.",
    features: ["Scene primitives", "Motion tokens", "A11y baked in"],
  },
];

export function Products() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="products" className="scroll-mt-28 bg-surface/60 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Platforms we run in production"
          description="Battle-tested internally before anyone else gets access."
        />
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div key={p.name} variants={fadeUp} className="h-full">
              <GlassCard
                tilt
                className="flex h-full flex-col p-0"
                onMouseEnter={() => setActive(p.name)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="relative border-b border-border/70 bg-background/60">
                  <LazyScene kind="product" variant={p.variant} active={active === p.name} className="h-[220px] w-full" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <h3 className="truncate font-display text-[22px] font-medium tracking-tight text-navy">{p.name}</h3>
                    <Badge variant={p.tag}>{p.label}</Badge>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-navy transition-colors hover:text-muted-foreground"
                  >
                    Request access
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
