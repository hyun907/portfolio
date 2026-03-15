"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { contactLinks } from "@/data/contact";
import { profile } from "@/data/profile";
import { staggerContainer, fadeUp, fadeIn, defaultViewport } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-[var(--border)]">
      <Container size="narrow">
        <SectionLabel label="05 — 연락처" className="mb-12" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[var(--text-primary)] tracking-tight leading-tight mb-6"
          >
            함께 만들어봐요.
          </motion.h2>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="text-base font-light text-[var(--text-muted)] leading-relaxed mb-12 max-w-[44ch]"
          >
            프론트엔드 포지션, 협업, 흥미로운 프로젝트에 열려 있습니다. 공감되는 부분이 있다면 연락해 주세요.
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={fadeUp} className="mb-16">
            <Button
              href={`mailto:${profile.links.email}`}
              variant="primary"
              external
              className="text-base px-8 py-4"
            >
              이메일 보내기
            </Button>
          </motion.div>

          {/* Link list */}
          <motion.div
            variants={fadeIn}
            className="border-t border-[var(--border)] pt-10 space-y-0 divide-y divide-[var(--border)]"
          >
            {contactLinks.map((link) => {
              const isDisabled = link.href === "#";
              return (
                <div
                  key={link.label}
                  className="group flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs text-[var(--text-subtle)] w-16 shrink-0 tracking-wide">
                      {link.label}
                    </span>
                    <span
                      className={`text-sm font-light ${
                        isDisabled
                          ? "text-[var(--text-subtle)]"
                          : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-300"
                      }`}
                    >
                      {link.value}
                    </span>
                  </div>

                  {!isDisabled && (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[var(--text-subtle)] hover:text-[var(--accent)] transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      aria-label={`Open ${link.label}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
