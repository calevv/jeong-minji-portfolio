import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "z-cat",
    title: "Z-cat",
    status: "live",
    kind: "personal",
    summary:
      "내 블로그를 엿보는 AI 고양이 컨셉으로, Next.js와 Supabase에 Gemini API를 연동해 만든 개발 기록 블로그",
    period: "2026.04 – 2026.05",
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
    result:
      "서버/클라이언트 컴포넌트의 경계를 직접 설계하며, 어떤 코드가 어디서 실행되는지 구조적으로 이해",
    links: {
      demo: "https://z-cat-blog.vercel.app/",
      github: "https://github.com/calevv/Z-cat-blog",
    },
    detail: {
      overview: [
        "개발 기록을 남기는 블로그에 AI 고양이가 몰래 들여다본다면 어떨까 하는 생각에서 출발해, AI 연동까지 직접 구현해 보기 위해 1개월간 혼자 만든 프로젝트",
        "Next.js App Router 기반으로 공개 블로그와 관리자 페이지를 분리해 구성",
        "Supabase로 게시글·댓글·태그 데이터를 관리하고, Vercel로 배포",
      ],
      implementations: [
        "라우트 그룹으로 사이드바 레이아웃을 공유하는 관리자 페이지 구성",
        "URL 쿼리 기반으로 게시 상태별 탭 필터링 구현",
        "Supabase RLS 정책으로 데이터 접근 권한을 제어하고, 서버/클라이언트 환경에 맞게 Supabase 클라이언트를 분리해 사용",
        "Supabase Storage 이미지 업로드 시 sharp로 압축 처리",
        "Gemini API로 기존 Velog 게시글의 문체를 변환해 Supabase로 이전",
        "Vercel Cron으로 새 Velog 글의 문체 변환, 썸네일 생성, 게시까지 자동화",
      ],
      screens: [
        { caption: "[이 화면에서 해결한 것 한 줄]" },
        { caption: "[이 화면에서 해결한 것 한 줄]" },
      ],
      troubleshooting: [
        {
          title: "서버 전용 모듈 import 에러",
          problem:
            'Context API 적용 후 에디터 컴포넌트에 "use client"가 붙으면서 next/headers import 에러 발생',
          cause:
            "패키지 변경이 아님을 확인한 뒤 전날 수정한 파일을 추적해 원인 파악",
          solution:
            "서버 전용 모듈을 함수 내부 동적 import로 바꿔 클라이언트 번들에 포함되지 않도록 해결",
        },
        {
          title: "Cron 작업의 Gemini API 503 에러",
          problem: "매일 Cron으로 실행되는 Gemini API 작업에서 503 에러 발생",
          cause: "일시적인 서버 에러라 다음 실행에서 정상 동작할 가능성이 높음",
          solution:
            "재시도 로직은 Vercel 실행 시간 제한으로 타임아웃 위험만 커져 넣지 않기로 결정하고, 실패 알림을 받아 확인하는 방식으로 대응",
        },
      ],
      learned: [
        "서버/클라이언트 컴포넌트의 경계를 직접 설계하며, 어떤 코드가 어디서 실행되는지 구조적으로 이해",
        "UI 기본 구조를 먼저 잡고 기능을 붙인 뒤 디테일을 채우는 순서로 작업 방식을 바꿔 개발 속도 개선",
      ],
    },
  },
  {
    slug: "ddalkkak-english",
    title: "딸깍영어",
    status: "renewal-planned",
    kind: "team",
    summary:
      "AI가 뉴스 기사를 분석해 단어를 추출해 주는 영어 단어 학습 웹 서비스",
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
      "React Query로 API 응답의 로딩·캐싱·재시도를 관리하고, Zustand로 단어장·테스트 상태 관리",
    ],
    result:
      "짧은 기간 안에 역할을 나눠 협업하고 배포까지 마무리하는 흐름을 경험",
    links: {
      demo: "https://ddalkkak-english.netlify.app/",
      github: "https://github.com/namee-h/react-study-group-project",
    },
    detail: {
      overview: [
        "실제 뉴스 기사를 가져올 수 없는 제약이 있어, OpenAI API로 영어 뉴스 기사형 텍스트를 생성하고 기사에서 학습할 단어를 추출하는 방식으로 설계",
        "API 호출은 Netlify 서버리스 함수로 처리해 클라이언트에 API 키가 노출되지 않도록 구성",
        "카테고리별 기사 필터링, 체크박스로 단어장 저장·검색, 영→한/한→영 테스트 모드 제공",
        "React Query로 API 응답의 로딩·캐싱·재시도를 관리하고, Zustand로 단어장·테스트 상태 관리",
        "MUI 기반 반응형 UI로 모바일·웹 모두 지원",
        "PO·SM·개발자 3명으로 역할을 나눠 7일 안에 배포까지 완료",
      ],
      implementations: [
        "Firebase Authentication으로 이메일 회원가입·로그인 및 Google 로그인 구현",
        "별도 백엔드 서버 없이 인증 기능을 붙이기 위해 Firebase를 선택",
        "퍼블리싱 경험을 살려 레이아웃 스타일 일부 정리",
      ],
      screens: [
        { caption: "[이 화면에서 해결한 것 한 줄]" },
        { caption: "[이 화면에서 해결한 것 한 줄]" },
      ],
      troubleshooting: [],
      learned: [
        "React를 실제 서비스에 적용하며, 화면과 기능이 어떻게 연결되는지 구조를 직접 경험",
        "짧은 기간 안에 역할을 나눠 협업하고 배포까지 마무리하는 흐름을 경험",
      ],
    },
  },
];
