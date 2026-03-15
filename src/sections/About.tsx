"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import {
  staggerContainer,
  fadeUp,
  fadeIn,
  defaultViewport,
} from "@/lib/motion";
import { useNavigation } from "@/lib/navigation";

export function About() {
  const { register } = useNavigation();
  return (
    <section
      ref={(el) => register("about", el)}
      className="scroll-mt-20 py-32 border-t border-[var(--border)]"
    >
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
              화면 뒤의 경험을 만드는 개발자
            </motion.h2>

            <div className="space-y-5 max-w-[58ch]">
              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                저는 사용자가 실제로 마주하는 경험을 만드는 프론트엔드
                개발자입니다. 처음에는 시각 디자인에 관심이 많았고, 카드뉴스나
                포스터처럼 결과물이 눈에 보이는 작업을 좋아했습니다.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              ></motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                그러다 웹과 앱의 UX/UI를 접하면서 단순히 화면을 예쁘게 만드는
                것보다, 사용자가 어떤 흐름으로 움직이고 어떤 감각으로 서비스를
                경험하는지가 더 중요하다는 것을 알게 되었습니다. 그때부터 화면을
                그리는 사람을 넘어, 실제로 동작하는 경험을 만드는 사람이 되고
                싶었습니다.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                저는 기능을 구현하는 데서 멈추지 않고, 기획의 의도와 사용자의
                맥락까지 함께 이해하려고 노력합니다. 작은 인터랙션과 구조의
                차이가 서비스의 인상을 바꾼다고 믿기 때문에, 사용성이 자연스럽고
                디테일이 살아 있는 화면을 만드는 것을 중요하게 생각합니다.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base font-light text-[var(--text-muted)] leading-relaxed"
              >
                AI 도구는 아이디어를 빠르게 실험하고 구현 속도를 높이는 데
                적극적으로 활용하고 있습니다. 다만 최종적인 사용자 경험의
                완성도는 결국 사람의 판단과 감각에서 나온다고 생각합니다. 그래서
                더 빠르게 만드는 것만큼, 무엇을 남기고 무엇을 다듬을지 스스로
                판단하는 개발자가 되고자 합니다.
              </motion.p>
            </div>

            {/* Subtle accent detail */}
            <motion.div
              variants={fadeIn}
              className="mt-12 flex items-center gap-4 text-xs font-mono text-[var(--text-subtle)] tracking-wider"
            >
              <span className="w-8 h-px bg-[var(--accent)] opacity-40 shrink-0" />
              <span>Web · Product · AI AI-Assisted Developer</span>
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
