import type { SkillGroup } from "@/types/skill";

export const skills: SkillGroup[] = [
  {
    category: "frontend",
    title: "프론트엔드",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Zustand",
      "React Redux",
      "React Query",
      "Tailwind CSS",
      "CSS Modules",
      "axios",
    ],
  },
  {
    category: "backend",
    title: "백엔드",
    items: ["Supabase", "SQL", "REST API"],
  },
  {
    category: "tools",
    title: "작업 도구",
    items: ["Git", "GitHub", "Adobe Photoshop", "Figma", "Slack", "Claude"],
  },
];
