export type SocialLinks = {
  github: string;
  email: string;
  blog: string | null;
  resume: string | null;
};

export type Profile = {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  bio: string;
  bioExtended: string;
  photo: string;
  links: SocialLinks;
};
