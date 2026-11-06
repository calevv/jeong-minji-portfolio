export interface Links {
  github: string;
  velog: string;
}

export interface Career {
  role: string;
  period: string;
  summary: string;
}

export interface Profile {
  name: string;
  role: string;
  heroTitle: string[];
  heroDescription: string;
  intro: string;
  email: string;
  links: Links;
  resumeUrl: string;
  photo?: string;
  career: Career;
  certifications: string[];
  education: string[];
  training: string[];
}
