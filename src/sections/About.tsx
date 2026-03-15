"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import { staggerContainer, fadeUp, fadeIn, defaultViewport } from "@/lib/motion";
import { useNavigation } from "@/lib/navigation";

export function About() {
  const { register } = useNavigation();
  return (
    <section ref={(el) => register("about", el)} className="scroll-mt-20 py-32 border-t border-[var(--border)]">
      <Container>
        <SectionLabel label="04 — 소개" className="mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24 items-start">
          {/* Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-extralight text-[var(--text-primary)] tracking-tight leading-tight mb-10"
            >
              내가 인터페이스를 만드는 이유
            </motion.h2>

            <div className="space-y-5 max-w-[58ch]">
              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                디자인 결정과 구현 제약이 만나는 경계에 대한 탐구에서 프론트엔드 개발을 시작했습니다. 소프트웨어의 대부분은 눈에 보이지 않지만, 인터페이스는 다릅니다. 인터페이스는 제품과 사용자 사이의 계약입니다.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                인터페이스에 신경을 쓰는 이유는, UI의 품질이 만든 사람들이 사용자를 얼마나 존중하는지를 드러낸다고 믿기 때문입니다. 인터페이스의 거친 부분은 누군가가 사용자가 느끼기 전에 생각을 멈췄다는 신호입니다.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                AI는 일하는 방식을 바꿨지만, 중요하게 여기는 것은 바꾸지 않았습니다. 아이디어에서 작동하는 프로토타입까지의 거리를 줄이는 데 활용하지만 — 판단, 취향, 거부의 핵심 층위는 제가 지킵니다. AI는 무언가 어색하다는 걸 모릅니다. 그건 여전히 사람의 문제입니다.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                되고 싶은 빌더의 모습: 문제를 명확하게 생각하고, 정밀하게 실행하며, 바로 눈에 띄지 않는 디테일에서도 사려 깊음이 느껴지는 것들을 만드는 사람.
              </motion.p>
            </div>

            {/* Subtle accent detail */}
            <motion.div
              variants={fadeIn}
              className="mt-12 flex items-center gap-4 text-xs font-mono text-[var(--text-subtle)] tracking-wider"
            >
              <span className="w-8 h-px bg-[var(--accent)] opacity-40 shrink-0" />
              <span>프론트엔드 · 프로덕트 · AI 네이티브</span>
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group w-72 lg:w-80">
              {/* Offset border detail */}
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-[var(--border)] z-0" />

              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[var(--surface)] z-10">
                <ProfilePhoto
                  src={profile.photo}
                  alt={profile.nameEn}
                  sizes="(max-width: 1024px) 288px, 320px"
                  className="group-hover:grayscale-0"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
