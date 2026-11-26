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
    slug: "moilrae",
    title: "모일래",
    cover: "/images/projects/moilrae/cover.png",
    status: "live",
    kind: "personal",
    summary: "친구 그룹이 후보 시간에 투표해 모일 시간을 정하는 웹 앱",
    period: "2026.11.09 - 진행 중",
    members: "개인",
    role: "기획·개발 전체 (디자인은 AI 도구 활용)",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Zustand",
      "Tailwind CSS",
      "Supabase",
      "Web Push",
      "PWA",
      "Vercel",
    ],
    highlights: [
      "화면 → 스토어 → API로 역할을 나눠, 화면 코드는 거의 그대로 둔 채 Supabase 연결",
      "별도 서버 없이 RLS 정책과 DB 함수(RPC)로 권한과 여러 테이블 변경 처리",
      "Supabase Realtime과 웹 푸시(DB 트리거 → Webhook → Edge Function)로 실시간 반영과 알림 구현",
    ],
    result:
      "배포해 실제 데이터로 동작하며, 실시간 반영과 웹 푸시 알림까지 더해 기능 확장 중",
    links: {
      demo: "https://moillae.vercel.app/",
      github: "https://github.com/calevv/moillae",
    },
    detail: {
      overview: [
        "친구들이 직장인이 되면서 근무 시간과 여유 시간이 제각각이라 한 번 모이기도 어려워진 데서 출발",
        "카카오톡에서 날짜를 정하다가도 잊어버리고, 정한 날을 따로 달력에 적는 것도 번거로워 후보 시간 투표부터 확정, 달력 표시, 알림까지 한 곳에서 이어지도록 기획",
        "더미 데이터로 화면과 동작을 먼저 완성한 뒤 Supabase를 붙여 실제 데이터로 배포했고, 이후 실시간 반영과 웹 푸시 알림을 더함",
        "모바일 우선으로 만들었고, 홈 화면에 추가해 앱처럼 쓸 수 있는 PWA로 구성 (PC에서는 390px 앱 화면이 가운데에 보임)",
        "실제로 친구들과 쓰는 것과 포트폴리오, 두 가지를 목표로 개발 중",
      ],
      screens: [],
      techStack: [
        { area: "프론트엔드", items: "React, TypeScript, Vite" },
        { area: "스타일", items: "Tailwind CSS v4 (@theme 디자인 토큰)" },
        { area: "라우팅", items: "React Router v7 (Data 모드)" },
        { area: "상태 관리", items: "Zustand v5" },
        {
          area: "백엔드",
          items:
            "Supabase (Auth, Postgres, RLS, DB 함수, 트리거, Edge Functions, Realtime)",
        },
        { area: "알림 · 설치", items: "Web Push (VAPID), PWA" },
        { area: "외부 API", items: "공공데이터 공휴일 API" },
        { area: "타입", items: "Supabase CLI (DB 타입 자동 생성)" },
        { area: "배포", items: "Vercel" },
        { area: "린트", items: "ESLint" },
      ],
      flow: {
        title: "웹 푸시 알림",
        description:
          "새 투표가 올라오거나 시간이 확정·취소되면 DB 트리거가 알림 기록을 남깁니다. Database Webhook이 이 저장을 받아 Edge Function을 실행하고, Edge Function이 웹 푸시를 보냅니다.",
        steps: [
          "새 투표 · 시간 확정 · 확정 취소",
          "DB 트리거가 알림 기록 저장",
          "Database Webhook이 저장을 받음",
          "Edge Function에서 웹 푸시 발송 (VAPID)",
          "알림을 누르면 해당 투표로 이동",
        ],
        notes: [
          "앱을 닫아 두어도 알림을 받음 (PC 크롬에서 확인, 아이폰 실기기는 확인 전)",
          "로그아웃하면 서버의 구독 기록만 지워 다른 사람에게 알림이 가지 않게 하고, 다시 로그인하면 알림이 자동으로 이어짐",
          "같은 기기에 다른 계정이 알림을 등록하면 기존 구독 기록을 지우고 새로 넣음",
        ],
      },
      implementations: [
        {
          title: "로그인",
          items: [
            "이메일 회원가입, 로그인, 로그아웃",
            "로그인이 필요한 화면 보호, 로그인 후 원래 가려던 화면으로 돌아오기(?next=)",
            "로그인 없이 둘러보기(데모 모드, 서버에 저장하지 않음)",
          ],
        },
        {
          title: "그룹과 초대",
          items: [
            "그룹을 만들고 초대 링크를 복사해 친구에게 보냄",
            '링크를 연 친구는 로그인 전에도 모임 이름과 인원을 보고 직접 "참여하기"',
            "방장이 나가면 가장 먼저 들어온 멤버에게 방장과 진행 중인 투표를 넘김",
          ],
        },
        {
          title: "투표와 확정",
          items: [
            "후보 시간을 여러 개 올리면 멤버가 가능 / 불가능으로 응답 (공휴일 표시)",
            "가장 많이 가능한 후보 추천, 아직 응답하지 않은 멤버 표시",
            "방장이 시간을 확정하거나 확정을 취소",
            "응답과 확정은 화면을 먼저 바꾸고, 저장에 실패하면 되돌림 (낙관적 업데이트)",
          ],
        },
        {
          title: "달력",
          items: [
            "확정된 모임과 투표 중인 후보를 월간 달력에 표시, 그룹별로 보기",
            "다가오는 확정 모임 목록 (오늘 / 내일 / 날짜)",
            "설날·추석·대체공휴일까지 그해 공휴일 표시",
          ],
        },
        {
          title: "실시간 반영과 알림",
          items: [
            "친구가 투표하거나 들어오면 새로고침 없이 화면에 반영",
            "새 투표, 시간 확정, 확정 취소를 앱을 닫아 두어도 푸시 알림으로 받음. 알림을 누르면 해당 투표로 이동",
          ],
        },
        {
          title: "앱 설치 (PWA)",
          items: [
            "홈 화면에 추가하면 주소창 없이 앱처럼 열림",
            "아이폰 Safari, 안드로이드, 카카오톡 안 브라우저, PC를 구분해 맞는 설치 방법 안내",
          ],
        },
      ],
      decisions: [
        {
          title: "로컬 먼저, 백엔드는 나중에 붙일 수 있게",
          description:
            "더미 데이터로 화면과 동작을 먼저 완성하고 이후 Supabase를 붙였습니다. 화면 → 스토어(Zustand) → api 함수 → Supabase 순서로 역할을 나눠 두어, Supabase를 붙일 때 화면 코드는 거의 바꾸지 않고 api 안쪽만 바꿨습니다.",
        },
        {
          title: "권한은 RLS로, 여러 테이블을 바꾸는 작업은 DB 함수로",
          description:
            "별도 서버 없이 Supabase를 BaaS로 사용했습니다. 내가 속한 그룹의 데이터만 보이게 하는 권한은 RLS 정책으로 처리하고, 그룹 + 방장 멤버처럼 여러 테이블에 한 번에 넣어야 하는 작업은 DB 함수(RPC)로 묶어 중간에 실패하면 전부 취소되게 했습니다.",
        },
        {
          title: "실시간 반영: 바뀌었다는 신호만 받고 다시 불러오기",
          description:
            "Supabase Realtime(웹소켓)으로 변경 신호를 받으면 데이터를 다시 불러옵니다. 투표 데이터는 서로 얽혀 있어, 받은 이벤트로 화면 데이터를 직접 고치면 놓치는 부분이 생기기 쉽기 때문입니다.",
        },
        {
          title: "알림: 기록과 발송 분리",
          description:
            "알림 기록은 DB 트리거가 남기고, 발송은 Database Webhook을 받은 Edge Function이 따로 맡게 했습니다. 기록과 발송을 나눠 두어, 푸시 알림을 꺼도 알림 기록은 남습니다.",
        },
        {
          title: "공휴일: API 키는 Edge Function에, 결과는 DB에",
          description:
            "공공데이터 공휴일 API를 Edge Function으로 감싸 인증키가 브라우저에 드러나지 않게 하고, 받아 온 결과는 DB에 저장해 API 호출 횟수를 줄였습니다.",
        },
        {
          title: "DB 타입 자동 생성",
          description:
            "Supabase CLI로 DB 타입을 자동 생성해, 테이블이나 칼럼이 바뀌면 빌드에서 바로 확인할 수 있게 했습니다.",
        },
      ],
      troubleshooting: [
        {
          title: "초대 링크로 가입하면 초대받은 그룹이 아니라 홈으로 가는 문제",
          problem:
            "초대 링크로 들어온 사람이 기존 계정으로 로그인하면 그룹으로 잘 이동했지만, 회원가입을 하면 홈으로 이동했습니다.",
          cause:
            "로그인 후 돌아갈 주소를 라우터의 location.state에 담아 로그인 → 이메일 로그인 → 회원가입으로 페이지마다 넘기는 구조라, 중간에 뒤로 가기, 첫 화면 거치기, 새 탭 열기 중 하나만 있어도 주소가 사라졌습니다. 초대 화면도 로그인해야만 보여서, 처음 온 친구는 무슨 모임인지 모른 채 로그인 화면부터 봤습니다.",
          considered:
            "sessionStorage에 초대 주소를 적어 두면 증상은 해결되지만, 탭이 바뀌거나 이후 이메일 인증이나 소셜 로그인을 붙이면 같은 문제가 다시 생길 수 있어서 쓰지 않았습니다.",
          solution:
            "돌아갈 주소를 URL의 ?next= 파라미터로 옮겨 새로고침, 새 탭, 이메일 링크에서도 유지되게 했습니다. 외부로 보내는 열린 리다이렉트를 막기 위해 /로 시작하는 앱 안 주소만 허용하고 //로 시작하는 주소는 막았습니다. 초대 화면은 로그인 없이 볼 수 있게 바꾸고, 멤버가 아니면 RLS 때문에 그룹을 볼 수 없어 초대 코드로 그룹 이름, 인원, 내가 멤버인지만 돌려주는 DB 함수를 만들었습니다.",
          learned:
            "증상이 난 한 곳을 고치기보다 왜 끊길 수 있는 곳에 값을 들고 다니는지를 따라가니, 사용자 흐름의 문제까지 같이 보였습니다.",
        },
        {
          title: "권한이 없는 확정 요청이 에러 없이 끝나는 문제",
          problem:
            "화면에서는 확정된 것처럼 보이다가 새로고침하면 원래대로 돌아갈 수 있었습니다.",
          cause:
            'RLS에 막힌 update는 에러가 아니라 "0줄 바뀜"으로 조용히 끝납니다.',
          solution:
            "update 뒤에 .select()로 바뀐 줄을 돌려받고, 0줄이면 실패로 처리해서 화면을 되돌리도록 했습니다.",
        },
        {
          title:
            "방장이 나가면 아무도 확정할 수 없는 투표가 남는 문제 (설계 중에 발견)",
          problem:
            "방장이 그룹을 나가면, 진행 중인 투표가 아무도 확정할 수 없는 상태로 남을 수 있었습니다.",
          cause: "[README 5번의 원인 문장]",
          solution:
            "그룹 나가기 DB 함수에서 가장 먼저 들어온 멤버에게 방장을 넘길 때, 진행 중인 투표의 주인도 새 방장에게 함께 넘기도록 했습니다.",
        },
      ],
      learned: [
        "증상이 난 곳보다 값이 어디에 있어야 하는지 따라가면, 사용자 흐름의 문제까지 함께 보인다는 것",
        "백엔드를 나중에 붙일 수 있게 역할을 나눠 두면, 바꾸는 범위를 작게 유지할 수 있다는 것",
        "기능을 만들기 전에 다른 서비스의 방식과 장단점을 먼저 비교하는 것",
      ],
      roadmap: [
        {
          items: [
            "앱 안 알림 목록, 회원 탈퇴, 초대 코드 재발급",
            "구글·카카오 로그인, PC 레이아웃",
            '개인 일정을 넣고 친구에게는 "바쁨"으로만 보여 주기, 멤버가 모두 비는 시간 찾기',
            "React Native 앱, 테스트 코드",
          ],
        },
      ],
      structure: `src/
├─ api/          Supabase 요청 (화면은 이 안쪽을 몰라도 됨)
├─ components/   화면 조각 (후보 카드, 하단 탭 등)
├─ data/         데모 모드용 더미 데이터
├─ hooks/        useCurrentUser, useNextPath
├─ layouts/      RootLayout, RequireAuth, TabLayout
├─ lib/          Supabase 클라이언트
├─ pages/        화면
├─ stores/       Zustand 스토어 (앱 데이터, 로그인 상태)
├─ types/        타입
└─ utils/        날짜, 달력, 공휴일, next 주소 검사`,
    },
  },

  {
    slug: "ddalkkak-english",
    title: "딸깍영어",
    status: "renewal-planned",
    kind: "team",
    summary: "AI가 만든 오늘의 영어 기사로 단어를 학습하는 영어 학습 웹 서비스",
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
      "OpenAI API로 오늘의 영어 기사를 만들고 학습할 단어를 추출 (Netlify 서버리스 함수로 API 호출)",
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
        "실제 뉴스 기사를 가져올 수 없는 제약이 있어, OpenAI API로 오늘의 영어 기사를 만들고 기사에서 학습할 단어를 뽑아 주는 방식으로 설계",
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
          caption:
            "AI가 만든 기사 속 단어를 체크박스로 골라 모아 두는 단어장 화면",
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
