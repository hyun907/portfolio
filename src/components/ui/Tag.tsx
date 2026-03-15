import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "status";
};

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-xs px-2 py-0.5 rounded-sm border",
        variant === "default" &&
          "text-[var(--text-muted)] border-[var(--border)]",
        variant === "accent" &&
          "text-[var(--accent)] border-[var(--accent)] border-opacity-30",
        variant === "status" &&
          "text-[var(--text-subtle)] border-[var(--border)]",
        className
      )}
    >
      {children}
    </span>
  );
}
