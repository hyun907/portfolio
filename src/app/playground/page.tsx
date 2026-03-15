"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { experiments } from "@/data/experiments";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/motion";
import type { ExperimentStatus } from "@/types/experiment";
import { ArrowUpRight } from "lucide-react";

const statusConfig: Record<
  ExperimentStatus,
  { label: string; className: string }
> = {
  live: { label: "라이브", className: "text-[var(--accent)]" },
  wip: { label: "진행 중", className: "text-[var(--text-muted)]" },
  concept: { label: "기획", className: "text-[var(--text-subtle)]" },
};

export default function PlaygroundPage() {
  return (
    <div className="pt-32 pb-32">
      <Container>
        <div className="mb-16">
          <SectionLabel label="Experiment" className="mb-4" />
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl font-extralight text-[var(--text-primary)] tracking-tight mb-5"
          >
            Playground
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base font-light text-[var(--text-muted)] max-w-[48ch] leading-relaxed"
          >
            소규모 실험, 인터랙션 연구, 그리고 더 큰 프로젝트의 여백에서
            탐구하는 것들.
          </motion.p>
        </div>

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
                transition={{ delay: index * 0.04 }}
                className="group relative bg-[var(--background)] p-8 hover:bg-[var(--surface)] transition-colors duration-300 min-h-[200px] flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-mono text-xs ${status.className}`}>
                    {status.label}
                  </span>
                  {isAvailable && (
                    <a
                      href={experiment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-subtle)] hover:text-[var(--accent)] transition-colors"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>

                <h2
                  className={`text-lg font-light mb-3 leading-snug flex-1 ${
                    experiment.status === "concept"
                      ? "text-[var(--text-muted)]"
                      : "text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300"
                  }`}
                >
                  {experiment.title}
                </h2>

                <p className="text-sm font-light text-[var(--text-muted)] leading-relaxed mb-5">
                  {experiment.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {experiment.tags.map((tag) => (
                    <Tag key={tag} variant="status">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </div>
  );
}
