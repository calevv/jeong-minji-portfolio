export interface Links {
  github: string;
  velog: string;
}

export interface DatedItem {
  name: string;
  date: string;
}

export interface Work {
  title: string;
  period: string;
  items: string[];
}

export interface Career {
  company: string;
  role: string;
  period: string;
  works: Work[];
}

export interface Profile {
  name: string;
  role: string;
  heroTitle: string[];
  heroDescription: string;
  aboutTitle: string;
  intro: string;
  email: string;
  links: Links;
  resumeUrl: string;
  photo?: string;
  career: Career;
  certifications: DatedItem[];
  education: DatedItem[];
  training: DatedItem[];
}
