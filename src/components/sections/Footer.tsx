import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { scrollToId } from "@/lib/motion";

const groups = [
  { title: "Company", items: [{ label: "About", id: "about" }, { label: "Process", id: "process" }, { label: "Services", id: "services" }] },
  { title: "Platform", items: [{ label: "Products", id: "products" }, { label: "Showcase", id: "showcase" }, { label: "Contact", id: "cta" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-navy-deep">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
              </span>
              <span className="font-display text-[17px] font-medium tracking-tight text-navy">Epoch</span>
            </div>
            <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-muted-foreground">
              Foundation of the new digital epoch. AI products, Web3 infrastructure and digital experiences.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-navy/30 hover:text-navy"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title} className="min-w-0">
              <h3 className="text-[11px] font-medium tracking-[0.18em] text-navy uppercase">{g.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {g.items.map((it) => (
                  <li key={it.label}>
                    <button
                      onClick={() => scrollToId(it.id)}
                      className="text-[14px] text-muted-foreground transition-colors hover:text-navy"
                    >
                      {it.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="min-w-0">
            <h3 className="text-[11px] font-medium tracking-[0.18em] text-navy uppercase">Studios</h3>
            <ul className="mt-5 flex flex-col gap-3 text-[14px] text-muted-foreground">
              <li>Lisbon</li>
              <li>Singapore</li>
              <li>Toronto</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/70 pt-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Epoch Labs. All rights reserved.</p>
          <p>Built for the next internet.</p>
        </div>
      </Container>
    </footer>
  );
}
