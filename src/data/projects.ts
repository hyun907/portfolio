import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "monit",
    title: "monit",
    description:
      "내 소비의 거품을 빼다. 지출을 기록할 때 '금액'뿐 아니라 '소비 당시의 상황'을 함께 남기고, 시간이 지난 후 그 소비의 효용을 다시 입력받아 소비의 맥락과 만족도를 분석 리포트로 보여주는 가계부 서비스.",
    role: "프론트엔드 개발 (2인)",
    stack: [
      "Next.js",
      "TypeScript",
      "vanilla-extract",
      "TanStack Query",
      "Zustand",
      "Zod",
      "ky",
      "Storybook",
    ],
    highlight:
      "0→1 초기 세팅부터 배포·QA까지 전 구간을 담당하며 5개 도메인을 터치한 핵심 포지션.",
    status: "live",
    links: {
      github: undefined,
      live: undefined,
      case: undefined,
    },
    cover: "/images/projects/account-book.jpg",
    featured: true,
    year: "2025",
    problem:
      "네이티브 WebView로 래핑된 Next.js 웹앱에서 카카오/Apple 로그인, 캘린더, 리포트, 온보딩 등 다양한 도메인을 일관된 아키텍처로 구현해야 했습니다. 브릿지 타이밍 이슈로 로그인 실패, 탈퇴 후 재로그인 시 이전 캐시 잔존, 바텀시트 리스트 렌더링 jank 등 하이브리드 특유의 문제들이 있었습니다.",
    goal: "지출 기록 → 캘린더 조회 → 분석 리포트 → 만족도 회고까지 이어지는 완결된 가계부 경험을 WebView 하이브리드 앱으로 제공하는 것.",
    implementation:
      "FSD 아키텍처로 도메인 경계를 설계하고, vanilla-extract 기반 디자인 토큰 시스템과 Storybook 스토리 42개로 UI를 문서화했습니다. 캘린더는 월간/주간/바텀시트 3가지 variant를 react-swipeable + transform 기반 가상 캐러셀로 통합했고, 리포트 도메인은 4개 라우트 + 월간·주간 분기 구조로 61개 파일/약 3,700줄 규모를 단독 설계·구현했습니다. 인증은 네이티브 브릿지 기반 카카오/Apple 로그인 + Promise locking 패턴으로 동시 401 리프레시 직렬화를 구현했습니다.",
    challenge:
      "1) 브릿지 미연결 상태에서 로그인 버튼 무반응, 2) 탈퇴 후 재로그인 시 이전 계정 캐시 잔존, 3) 리포트 감정 카드 breakdown 집계 오표시, 4) QA 단계 fix 30+건 중 대부분이 상태 초기화 타이밍 또는 쿼리 무효화 누락으로 분류되는 문제.",
    solution:
      "브릿지 ready 상태 추적 + 재시도 로직으로 레이스 컨디션 해소. 리프레시 토큰을 네이티브 스토리지 단일 소스로 통일하고, 로그아웃/탈퇴 시 clearAllUserStorage + QueryClient.clear() 단일 파이프라인 구축. 쿼리 키 팩토리를 도입해 무효화 누락을 구조적으로 해소. shimmer primitive를 공용화하고 스켈레톤 카드 수를 이전 응답 기준 캐시 매칭하여 CLS 최소화.",
    reflection:
      "QA fix 30+건이 거의 전부 두 카테고리(상태 초기화 타이밍, 쿼리 무효화 누락)에 속한다는 걸 발견한 후, 프로젝트 초기에 쿼리 키 전략을 먼저 설계하는 습관이 생겼습니다. 비즈니스 로직 버그는 '숫자가 틀린 게 아니라 숫자의 의미가 틀린 것'이라는 점도 체감했습니다.",
  },
  {
    slug: "ssuport",
    title: "SSUPORT",
    description:
      "모두의 특별장학금, 가장 든든한 서포터. 특별장학금 신청 과정을 디지털로 전환하여 서류 제출부터 평가까지 편리하게 관리하는 숭실대학교 특별장학금 전용 웹 서비스.",
    role: "프론트엔드 개발 (3인)",
    stack: [
      "React",
      "TypeScript",
      "pnpm workspace",
      "Turborepo",
      "Emotion",
      "Lefthook",
      "Mixpanel",
      "GA4",
    ],
    highlight:
      "초기 커밋부터 참여. 모노레포 세팅, 공용 패키지 7개, FSD 도메인 설계, 파일 미리보기 3종 뷰어를 담당한 아키텍처 역할.",
    status: "wip",
    links: {
      github: undefined,
      live: undefined,
      case: undefined,
    },
    cover: "/images/projects/ssuport-apply.jpg",
    featured: true,
    year: "2026",
    problem:
      "여러 앱(ssuport-apply, ssuport-grading)이 공용 디자인 시스템·타입·유틸을 공유해야 하는 구조에서, 일관된 개발 환경과 도메인 경계가 필요했습니다. 초기 프론트엔드 2명에서 이후 1명이 합류하는 구조라 컨벤션을 사전에 강제하는 장치도 필요했습니다.",
    goal: "학생이 특별장학금을 온라인으로 신청하고, 업로드한 파일을 브라우저에서 미리보고, 신청 내역을 관리할 수 있는 웹앱을 모노레포 기반으로 구축하는 것.",
    implementation:
      "pnpm workspace 기반 모노레포에 공용 패키지 7개(analytics, api, config, constants, types, ui, utils)를 분리하고, Lefthook으로 prettier·eslint·type-check·build를 커밋/푸시 단계에서 자동 검증했습니다. FSD 레이어를 엄격 적용해 공지사항 도메인 40개 파일을 4개 레이어로 재배치. 파일 미리보기는 pdfjs-dist(PDF), URL.createObjectURL(이미지), xlsx(스프레드시트) 3종 뷰어를 구현하고, useRef + WeakMap 캐싱으로 document 재생성을 방지했습니다. Mixpanel + GA4 이원화 분석 패키지를 공용으로 설계했습니다.",
    challenge:
      "1) 파일 미리보기에서 STEP 컴포넌트 리렌더링마다 PDF document 객체가 재생성되는 성능 문제, 2) 페이지네이션 상태가 로컬 state라 상세→목록 복귀 시 유실, 3) FSD 레이어 규칙 위반(ProfileCard→LogoutButton 직접 import), 4) Mixpanel 미초기화 상태 런타임 에러.",
    solution:
      "useMemo 대신 useRef + WeakMap 캐싱으로 전환하여 파일 객체 단위 재사용 + GC 친화적 메모리 관리. 페이지네이션을 useSearchParams 기반 URL 쿼리스트링으로 끌어올려 브라우저 히스토리와 자연스럽게 동작하도록 개선. FSD 위반은 action prop(ReactNode) 주입 패턴으로 전환. Mixpanel에 initialized 플래그 + import.meta.env.DEV 체크로 에러 방어.",
    reflection:
      "초기에 공용 패키지 경계를 명확히 그어두면 이후 도메인이 늘어날 때 의존 방향이 자연스럽게 정렬된다는 걸 체감했습니다. React의 useMemo가 모든 캐싱 상황에 맞는 건 아니라는 점도 배웠고, '언제 캐시를 버려야 하느냐'를 기준으로 자료구조를 고르는 시각을 갖게 되었습니다.",
  },
  {
    slug: "ssungbti",
    title: "ssungBTI",
    description:
      "숭실대학교 마스코트 '슝슝이' + MBTI 테스트를 결합한 참여형 홍보 콘텐츠. 기획부터 개발, 배포, GA 기반 운영까지 단독으로 수행했습니다.",
    role: "기획 리드 + 프론트엔드 단독 개발",
    stack: ["Next.js", "TypeScript", "Recoil", "Google Analytics", "Vercel"],
    highlight:
      "설 연휴 디자인 지연으로 실제 개발 기간 3일. MoSCoW 프레임워크로 우선순위를 구조화하고 데드라인 내 배포, GA 기준 이벤트 기간 MAU 3,200명 달성.",
    status: "live",
    links: {
      github: "https://github.com/hyun907/ssungBTI",
      live: "https://ssung-bti.vercel.app/",
      case: undefined,
    },
    cover: "/images/projects/ssungbti.jpg",
    featured: true,
    year: "2025",
    problem:
      "학교 마스코트를 활용한 참여형 홍보 콘텐츠를 제작해야 했는데, 설 연휴로 디자인 에셋 전달이 지연되어 실제 개발 가용 기간이 3일로 압축되었습니다. '완성도를 높여야 한다' vs '일정을 지켜야 한다'는 팀 내 갈등이 있었습니다.",
    goal: "MBTI 테스트 포맷으로 16종 결과 페이지를 제공하는 참여형 웹 콘텐츠를 데드라인 내에 배포하고, 실제 사용자 반응을 측정하는 것.",
    implementation:
      "MoSCoW 프레임워크를 팀에 제시해 Must(테스트 플로우 + 결과)/Should(에러 처리)/Could(이미지 저장)로 우선순위를 구조화. Recoil로 MBTI 점수 상태를 관리하고, MBTI별 배경색/이미지/텍스트 맵을 상수로 분리해 16종 결과 페이지를 단일 컴포넌트로 처리. GA 이벤트(result_view, share_click, retest_click)를 심어 사용자 행동을 트래킹했습니다.",
    challenge:
      "3일이라는 극한 일정에서 핵심 기능과 부가 기능의 경계를 팀 합의로 명확히 나누는 것이 가장 어려웠습니다. 비정상 접근(잘못된 MBTI 값, URL 직접 접근)에 대한 가드도 짧은 시간 안에 구현해야 했습니다.",
    solution:
      "MoSCoW 한 장으로 팀의 불안을 구조적 합의로 바꾸고, '핵심 기능 먼저 공개 + 후속 개선' 방식으로 데드라인 내 배포에 성공. 비정상 접근은 /error 리다이렉트 가드를 적용했습니다.",
    reflection:
      "시간이 부족할수록 '무엇을 안 할 것인가'를 먼저 정해야 한다는 걸 체감했습니다. 혼자서 기획→개발→배포→운영→측정까지 전 구간을 경험하면서, 내 코드가 실제 사용자에게 닿는 과정 전체를 이해하게 되었습니다.",
  },
  {
    slug: "shelter",
    title: "안심쉼터",
    description:
      "기후 위기 대피소 탐색 서비스의 바텀시트 렌더링 성능을 Chrome Performance Trace로 정량 측정하고 최적화한 경험.",
    role: "프론트엔드 개발",
    stack: ["React", "TypeScript", "IntersectionObserver", "CSS transform"],
    highlight:
      "Chrome DevTools Performance 프로파일링 6회 측정 기반. RunTask −42.75%, Layout −70.28% 달성.",
    status: "archived",
    links: {
      github: "https://github.com/K-PaaS-Team22/shelter-web",
      live: undefined,
      case: undefined,
    },
    cover: "/images/projects/shelter.jpg",
    featured: false,
    year: "2024",
    problem:
      "대피소 목록 바텀시트를 열고 닫을 때 UI Jank가 발생했습니다. items.map(...)으로 전체를 한 번에 렌더링하는 구조에서 초기 DOM 마운트가 급증하고, 복잡한 cubic-bezier + 400ms 애니메이션이 프레임 드랍을 일으켰습니다.",
    goal: "감각이 아닌 Performance Trace 수치로 병목을 진단하고, 렌더링과 애니메이션 양쪽을 최적화하는 것.",
    implementation:
      "Chrome DevTools Performance 탭으로 바텀시트 3회 연속 열기/닫기 시나리오를 6회 프로파일링. 렌더링은 IntersectionObserver 기반 가상화(초기 10개 + 스크롤 시 20개 단위 지연 로드)를 도입. 애니메이션은 transform-only(Composite 레이어 활용) + linear easing + 100ms duration으로 전환했습니다.",
    challenge:
      "렌더링 병목이 코드 복잡도가 아니라 브라우저의 Layout-Paint-Composite 파이프라인에 있다는 것을 증명하고, 최적화 효과를 정량적으로 검증해야 했습니다.",
    solution:
      "transform-only 애니메이션으로 Layout 무효화를 회피하고 GPU 합성 레이어를 활용. IntersectionObserver로 보이지 않는 영역의 렌더링을 제거. 중앙값 기준 정량 측정으로 최적화 효과를 검증했습니다.",
    reflection:
      "'보이지 않는 영역은 렌더링하지 않는다'는 가상화 원칙이 실제 사용자 경험에서 얼마나 큰 차이를 만드는지 체감했습니다. Performance Trace 수치로 검증하는 습관이 최적화의 방향을 논리적으로 잡아준다는 걸 배웠습니다.",
  },
  {
    slug: "greenspark",
    title: "그린스파크",
    description:
      "에너지 효율 조회·전기세 예측 웹앱. 디자인 확정 후에도 UX 개선을 코드 레벨로 제안하여 팀 공통 패턴으로 채택된 경험.",
    role: "프론트엔드 개발",
    stack: ["Next.js", "TypeScript", "React"],
    highlight:
      "다중 팝업 → 단일 바텀시트 통합을 레퍼런스 분석 + Figma 시안 + 코드로 제안, 팀 전체가 공통 UX 컴포넌트로 채택. ESD 공모전 동상 수상.",
    status: "archived",
    links: {
      github: "https://github.com/GreenSpark-greenspark/greenspark-frontend",
      live: undefined,
      case: undefined,
    },
    cover: "/images/projects/greenspark.jpg",
    featured: false,
    year: "2024",
    problem:
      "제품 삭제, 요금 입력, 기프티콘 구매 등 여러 플로우에서 2~3단계의 팝업이 연속 노출되어 사용자가 반복 클릭해야 하는 UX 비효율이 있었습니다. 모바일 환경에서 엄지 영역과 멀리 떨어진 팝업 버튼 배치로 조작성도 떨어졌습니다.",
    goal: "이미 디자인이 확정된 상태에서, 단순 피드백이 아닌 실행 가능한 대안을 제시하여 팀의 UX를 개선하는 것.",
    implementation:
      "토스·칩스 등의 BottomSheet 인터랙션 패턴을 레퍼런스로 조사한 뒤, 다중 팝업 → 단일 바텀시트 통합 + 하단 터치 영역 버튼 배치를 Figma 시안 + 코드 수준으로 제안. 삭제 플로우(useState 기반 바텀시트 + 오버레이), 요금 입력(예외치에서만 바텀시트 노출), 기프티콘 구매(단일 바텀시트 + 상태 전환)를 직접 구현했습니다.",
    challenge:
      "디자인이 확정되고 일정이 촉박한 상태에서 변경을 설득하는 것이 가장 어려웠습니다.",
    solution:
      "레퍼런스 분석 + Figma 시안 + 실행 코드까지 갖춘 제안으로, 디자이너와의 신뢰 기반 커뮤니케이션을 형성했습니다. Fitts's Law(엄지 영역 배치)를 근거로 설득했습니다.",
    reflection:
      "'이 UI 불편해요'가 아니라 레퍼런스 + 시안 + 코드까지 갖춘 제안이 디자인 확정 이후에도 팀을 움직일 수 있다는 걸 배웠습니다. 개발자가 UX 원칙을 근거로 설득하면 이후 협업이 훨씬 수월해집니다.",
  },
  {
    slug: "badcn-ui",
    title: "badcn/ui",
    description:
      "shadcn/ui를 패러디한 적대적 UI 컴포넌트 라이브러리. 만우절 해커톤에서 기획하고, 당일 내 npm 패키지 배포까지 완료했습니다.",
    role: "초기 세팅 + 컴포넌트 개발 + npm 배포",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "npm publish"],
    highlight:
      "해커톤 당일 내 npm 배포(badcn-ui@0.1.3, 4버전 릴리즈) 완료. 16개 hostile-ui 컴포넌트 라이브러리.",
    status: "live",
    links: {
      github: "https://github.com/hyun907/2026_ttalkkakthon",
      live: "https://2026-ttalkkakthon.vercel.app/",
      case: undefined,
    },
    cover: "/images/projects/badcn-ui.jpg",
    featured: false,
    year: "2026",
    problem:
      "만우절 해커톤에서 '하루쯤은 오직 웃음을 위해 개발하자'는 컨셉 아래, AI 바이브 코딩을 전제로 한 프로젝트를 기획해야 했습니다.",
    goal: "좋은 UX의 원칙을 역으로 활용해, '세련되게 생겼지만 의도적으로 불편한' 컴포넌트 라이브러리를 npm에 배포하는 것.",
    implementation:
      "Vite + React 18 + TypeScript + Tailwind CSS로 초기 세팅 후, AccordionOfChaos, HoverProgressButton, MarkSenseGrid 등 hostile-ui 컴포넌트를 구현. vite.lib.config.ts로 ESM/CJS 듀얼 출력 + 타입 선언 빌드를 설정하고, package.json exports/peerDependencies를 구성해 npm publish로 배포했습니다.",
    challenge:
      "해커톤 제한 시간 안에 라이브러리 빌드 설정(ESM/CJS 듀얼), exports 필드, 버전 관리까지 완결하는 것이 도전이었습니다.",
    solution:
      "AI를 코드 생성 도구로 활용하되, 컴포넌트 설계와 인터랙션 로직은 UX 안티패턴에 대한 이해를 바탕으로 팀이 직접 기획·검증했습니다.",
    reflection:
      "npm 라이브러리 배포를 처음부터 끝까지 경험하면서 '소비하는 개발'에서 '제공하는 개발'로 시야가 넓어졌습니다. 좋은 UX를 역으로 비트는 과정에서 오히려 UX 원칙(예측 가능성, 제어감, 피드백)의 중요성을 더 깊이 이해하게 되었습니다.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
