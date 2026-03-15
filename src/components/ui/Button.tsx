import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  className,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-light tracking-wide transition-all duration-300 focus-visible:outline-1 focus-visible:outline-[var(--accent)]";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white px-6 py-3 hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_rgba(99,102,241,0.2)]",
    secondary:
      "border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)]",
    ghost:
      "text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)]",
  };

  const classes = cn(base, variants[variant], disabled && "opacity-40 cursor-not-allowed", className);

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
