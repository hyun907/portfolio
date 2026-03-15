"use client";

import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import { staggerContainer, fadeUp, fadeIn } from "@/lib/motion";
import { useNavigation } from "@/lib/navigation";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { register, scrollTo } = useNavigation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Merge Framer Motion's scroll target ref with the navigation registration ref
  const setRef = useCallback(
    (el: HTMLElement | null) => {
      containerRef.current = el;
      register("hero", el);
    },
    [register]
  );

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      ref={setRef}
      className="relative min-h-screen flex items-center pt-16"
      aria-label="Introduction"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-center py-24 lg:py-32">
          {/* Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeIn}
              className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)] mb-8"
            >
              {profile.tagline}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-[var(--text-primary)] leading-[1.05] mb-3"
            >
              {profile.name}
            </motion.h1>

            {/* English name + role */}
            <motion.p
              variants={fadeUp}
              className="text-base font-light text-[var(--text-muted)] mb-10 tracking-wide"
            >
              {profile.nameEn} &nbsp;·&nbsp; {profile.role}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl font-light text-[var(--text-primary)] leading-relaxed max-w-[52ch] mb-4"
            >
              {profile.bio}
            </motion.p>

            {/* Divider line */}
            <motion.div
              variants={fadeIn}
              className="w-12 h-px bg-[var(--accent)] mb-8 opacity-60"
            />

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button onClick={() => scrollTo("work")} variant="primary">
                작업 보기
              </Button>
              <Button
                href={`mailto:${profile.links.email}`}
                variant="secondary"
                external
              >
                연락하기
              </Button>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              variants={fadeIn}
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="mt-20 hidden lg:flex items-center gap-2 text-[var(--text-subtle)]"
            >
              <ArrowDown size={12} />
              <span className="font-mono text-xs tracking-widest uppercase">
                scroll
              </span>
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              style={{ y: photoY }}
              className="relative group"
            >
              {/* Photo frame */}
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4]">
                {/* Accent border detail — accent border는 overflow-hidden 밖에 위치해야
                    transform+opacity 조합 시 subpixel 클리핑 아티팩트가 생기지 않음 */}
                <div className="absolute -top-2 -right-2 w-full h-full border border-[var(--accent)] opacity-20 pointer-events-none" />

                {/* Image — overflow-hidden을 이미지만 감싸도록 분리 */}
                <div className="absolute inset-0 [clip-path:inset(0)]">
                <div className="relative w-full h-full bg-[var(--surface)]">
                  <ProfilePhoto
                    src={profile.photo}
                    alt={`${profile.nameEn} — ${profile.role}`}
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                    className="group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  {/* Bottom gradient for name overlay */}
                  <div className="absolute inset-0 flex flex-col items-end justify-end p-6 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full flex flex-col gap-1">
                      <span className="font-mono text-xs text-[var(--text-muted)] tracking-wide">
                        {profile.name}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-subtle)]">
                        {profile.role}
                      </span>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Photo caption */}
              <p className="mt-3 font-mono text-xs text-[var(--text-subtle)] text-right">
                Seoul, South Korea
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Background grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </section>
  );
}
