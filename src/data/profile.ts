import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "정민지",
  role: "[직무 표기]",
  heroTitle: ["[히어로 제목 1줄]", "[히어로 제목 2줄]", "[히어로 제목 3줄]"],
  heroDescription: "[히어로 소개 문장]",
  intro: "[소개 문구]",
  email: "[이메일]",
  links: {
    github: "[GitHub 주소]",
    velog: "[Velog 주소]",
  },
  resumeUrl: "/resume.pdf",
  career: {
    role: "웹 퍼블리셔",
    period: "2022.03 ~ 현재",
    summary: "[업무 요약]",
  },
  certifications: [
    "SQLD",
    "치과기공사",
    // "정보처리기사", // 결과 발표 후 합격하면 주석 해제
  ],
  education: ["한국방송통신대학교 보건환경안전학과", "대전보건대학 치기공과"],
  training: ["그린컴퓨터아카데미 반응형웹/웹퍼블리셔 양성과정"],
};
