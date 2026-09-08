import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "motion/react";
import { useReducedMotion } from "motion/react";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLMotionProps<"div"> & {
  tilt?: boolean;
  hoverLift?: boolean;
};

export function GlassCard({ className, tilt = false, hoverLift = true, children, ...props }: Props) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(sy, [0, 1], [6, -6]);
  const rotateY = useTransform(sx, [0, 1], [-6, 6]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={hoverLift && !reduced ? { y: -8, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      style={tilt && !reduced ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-border/70 bg-surface shadow-card will-change-transform",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
