import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const quotes = [
  {
    body: "Epoch rebuilt our settlement layer in eleven weeks. Fees dropped 63% and we finally understand our own system.",
    name: "Amara Ozoh",
    role: "CTO, Ledgerline",
  },
  {
    body: "The 3D product surface they designed became our best-performing acquisition channel. Conversion nearly doubled.",
    name: "Tomás Ribeiro",
    role: "Head of Growth, Northwind",
  },
  {
    body: "Their audit found two issues our previous vendor missed. Rigorous, calm and genuinely pleasant to work with.",
    name: "Sarah Lindqvist",
    role: "VP Engineering, Havenpay",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Clients" title="Teams that shipped with us" />
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {quotes.map((q) => (
            <motion.figure key={q.name} variants={fadeUp} className="h-full">
              <GlassCard className="flex h-full flex-col p-8">
                <Quote className="h-6 w-6 shrink-0 text-glow-blue" />
                <blockquote className="mt-6 flex-1 text-[16px] leading-relaxed text-navy">{q.body}</blockquote>
                <figcaption className="mt-8 flex min-w-0 items-center gap-3 border-t border-border/70 pt-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-deep font-display text-[14px] text-primary-foreground">
                    {q.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[14px] font-medium text-navy">{q.name}</span>
                    <span className="block truncate text-[13px] text-muted-foreground">{q.role}</span>
                  </span>
                </figcaption>
              </GlassCard>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
