"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/motion";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-32">
      <Container>
        <div className="mb-16">
          <SectionLabel label="작업" className="mb-4" />
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl font-extralight text-[var(--text-primary)] tracking-tight mb-5"
          >
            전체 프로젝트
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base font-light text-[var(--text-muted)] max-w-[48ch] leading-relaxed"
          >
            만들어온 것들의 전체 목록 — 선택된 작업, 실험, 진행 중인 프로젝트까지.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--border)]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
