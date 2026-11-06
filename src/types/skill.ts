export type SkillCategory = "frontend" | "backend" | "tools";

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  items: string[];
}
