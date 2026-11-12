import type { ProjectKind, ProjectStatus } from "@/types/project";

export const statusLabel: Record<ProjectStatus, string> = {
  live: "운영 중",
  completed: "완료",
  "in-progress": "작업 중",
  "renewal-planned": "리뉴얼 예정",
};

export const statusTone: Record<
  ProjectStatus,
  "neutral" | "success" | "warning" | "info"
> = {
  live: "success",
  completed: "neutral",
  "in-progress": "info",
  "renewal-planned": "warning",
};
export const kindLabel: Record<ProjectKind, string> = {
  personal: "개인 프로젝트",
  team: "팀 프로젝트",
};
