import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "정민지",
  role: "[직무 표기]",
  heroTitle: ["[히어로 제목 1줄]", "[히어로 제목 2줄]", "[히어로 제목 3줄]"],
  heroDescription: "[히어로 소개 문장]",
  aboutTitle: "[소개 제목]",
  intro: "[소개 문구]",
  email: "[이메일]",
  links: {
    github: "[GitHub 주소]",
    velog: "[Velog 주소]",
  },
  resumeUrl: "/resume.pdf",
  career: {
    company: "HR 솔루션 기업",
    role: "웹 퍼블리셔",
    period: "2022.03 - 재직 중",
    works: [
      {
        title: "기업 상세 페이지 단독 담당",
        period: "2024.05 - 현재",
        items: [
          "기업별 요청에 맞춰 상세 페이지 제작·수정 1,200건 이상 단독 처리",
          "상세 페이지 리뉴얼과 유지보수 담당",
        ],
      },
      {
        title: "채용 공고 페이지 퍼블리싱",
        period: "2022.03 - 2024.04",
        items: ["채용 플랫폼 내 기업별 채용 공고 페이지 퍼블리싱"],
      },
    ],
  },
  certifications: [
    { name: "SQLD", date: "2026.09" },
    { name: "치과기공사", date: "2019.03" },
    // { name: "정보처리기사", date: "" }, // 결과 발표 후 합격하면 주석 해제
  ],
  education: [
    { name: "한국방송통신대학교 보건환경안전학과", date: "2021.02 졸업" },
    { name: "대전보건대학 치기공과", date: "2019.02 졸업" },
  ],
  training: [
    {
      name: "그린컴퓨터아카데미 반응형웹/웹퍼블리셔 양성과정",
      date: "2021.07 - 2022.01 수료",
    },
  ],
};
