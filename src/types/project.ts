export type ProjectStatus =
  "live" | "completed" | "in-progress" | "renewal-planned";
export type ProjectKind = "personal" | "team";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  velog?: string;
}

export interface Troubleshooting {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  learned?: string;
}

export interface ProjectDetail {
  overview: string[];
  implementations: string[];
  screens: { image?: string; caption: string }[];
  troubleshooting: Troubleshooting[];
  learned: string[];
}

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  kind: ProjectKind;
  summary: string;
  period: string;
  members: string;
  role: string;
  contributions?: string[];
  stack: string[];
  highlights: string[];
  result: string;
  cover?: string;
  links: ProjectLinks;
  detail?: ProjectDetail;
}
