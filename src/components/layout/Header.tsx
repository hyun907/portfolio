"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useNavigation, type SectionKey } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const navItems: { label: string; key: SectionKey }[] = [
  { label: "작업", key: "work" },
  { label: "소개", key: "about" },
  { label: "연락", key: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo, activeSection } = useNavigation();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (key: SectionKey) => {
    setMenuOpen(false);
    if (pathname === "/") {
      scrollTo(key);
    } else {
      router.push("/");
    }
  };

  const navButtonClass = (key: SectionKey) =>
    cn(
      "text-sm font-light transition-colors duration-300 tracking-wide cursor-pointer",
      activeSection === key && pathname === "/"
        ? "text-[var(--text-primary)]"
        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
    );

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "border-[var(--border)] bg-[rgba(10,10,10,0.85)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Name / Logo */}
          <Link
            href="/"
            className="font-light text-[var(--text-primary)] tracking-tight hover:text-[var(--accent)] transition-colors duration-300 text-sm"
          >
            {profile.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={navButtonClass(item.key)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-5 h-px bg-current transition-all duration-300",
                menuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block w-5 h-px bg-current transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-5 h-px bg-current transition-all duration-300",
                menuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden border-b border-[var(--border)] bg-[var(--background)]"
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-4">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              className={cn(navButtonClass(item.key), "text-left py-1")}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
