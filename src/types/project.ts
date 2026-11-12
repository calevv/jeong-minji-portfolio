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
  code?: string;
}

export interface StackRow {
  area: string;
  items: string;
}

export interface FeatureGroup {
  title?: string;
  items: string[];
}

export interface Flow {
  title: string;
  description: string;
  steps: string[];
  notes?: string[];
}

export interface Decision {
  title: string;
  description: string;
}

export interface ProjectDetail {
  overview: string[];
  screens: { image?: string; caption: string }[];
  techStack?: StackRow[];
  flow?: Flow;
  implementations: FeatureGroup[];
  decisions?: Decision[];
  troubleshooting: Troubleshooting[];
  learned: string[];
  structure?: string;
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
