# 정민지 포트폴리오

프론트엔드 개발자 정민지의 포트폴리오 사이트입니다. 소개, 기술 스택, 프로젝트, 연락처를 한 페이지에 담고, 프로젝트마다 기술적 의사결정과 트러블슈팅을 정리한 상세 페이지를 두었습니다.

- 배포: <https://jeong-minji-portfolio.vercel.app/>

<br>

## 기술 스택

| 구분       | 사용 기술                         |
| ---------- | --------------------------------- |
| 프레임워크 | React 19, TypeScript, Vite        |
| 라우팅     | React Router (Declarative 모드)   |
| 스타일     | CSS Modules, CSS 변수 디자인 토큰 |
| 코드 품질  | Oxlint, Prettier                  |
| 배포       | Vercel                            |

<br>

## 페이지 구성

| 경로              | 내용                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `/`               | Hero, About, Skills, Projects, Contact                                                         |
| `/projects/:slug` | 프로젝트 상세 (개요, 핵심 화면, 기술 스택, 주요 구현, 기술적 의사결정, 트러블슈팅, 배운 점 등) |
| 그 외             | 404 페이지                                                                                     |

<br>

## 주요 구현

### 데이터와 화면 분리

- 프로필, 기술 스택, 프로젝트 내용을 `src/data`에 타입이 있는 데이터로 분리하고, 컴포넌트는 데이터를 받아 그리기만 하도록 구성
- 프로젝트 상세 페이지는 데이터에 있는 항목만 섹션으로 보여 주도록 해, 프로젝트마다 다른 구성(작동 흐름, 앞으로 구현할 것, 폴더 구조 등)을 같은 컴포넌트로 처리
- 개인 / 팀 프로젝트를 구분해, 팀 프로젝트는 "내가 맡은 일"을 따로 표시

### 디자인 토큰

- 색, 글자 크기, 간격, 모서리, 레이아웃 너비, 모션 시간을 `tokens.css`의 CSS 변수로 모아 관리
- 텍스트는 4.5:1, 포커스 링과 텍스트가 아닌 요소는 3:1 이상의 명도 대비가 되도록 색을 직접 계산해 정함

### 스크롤과 모션

- 섹션이 화면에 들어오면 나타나는 효과를 `IntersectionObserver`로 구현 (`useReveal`)
- 지금 보고 있는 섹션을 헤더 메뉴에 표시 (`useActiveSection`, 화면 가운데를 기준으로 판단)
- 다른 페이지에서 메뉴를 누르면 홈의 해당 섹션으로, 해시가 없으면 맨 위로 이동
- 일정 높이 이상 스크롤하면 나타나는 맨 위로 버튼
- `prefers-reduced-motion`을 켠 사용자에게는 CSS 애니메이션과 부드러운 스크롤을 모두 끔

### 접근성

- 본문 바로가기 링크, `:focus-visible` 포커스 링
- 현재 메뉴에 `aria-current`, 아이콘 버튼에 `aria-label`
- 버튼과 링크의 최소 터치 영역 2.75rem

### 배포

- `vercel.json`의 rewrite 설정으로, `/projects/z-cat` 같은 주소로 바로 접속하거나 새로고침해도 페이지가 열리도록 처리

<br>

## 폴더 구조

```
src/
├── components/
│   ├── layout/   # Layout, Header, Footer, Logo, ScrollTopButton
│   ├── project/  # 프로젝트 카드, 상태·구분 라벨
│   └── ui/       # Section, SectionHeader, Button, Badge
├── data/         # profile, skills, projects
├── hooks/        # useReveal, useActiveSection
├── pages/        # Home, ProjectDetail, NotFound
├── styles/       # tokens.css, global.css
└── types/        # profile, project
```
