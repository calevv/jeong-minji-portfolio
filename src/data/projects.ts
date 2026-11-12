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
    cover: "/images/projects/z-cat/cover.png",
    links: {
      demo: "https://z-cat-blog.vercel.app/",
      github: "https://github.com/calevv/Z-cat-blog",
    },
    detail: {
      overview: [
        "“내 블로그를 몰래 엿보는 AI 고양이가 있으면 재밌겠다”는 아이디어에서 시작해, AI API를 실제 서비스에 연동해 보기 위해 혼자 기획하고 개발한 블로그",
        "서버 랙에 사는 시니컬한 고양이 Z-cat이 벨로그에 올라온 개발 글을 자기 말투로 다시 써서 게시",
        "1개월간 핵심 기능을 개발해 배포했고, 현재 개선 사항을 반영하며 유지보수 중",
        "Vercel Cron으로 AI 자동 포스팅을 운영 중",
      ],
      screens: [
        // 이미 채운 스크린샷 그대로
      ],
      techStack: [
        {
          area: "프레임워크",
          items: "Next.js 16 (App Router), React 19, TypeScript",
        },
        { area: "스타일", items: "Tailwind CSS v4, shadcn/ui, Framer Motion" },
        { area: "백엔드", items: "Supabase (PostgreSQL, Auth, Storage)" },
        {
          area: "AI / 외부 API",
          items: "Gemini, Pollinations, MyMemory, Resend",
        },
        { area: "이미지 처리", items: "sharp" },
        { area: "배포", items: "Vercel, Vercel Cron" },
      ],
      flow: {
        title: "AI 자동 포스팅",
        description:
          "매일 한국 시간 자정에 Vercel Cron이 새 벨로그 글을 확인합니다. 새 글이 있으면 Gemini로 말투를 바꾸고 썸네일을 만들어 게시한 뒤, 완료 메일을 보냅니다.",
        steps: [
          "Vercel Cron 실행",
          "벨로그 RSS 확인",
          "Gemini로 말투 변환",
          "Pollinations로 썸네일 생성",
          "Supabase에 저장",
          "페이지 캐시 갱신",
          "Resend로 완료 메일 발송",
        ],
        notes: [
          "새 글이 없으면 2단계에서 종료",
          "마지막으로 게시한 벨로그 글의 published_at보다 최신인 글만 처리해 같은 글이 다시 게시되지 않도록 함",
          "기존 벨로그 글 27개는 Gemini로 문체를 변환해 Supabase로 이전",
        ],
      },
      implementations: [
        {
          title: "공개 블로그와 관리자 페이지 분리",
          items: [
            "App Router의 라우트 그룹으로 공개 블로그와 관리자 페이지의 레이아웃을 분리",
            "proxy.ts에서 로그인 여부를 확인해 /admin 접근을 제어",
            "관리자 게시물 목록은 URL 쿼리로 게시 상태 탭과 검색어를 관리",
          ],
        },
        {
          title: "마크다운 에디터",
          items: [
            "미리보기, 자동 저장, 임시 저장, 발행 지원",
            "한글 제목을 번역해 slug를 자동으로 만들고, 저장할 때 중복 여부를 검사",
            "폼 로직은 useEditorForm 훅으로 분리하고, 여러 단계로 전달되던 상태는 Context API로 옮겨 Prop Drilling을 해결",
          ],
        },
        {
          title: "Supabase 데이터 관리",
          items: [
            "RLS 정책으로 데이터 접근 권한을 제어하고, 비로그인 사용자는 발행된 글만 읽을 수 있음",
            "서버와 클라이언트 환경에 맞게 Supabase 클라이언트를 분리해 사용",
          ],
        },
        {
          title: "이미지 처리",
          items: [
            "업로드된 이미지는 서버 액션에서 sharp로 1200×630 WebP로 변환해 Supabase Storage에 저장",
            "썸네일을 교체하거나 글을 영구 삭제할 때 Storage 파일도 함께 삭제해 사용하지 않는 파일이 쌓이지 않게 함",
          ],
        },
        {
          title: "그 외 기능",
          items: [
            "글 탐색: 태그 필터, 검색, 댓글",
            "문의: Resend를 이용한 이메일 발송",
            "휴지통: 소프트 딜리트, 복구, 영구 삭제",
            "반응형: 공개 페이지와 관리자 페이지 모두 모바일 우선으로 구성",
          ],
        },
      ],
      decisions: [
        {
          title: "캐시 갱신: 글이 바뀌는 시점에 무효화",
          description:
            "글이 바뀌는 시점이 저장, 발행, 삭제, 자동 포스팅으로 명확하기 때문에 revalidatePath를 중심으로 캐시를 갱신합니다. About 페이지에는 revalidate = 3600을 함께 설정했습니다.",
        },
        {
          title: "삭제: 글 상태에 따라 방식 분리",
          description:
            "임시 글은 바로 삭제하고, 발행된 글은 deleted_at을 기록하는 소프트 딜리트로 처리해 휴지통에서 복구할 수 있게 했습니다.",
        },
        {
          title: "태그: 별도 테이블 없이 배열로 관리",
          description:
            "포트폴리오 규모에서는 배열로 충분하다고 판단해, 테이블을 나누지 않고 글 데이터에 태그 배열을 저장했습니다.",
        },
      ],
      troubleshooting: [
        {
          title: "자동 저장이 썸네일을 지우는 문제",
          problem:
            "자동 저장과 발행이 동시에 실행될 때, 자동 저장이 나중에 끝나면 저장된 썸네일이 null로 덮어써질 수 있었습니다.",
          cause:
            "clearTimeout은 대기 중인 타이머만 취소할 뿐, 이미 실행 중인 비동기 요청은 멈추지 못합니다.",
          solution:
            "값이 없으면 cover_image를 null로 보내지 않고 payload에서 제외했습니다. UPDATE는 payload에 없는 필드를 건드리지 않아 기존 값이 유지됩니다.",
          code: "...(form.cover_image !== undefined && { cover_image: form.cover_image }),",
        },
        {
          title: "이미지 업로드 실패가 드러나지 않는 문제",
          problem:
            "업로드에 실패해도 오류 표시 없이 썸네일 없는 글이 발행됐습니다.",
          cause:
            "실패 결과를 처리하는 코드가 없었고, Storage 버킷의 RLS 정책도 설정되어 있지 않아 업로드가 차단되고 있었습니다.",
          solution:
            "실패하면 토스트로 알리고 발행을 중단하도록 바꾼 뒤, 버킷에 RLS 정책을 추가했습니다.",
        },
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
      structure: `src/
├── app/            # 라우팅 (공개 페이지, 관리자 페이지, API)
├── components/     # UI 컴포넌트
├── hooks/          # 커스텀 훅
├── lib/
│   ├── actions/    # 서버 액션 (데이터 변경)
│   └── queries/    # 읽기 전용 쿼리
├── types/          # 타입 정의
└── proxy.ts        # 관리자 페이지 접근 제어`,
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
    cover: "/images/projects/ddalkkak-english/cover.png",
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
        {
          items: [
            "Firebase Authentication으로 이메일 회원가입·로그인 및 Google 로그인 구현",
            "별도 백엔드 서버 없이 인증 기능을 붙이기 위해 Firebase를 선택",
            "퍼블리싱 경험을 살려 레이아웃 스타일 일부 정리",
          ],
        },
      ],
      screens: [
        {
          image: "/images/projects/ddalkkak-english/screen-1.png",
          caption:
            "Firebase Authentication으로 구현한 이메일·Google 로그인 화면",
        },
        {
          image: "/images/projects/ddalkkak-english/screen-2.png",
          caption: "뉴스 기사 속 단어를 체크박스로 골라 모아 두는 단어장 화면",
        },
      ],
      troubleshooting: [],
      learned: [
        "React를 실제 서비스에 적용하며, 화면과 기능이 어떻게 연결되는지 구조를 직접 경험",
        "짧은 기간 안에 역할을 나눠 협업하고 배포까지 마무리하는 흐름을 경험",
      ],
    },
  },
];
