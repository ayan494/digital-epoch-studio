import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const stats = [
  { value: 128, suffix: "+", label: "Products shipped" },
  { value: 42, suffix: "M", label: "On-chain transactions" },
  { value: 99.98, suffix: "%", label: "Platform uptime", decimals: 2 },
  { value: 17, suffix: "", label: "Countries served" },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 rounded-[36px] border border-border/70 bg-surface p-8 shadow-card sm:grid-cols-2 sm:p-12 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="min-w-0">
              <div className="font-display text-[40px] leading-none font-medium tracking-tight text-navy md:text-[52px]">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="mt-3 text-[13px] tracking-wide text-muted-foreground uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
