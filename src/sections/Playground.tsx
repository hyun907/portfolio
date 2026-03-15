"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { experiments } from "@/data/experiments";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/motion";
import type { ExperimentStatus } from "@/types/experiment";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const statusConfig: Record<ExperimentStatus, { label: string; className: string }> = {
  live: { label: "라이브", className: "text-[var(--accent)]" },
  wip: { label: "진행 중", className: "text-[var(--text-muted)]" },
  concept: { label: "기획", className: "text-[var(--text-subtle)]" },
};

export function Playground() {
  return (
    <section className="py-32 border-t border-[var(--border)]">
      <Container>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="03 — 실험" className="mb-4" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="text-4xl sm:text-5xl font-extralight text-[var(--text-primary)] tracking-tight"
            >
              Playground
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="mt-4 text-sm font-light text-[var(--text-muted)] max-w-[44ch] leading-relaxed"
            >
              계속 만들어가는 작은 것들 — 인터랙션, 도구, 그리고 여백에서 탐구하는 아이디어들.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Button href="/playground" variant="ghost" className="shrink-0">
              전체 보기 <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>

        {/* Experiments grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]"
        >
          {experiments.map((experiment, index) => {
            const status = statusConfig[experiment.status];
            const isAvailable = experiment.status === "live" && experiment.link;

            return (
              <motion.div
                key={experiment.id}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-[var(--background)] p-6 hover:bg-[var(--surface)] transition-colors duration-300"
              >
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`font-mono text-xs ${status.className}`}>
                    — {status.label}
                  </span>
                  {isAvailable && (
                    <a
                      href={experiment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-subtle)] hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-base font-light mb-2 leading-snug ${
                    experiment.status === "concept"
                      ? "text-[var(--text-muted)]"
                      : "text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300"
                  }`}
                >
                  {experiment.title}
                </h3>

                {/* Description */}
                <p className="text-xs font-light text-[var(--text-muted)] leading-relaxed mb-4 max-w-[38ch]">
                  {experiment.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {experiment.tags.map((tag) => (
                    <Tag key={tag} variant="status">
                      {tag}
                    </Tag>
                  ))}
                </div>

                {/* Subtle accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
