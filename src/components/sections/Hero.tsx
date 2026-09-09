import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LazyScene } from "@/components/3d/LazyScene";
import { fadeUp, stagger, scrollToId } from "@/lib/motion";
import heroPoster from "@/assets/hero-poster.jpg";

const VIDEO_SRC = "https://assets.mixkit.co/videos/4382/4382-720.mp4";

export function Hero() {
  const [videoOk, setVideoOk] = useState(true);

  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="absolute inset-0 -z-20">
        {videoOk ? (
          <video
            className="h-full w-full object-cover"
            src={VIDEO_SRC}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            onError={() => setVideoOk(false)}
          />
        ) : (
          <img src={heroPoster} alt="" aria-hidden className="h-full w-full object-cover" />
        )}
      </div>
      <div className="hero-mask absolute inset-0 -z-10" aria-hidden />
      <LazyScene kind="hero" className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden h-full w-[60%] lg:block" />

      <Container className="relative flex min-h-[calc(100svh-9rem)] flex-col justify-center">
        <motion.div variants={stagger(0.12, 0.15)} initial="hidden" animate="show" className="max-w-[720px]">
          <motion.div variants={fadeUp}>
            <Badge variant="live">
              <span className="h-1.5 w-1.5 rounded-full bg-navy" />
              Now building with 40+ partners
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[42px] leading-[1.03] font-medium tracking-tight text-navy sm:text-[60px] lg:text-[76px]"
          >
            Foundation of the new digital epoch
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-[540px] text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
            We design and engineer AI products, Web3 infrastructure and immersive digital experiences for enterprises,
            builders and communities.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollToId("cta")}>
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="glass" onClick={() => scrollToId("showcase")}>
              <Play className="h-4 w-4" />
              See it in motion
            </Button>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-16 grid max-w-[560px] grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["9 yrs", "Building at the frontier"],
              ["$1.2B", "Value secured on-chain"],
              ["24/7", "Global launch support"],
            ].map(([v, l]) => (
              <div key={l} className="min-w-0">
                <dt className="font-display text-[24px] font-medium tracking-tight text-navy">{v}</dt>
                <dd className="mt-1 text-[13px] leading-snug text-muted-foreground">{l}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>
    </section>
  );
}
