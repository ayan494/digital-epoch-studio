import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LazyScene } from "@/components/3d/LazyScene";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section id="cta" className="scroll-mt-28 pb-24 md:pb-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative isolate overflow-hidden rounded-[40px] bg-navy-deep px-6 py-16 text-primary-foreground sm:px-12 md:py-24"
        >
          <LazyScene kind="accent" variant="orb" className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-80 md:block" />
          <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-glow-violet/25 blur-[100px]" />

          <div className="max-w-[620px]">
            <h2 className="font-display text-[34px] leading-[1.08] font-medium tracking-tight sm:text-[46px]">
              Let's build the next epoch together
            </h2>
            <p className="mt-5 max-w-[480px] text-[16px] leading-relaxed text-primary-foreground/70">
              Tell us what you're building. We reply within one business day with a concrete first step.
            </p>

            <form onSubmit={submit} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 min-w-0 flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 text-[15px] text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus-visible:border-primary-foreground/60"
              />
              <Button type="submit" size="lg" className="bg-surface text-navy hover:bg-surface/90">
                Book an intro
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p aria-live="polite" className="mt-4 min-h-5 text-[13px] text-primary-foreground/70">
              {sent ? "Thanks — we've got it. Expect a reply within one business day." : ""}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
