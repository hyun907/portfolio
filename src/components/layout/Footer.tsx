import { Container } from "./Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8 mt-32">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-xs text-[var(--text-subtle)]">
            © {year} {profile.nameEn}
          </span>
          <span className="font-mono text-xs text-[var(--text-subtle)]">
            프론트엔드 개발자 · AI 네이티브 빌더
          </span>
        </div>
      </Container>
    </footer>
  );
}
