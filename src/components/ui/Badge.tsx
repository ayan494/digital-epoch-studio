import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-[11px] font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-muted-foreground",
        navy: "border-navy bg-navy text-primary-foreground",
        live: "border-glow-cyan/40 bg-glow-cyan/20 text-navy",
        beta: "border-glow-amber/50 bg-glow-amber/25 text-navy",
        soon: "border-glow-violet/40 bg-glow-violet/20 text-navy",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({ className, variant, ...props }: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
