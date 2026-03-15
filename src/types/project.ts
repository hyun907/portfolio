export type ProjectStatus = "live" | "wip" | "archived";

export type ProjectLink = {
  live?: string;
  github?: string;
  case?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  highlight: string;
  status: ProjectStatus;
  links: ProjectLink;
  cover: string;
  featured: boolean;
  year: string;
  // Detail page fields
  problem?: string;
  goal?: string;
  implementation?: string;
  challenge?: string;
  solution?: string;
  reflection?: string;
};
