import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LazyScene } from "@/components/3d/LazyScene";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const values = [
  { title: "Small teams, senior only", body: "The people who scope your project are the ones who build it." },
  { title: "Open by default", body: "Shared repos, shared dashboards, shared decisions — from week one." },
  { title: "Craft as a requirement", body: "Performance budgets and accessibility are acceptance criteria, not extras." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative order-2 overflow-hidden rounded-[36px] border border-border/70 bg-surface shadow-card lg:order-1"
          >
            <LazyScene kind="accent" variant="glass" className="h-[340px] w-full sm:h-[440px]" />
          </motion.div>

          <div className="order-1 min-w-0 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About"
              title="A studio built for systems that must not fail"
              description="Founded in 2017 by engineers from finance, gaming and cryptography. We take on a handful of partners each year and go deep."
            />
            <motion.div
              variants={stagger(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 grid gap-5 sm:grid-cols-3"
            >
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="min-w-0 rounded-3xl border border-border/70 bg-surface p-6">
                  <h3 className="font-display text-[16px] font-medium text-navy">{v.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{v.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
