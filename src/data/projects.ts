import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "프로젝트 1",
    description:
      "이 프로젝트가 무엇을 하는지, 어떤 문제를 해결하는지 간략히 설명합니다. 실제 내용이 준비되면 교체하세요.",
    role: "프론트엔드 개발자",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlight:
      "당신의 사고방식을 보여주는 핵심 구현 디테일 또는 기술적 도전 과제.",
    status: "live",
    links: {
      live: undefined,
      github: undefined,
      case: undefined,
    },
    cover: "/images/projects/project-one.jpg",
    featured: true,
    year: "2024",
    problem: "이 프로젝트가 해결하고자 했던 핵심 문제를 서술하세요.",
    goal: "의도했던 결과는 무엇이었나요?",
    implementation: "기술적으로 어떻게 구현했나요?",
    challenge: "가장 어려웠던 부분은 무엇인가요?",
    solution: "그 도전을 어떻게 해결했나요?",
    reflection: "다시 한다면 무엇을 다르게 하겠나요?",
  },
  {
    slug: "project-two",
    title: "프로젝트 2",
    description:
      "또 다른 프로젝트 설명입니다. 기술 스택이 아닌 제품의 문제에 집중해서 작성하세요.",
    role: "프론트엔드 개발자",
    stack: ["React", "TypeScript", "Framer Motion"],
    highlight: "이 구현을 흥미롭거나 도전적으로 만들었던 점을 설명하세요.",
    status: "live",
    links: {
      live: undefined,
      github: undefined,
      case: undefined,
    },
    cover: "/images/projects/project-two.jpg",
    featured: true,
    year: "2024",
  },
  {
    slug: "project-three",
    title: "프로젝트 3",
    description:
      "세 번째 프로젝트입니다. 솔직하고 결과 중심적인 설명을 작성하세요.",
    role: "프론트엔드 개발자",
    stack: ["Next.js", "TypeScript", "CSS Modules"],
    highlight: "이 접근 방식에서 주목할 만했던 점은 무엇인가요?",
    status: "wip",
    links: {
      live: undefined,
      github: undefined,
      case: undefined,
    },
    cover: "/images/projects/project-three.jpg",
    featured: true,
    year: "2025",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
