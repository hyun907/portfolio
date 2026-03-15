import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — 백승현`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const detailSections = [
    { label: "문제", content: project.problem },
    { label: "목표", content: project.goal },
    { label: "구현", content: project.implementation },
    { label: "도전", content: project.challenge },
    { label: "해결", content: project.solution },
    { label: "회고", content: project.reflection },
  ].filter((s) => s.content);

  return (
    <div className="pt-28 pb-32">
      <Container size="narrow">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-12"
        >
          <ArrowLeft size={12} /> 전체 프로젝트
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[var(--text-muted)]">{project.year}</span>
            <span className="text-[var(--text-subtle)]">·</span>
            <span className="font-mono text-xs text-[var(--text-muted)]">{project.role}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extralight text-[var(--text-primary)] tracking-tight mb-5">
            {project.title}
          </h1>

          <p className="text-base font-light text-[var(--text-muted)] leading-relaxed max-w-[52ch] mb-6">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <Button href={project.links.live} variant="primary" external>
                라이브 보기 <ArrowUpRight size={13} />
              </Button>
            )}
            {project.links.github && (
              <Button href={project.links.github} variant="secondary" external>
                GitHub <ArrowUpRight size={13} />
              </Button>
            )}
          </div>
        </div>

        {/* Highlight */}
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6 mb-14">
          <p className="font-mono text-xs text-[var(--text-subtle)] mb-2 tracking-widest uppercase">
            핵심 인사이트
          </p>
          <p className="text-base font-light text-[var(--text-primary)] leading-relaxed">
            {project.highlight}
          </p>
        </div>

        {/* Detail sections */}
        {detailSections.length > 0 && (
          <div className="space-y-0 divide-y divide-[var(--border)]">
            {detailSections.map((section) => (
              <div key={section.label} className="py-8 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-10">
                <span className="font-mono text-xs text-[var(--text-subtle)] tracking-widest uppercase pt-1">
                  {section.label}
                </span>
                <p className="text-base font-light text-[var(--text-muted)] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-16 pt-10 border-t border-[var(--border)]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-light text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={14} /> 전체 프로젝트로 돌아가기
          </Link>
        </div>
      </Container>
    </div>
  );
}
