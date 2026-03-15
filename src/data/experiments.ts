import type { Experiment } from "@/types/experiment";

export const experiments: Experiment[] = [
  {
    id: "micro-interactions",
    title: "마이크로 인터랙션 연구",
    description:
      "호버 상태, 트랜지션, 입력 동작 등 작은 UI 인터랙션들을 독립적으로 연구한 컬렉션입니다.",
    status: "wip",
    tags: ["Motion", "UI"],
  },
  {
    id: "type-emotion",
    title: "타이포그래피와 감정",
    description:
      "폰트 굵기, 크기, 간격이 동일한 콘텐츠의 감정적 질감을 어떻게 바꾸는지 탐구합니다.",
    status: "concept",
    tags: ["Typography", "Design"],
  },
  {
    id: "ai-layout-gen",
    title: "AI 레이아웃 생성기",
    description:
      "짧은 텍스트 프롬프트로부터 레이아웃 구성 아이디어를 생성하는 소형 도구입니다.",
    status: "wip",
    tags: ["AI", "Tool"],
  },
  {
    id: "scroll-narratives",
    title: "스크롤 내러티브",
    description:
      "무거운 패럴랙스 효과 없이 스크롤 기반 스토리텔링을 구현하는 방법을 실험합니다.",
    status: "concept",
    tags: ["Motion", "UX"],
  },
  {
    id: "component-archive",
    title: "컴포넌트 아카이브",
    description:
      "디자인-구현 연구로 제작한 재사용 가능한 UI 컴포넌트 개인 라이브러리입니다.",
    status: "live",
    tags: ["Components", "UI"],
    link: undefined,
  },
  {
    id: "color-systems",
    title: "컬러 시스템 실험",
    description:
      "다크모드 컬러 토큰과 시맨틱 컬러 네이밍에 대한 체계적 접근법을 테스트합니다.",
    status: "concept",
    tags: ["Design System", "Color"],
  },
];
