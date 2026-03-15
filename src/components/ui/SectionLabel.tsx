"use client";

import { motion } from "framer-motion";
import { fadeIn, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  label: string;
  className?: string;
};

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        "inline-block font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]",
        className
      )}
    >
      {label}
    </motion.span>
  );
}
