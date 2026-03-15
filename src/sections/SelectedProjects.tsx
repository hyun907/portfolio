"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/project/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function SelectedProjects() {
  return (
    <section id="work" className="py-32 border-t border-[var(--border)]">
      <Container>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="01 — 선택된 작업" className="mb-4" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="text-4xl sm:text-5xl font-extralight text-[var(--text-primary)] tracking-tight"
            >
              만든 것들
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Button href="/projects" variant="ghost" className="shrink-0">
              전체 프로젝트 <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--border)]"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className={
                index === 0 && featuredProjects.length === 3
                  ? "lg:col-span-2"
                  : ""
              }
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
