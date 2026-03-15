export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "이메일",
    value: "seunghyun020907@naver.com",
    href: "mailto:seunghyun020907@naver.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/hyun907",
    href: "https://github.com/hyun907",
    external: true,
  },
  {
    label: "블로그",
    value: "준비 중",
    href: "#",
    external: false,
  },
];
