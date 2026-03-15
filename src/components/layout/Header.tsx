"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "작업", href: "/#work" },
  { label: "소개", href: "/#about" },
  { label: "연락", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(10,10,10,0.85)] backdrop-blur-md"
          : "bg-transparent"
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-light text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
