import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const steps = [
  { n: "01", title: "Discover", body: "Two weeks of technical discovery: constraints, users, threat model and a measurable definition of done." },
  { n: "02", title: "Architect", body: "Systems design across chain, cloud and interface, with prototypes proving the risky parts early." },
  { n: "03", title: "Build", body: "Weekly releases behind flags. Continuous audits, load tests and design QA on every branch." },
  { n: "04", title: "Scale", body: "Launch support, observability and a roadmap your in-house team can own with confidence." },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Process"
          title="A predictable path from idea to launch"
          description="No black boxes. Every phase ends with something you can run, test and measure."
        />
        <motion.ol
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => (
            <motion.li
              key={s.n}
              variants={fadeUp}
              className="group relative rounded-[28px] border border-border/70 bg-surface p-7 shadow-card transition-colors hover:border-navy/25"
            >
              <span className="font-display text-[13px] tracking-[0.2em] text-muted-foreground">{s.n}</span>
              <h3 className="mt-4 font-display text-[22px] font-medium tracking-tight text-navy">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-navy transition-transform duration-500 group-hover:scale-x-100" />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
