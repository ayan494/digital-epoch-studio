import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LazyScene } from "@/components/3d/LazyScene";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const points = [
  { title: "Composable by design", body: "Every module — identity, payments, indexing — plugs into the same typed core." },
  { title: "Real-time everywhere", body: "Streaming state keeps interfaces, agents and contracts in lockstep." },
  { title: "Built to be audited", body: "Deterministic pipelines and traceable events make review straightforward." },
];

export function Showcase3D() {
  return (
    <section id="showcase" className="relative scroll-mt-28 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-blue/10 blur-[120px]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="Ecosystem"
              title="One connected ecosystem, rendered in real time"
              description="Move your cursor across the model — it responds the same way our systems do: instantly, and without breaking form."
            />
            <motion.ul
              variants={stagger(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 flex flex-col gap-5"
            >
              {points.map((p) => (
                <motion.li key={p.title} variants={fadeUp} className="flex min-w-0 gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-navy" />
                  <span className="min-w-0">
                    <span className="block font-display text-[17px] font-medium text-navy">{p.title}</span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-muted-foreground">{p.body}</span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-[36px] border border-border/70 bg-surface shadow-card"
          >
            <LazyScene kind="ecosystem" className="h-[380px] w-full sm:h-[520px]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
