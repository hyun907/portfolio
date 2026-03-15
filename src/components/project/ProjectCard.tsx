"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tag } from "@/components/ui/Tag";
import { fadeUp, defaultViewport } from "@/lib/motion";
import type { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const statusLabel: Record<Project["status"], string> = {
  live: "라이브",
  wip: "진행 중",
  archived: "아카이브",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay: index * 0.08 }}
      className="group relative border border-[var(--border)] bg-[var(--surface)] hover:border-[rgba(99,102,241,0.3)] transition-all duration-500"
    >
      {/* Cover image area */}
      <div className="relative overflow-hidden bg-[var(--background)] aspect-[16/9] border-b border-[var(--border)]">
        {/* Placeholder — replace with actual Image component when photo is ready */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-[var(--text-subtle)]">
            {project.title}
          </span>
        </div>
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-mono text-xs text-[var(--text-subtle)] mb-1.5">{project.year}</p>
            <h3 className="text-xl font-light text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)] shrink-0 mt-1">
            {statusLabel[project.status]}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm font-light text-[var(--text-muted)] leading-relaxed mb-5 max-w-prose">
          {project.description}
        </p>

        {/* Highlight */}
        <div className="border-l-2 border-[var(--accent)] border-opacity-40 pl-3 mb-5">
          <p className="text-xs font-light text-[var(--text-muted)] italic leading-relaxed">
            {project.highlight}
          </p>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-subtle)]">{project.role}</span>
          <div className="flex items-center gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-1"
              >
                GitHub <ArrowUpRight size={11} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-1"
              >
                Live <ArrowUpRight size={11} />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-1"
            >
              케이스 스터디 <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
