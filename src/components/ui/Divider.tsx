import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn("border-none border-t border-[var(--border)] h-px bg-[var(--border)]", className)}
    />
  );
}
