import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { scrollToId } from "@/lib/motion";

const links = [
  { label: "Services", id: "services" },
  { label: "Products", id: "products" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
    >
      <nav
        className={cn(
          "mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass shadow-float" : "glass border-transparent shadow-none",
        )}
      >
        <div className="flex min-w-0 items-center gap-8">
          <button onClick={() => go("hero")} className="flex shrink-0 items-center gap-2.5" aria-label="Epoch home">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-navy-deep">
              <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
            </span>
            <span className="font-display text-[17px] font-medium tracking-tight text-navy">Epoch</span>
          </button>
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button size="sm" className="hidden sm:inline-flex" onClick={() => go("cta")}>
            Get started
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-navy lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-[1180px] rounded-[26px] p-3 shadow-float lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-2xl px-4 py-3 text-left text-[15px] text-navy transition-colors hover:bg-secondary"
                >
                  {l.label}
                </button>
              ))}
              <Button className="mt-2 w-full" onClick={() => go("cta")}>
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
