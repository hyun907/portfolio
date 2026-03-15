"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/layout/Container";
import { processSteps } from "@/data/process";
import { fadeUp, fadeIn, defaultViewport } from "@/lib/motion";

export function HowIBuild() {
  return (
    <section className="py-32 border-t border-[var(--border)]">
      <Container>
        {/* Section header */}
        <div className="mb-20">
          <SectionLabel
            label="02 — How I design and build interfaces"
            className="mb-4"
          />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="text-4xl sm:text-5xl font-extralight text-[var(--text-primary)] tracking-tight max-w-xl"
          >
            My Process
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-5 text-base font-light text-[var(--text-muted)] max-w-[52ch] leading-relaxed"
          >
            만들고, 부수고, 다시 다듬는 과정을 통해 형성된 작업 방식과
            철학입니다. AI는 판단을 대신하는 도구가 아니라, 함께 문제를 해결하는
            협력자라고 믿습니다.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-0 divide-y divide-[var(--border)]">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              transition={{ delay: index * 0.07 }}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-10 hover:bg-[rgba(255,255,255,0.01)] transition-colors duration-300"
            >
              {/* Step number */}
              <div className="flex md:flex-col md:items-start gap-3 md:gap-0">
                <motion.span
                  variants={fadeIn}
                  className="font-mono text-4xl font-light text-[var(--text-subtle)] group-hover:text-[var(--accent)] transition-colors duration-500 leading-none"
                >
                  {step.step}
                </motion.span>
              </div>

              {/* Step content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-light text-[var(--text-primary)] group-hover:text-[var(--text-primary)] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-[var(--text-muted)] leading-relaxed max-w-[55ch]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
