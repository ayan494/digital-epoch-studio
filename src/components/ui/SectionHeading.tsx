import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { Badge } from "./Badge";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left", className)}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <Badge>{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-[32px] leading-[1.1] font-medium tracking-tight text-navy md:text-[44px] lg:text-[48px]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="max-w-[560px] text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
