import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "정민지",
  role: "프론트엔드 개발자",
  heroTitle: [
    { text: "안녕하세요," },
    { text: "프론트엔드 개발자", accent: true },
    { text: "정민지입니다." },
  ],
  photo: "/images/profile.png",
  heroDescription:
    "웹 퍼블리셔로 쌓은 마크업 기본기 위에, React와 Next.js로 실제로 동작하는 화면을 만듭니다.",
  aboutTitle: "화면이 만들어지는 과정을 아는 프론트엔드 개발자",
  intro:
    "5년간 웹 퍼블리셔로 일했고, 최근 3년은 채용 사이트의 기업 페이지를 혼자 맡아 제작·수정 작업하며 디자인을 코드로 옮기는 감각을 쌓았습니다. 지금은 React와 Next.js로 화면이 동작하는 원리까지 직접 다루며 개발 영역을 넓혀가고 있습니다.",
  email: "jeongminji.dev@gmail.com",
  links: {
    github: "https://github.com/calevv",
    velog: "https://velog.io/@jeongminji",
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
