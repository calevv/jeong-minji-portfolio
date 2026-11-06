import type { SkillGroup } from "@/types/skill";

export const skills: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend",
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
    title: "Backend",
    items: ["Supabase", "SQL", "REST API"],
  },
  {
    category: "tools",
    title: "Tools",
    items: ["Git", "GitHub", "Adobe Photoshop", "Figma", "Slack", "Claude"],
  },
];
