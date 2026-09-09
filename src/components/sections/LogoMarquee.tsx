import { Container } from "@/components/ui/Container";

const logos = [
  "https://svgl.app/library/vercel_wordmark.svg",
  "https://svgl.app/library/stripe_wordmark.svg",
  "https://svgl.app/library/figma-wordmark.svg",
  "https://svgl.app/library/notion_wordmark.svg",
  "https://svgl.app/library/linear.svg",
  "https://svgl.app/library/supabase_wordmark_light.svg",
];

export function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-border/70 bg-surface/60 py-10">
      <Container>
        <p className="text-center text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Trusted by teams building the next internet
        </p>
        <div className="mask-fade-x paused-on-hover mt-7 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-14">
            {row.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-6 w-auto opacity-45 grayscale transition-opacity hover:opacity-80 sm:h-7"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
