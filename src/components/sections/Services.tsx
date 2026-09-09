import { motion } from "motion/react";
import { Boxes, Cpu, Fingerprint, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const services = [
  { icon: Cpu, title: "Applied AI systems", body: "Agents, retrieval and evaluation pipelines shipped into production with observability from day one." },
  { icon: Boxes, title: "Web3 infrastructure", body: "Contracts, indexers and wallet flows engineered for throughput, auditability and low fees." },
  { icon: Sparkles, title: "Digital experiences", body: "Real-time 3D interfaces, motion systems and design languages that feel unmistakably yours." },
  { icon: ShieldCheck, title: "Security & audits", body: "Threat modelling, formal review and continuous monitoring across on-chain and off-chain surfaces." },
  { icon: LineChart, title: "Data platforms", body: "Streaming warehouses and analytics that turn protocol activity into decisions in seconds." },
  { icon: Fingerprint, title: "Identity & payments", body: "Account abstraction, passkeys and compliant rails for onboarding at consumer scale." },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="An engineering studio for the next digital epoch"
          description="One senior team across AI, blockchain and interface craft — from first prototype to global rollout."
        />
        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <GlassCard tilt className="group h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-deep text-primary-foreground transition-transform group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-[20px] font-medium tracking-tight text-navy">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-glow-blue/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
