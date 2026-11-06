import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "z-cat",
    title: "Z-cat",
    status: "live",
    kind: "personal",
    summary:
      "내 블로그를 엿보는 AI 고양이 컨셉으로, Next.js와 Supabase에 Gemini API를 연동해 만든 개발 기록 블로그",
    period: "2026.04 - 2026.05",
    members: "개인 (1개월)",
    role: "기획·개발 전체 (디자인은 AI 도구 활용)",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Gemini API",
      "Vercel",
    ],
    highlights: [
      "Supabase RLS 정책으로 데이터 접근 권한 제어",
      "Storage 이미지 업로드 시 sharp로 압축 처리",
      "Vercel Cron으로 Velog 글 문체 변환·썸네일 생성·게시 자동화",
    ],
    result: "[결과 · 배운 점 한 줄]",
    links: {
      demo: "https://z-cat-blog.vercel.app/",
      github: "https://github.com/calevv/Z-cat-blog",
    },
  },
  {
    slug: "ddalkkak-english",
    title: "딸깍영어",
    status: "renewal-planned",
    kind: "team",
    summary: "AI가 생성한 영어 뉴스 기사에서 단어를 추출해 학습하는 웹 서비스",
    period: "2025.04.28 - 2025.05.04 (7일)",
    members: "5명 (PO · SM · 개발자 3명)",
    role: "개발",
    contributions: [
      "Firebase Authentication으로 이메일·Google 로그인 구현",
      "레이아웃 스타일 일부 정리",
    ],
    stack: [
      "React",
      "Vite",
      "React Router",
      "React Query",
      "Zustand",
      "MUI",
      "Firebase Authentication",
      "OpenAI API",
      "Netlify",
    ],
    highlights: [
      "OpenAI API로 영어 기사형 텍스트를 생성하고 학습할 단어를 추출 (Netlify 서버리스 함수로 API 호출)",
      "기사 속 단어를 체크박스로 단어장에 저장·검색하고, 영→한 / 한→영 테스트로 복습",
      "[직접 설명할 수 있는 핵심 포인트]",
    ],
    result:
      "짧은 기간 안에 역할을 나눠 협업하고 배포까지 마무리하는 흐름을 경험",
    links: {
      demo: "https://ddalkkak-english.netlify.app/",
      github: "https://github.com/namee-h/react-study-group-project",
    },
  },
];
