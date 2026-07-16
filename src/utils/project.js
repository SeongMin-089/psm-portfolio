const projects = [
  {
    id: 1,
    title: "CoolRoute",
    category: "Team Project · Cold Chain · Dashboard",
    description:
      "콜드체인 물류 기업을 컨셉으로 제작한 팀 프로젝트입니다.\nReact와 TypeScript 기반으로 기업 홍보용 랜딩 페이지와 점주·배송기사·물류센터별 대시보드를 구현했으며,\n팀장으로서 UI 설계, 공통 레이아웃, 로그인, 반응형 작업과 팀원 결과물의 통합 및 보완을 담당했습니다.",
    summary: "콜드체인 물류 · 역할별 대시보드 · 반응형 웹",
    summaryIcon: "/img/icon-route.svg",
    thumbnail: "/img/project-coolroute.png",
    darkThumbnail: "/img/project-coolroute.png",
    icon: "/img/icon-logistics.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "TypeScript", icon: "/img/typescript.svg" },
      { name: "SCSS", icon: "/img/scss.svg" },
      { name: "React Router", icon: "/img/router.svg" },
    ],
    links: {
      notion: "https://github.com/SeongMin-089/CoolRoute",
      demo: "https://cool-route.vercel.app/",
      github: "https://github.com/SeongMin-089/CoolRoute",
    },
  },
  {
    id: 2,
    title: "Octalog",
    category: "Fullstack · CRUD · Deploy",
    description:
      "UFC 파이터 기록을 컨셉으로 제작한 풀스택 CRUD 프로젝트입니다.\nReact와 Spring Boot 기반으로 게시글 작성, 수정, 삭제, 상세 조회 기능을 구현했으며,\nJWT 인증, MySQL 연동, AWS S3 이미지 업로드, Docker 기반 배포까지 경험했습니다.",
    summary: "풀스택 CRUD · 인증 · 이미지 업로드 · 배포",
    summaryIcon: "/img/layer.svg",
    thumbnail: "/img/project-octalog.png",
    darkThumbnail: "/img/project-octalog.png",
    icon: "/img/server.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "Spring Boot", icon: "/img/spring.svg" },
      { name: "MySQL", icon: "/img/mysql.svg" },
      { name: "Docker", icon: "/img/docker.svg" },
      { name: "AWS S3", icon: "/img/aws.svg" },
    ],
    links: {
      notion:
        "https://www.notion.so/Octalog-32f81c8faa33808d8cbac6c1f0a6ad5a?source=copy_link",
      demo: "http://octalog.site/",
      github: "https://github.com/SeongMin-089/Octalog",
    },
  },
  {
    id: 3,
    title: "Wifi Spot",
    category: "Map · Router · Favorites",
    description:
      "공공 와이파이 정보를 지도에서 확인하고 즐겨찾기로 관리할 수 있는 프로젝트입니다.\nReact Router로 페이지를 분리하고, Kakao Map 연동을 통해 위치 기반 데이터를 시각화했으며,\n즐겨찾기 컨텍스트를 분리해 사용자 중심 흐름을 구성했습니다.",
    summary: "지도 시각화 · 즐겨찾기 · 라우팅",
    summaryIcon: "/img/wave.svg",
    thumbnail: "/img/project-wifi.png",
    darkThumbnail: "/img/project-wifi-dark.png",
    icon: "/img/icon-map.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "React Router", icon: "/img/router.svg" },
      { name: "Kakao Map", icon: "/img/kakao.svg" },
    ],
    links: {
      notion:
        "https://www.notion.so/WiFi-Spot-31a81c8faa338049be8be905364ad32c?source=copy_link",
      demo:
        "https://wifi-spot-lyart.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Diptyque UI Clone",
    category: "React · SCSS · Responsive",
    description:
      "Diptyque 웹사이트를 기반으로 브랜드의 타이포그래피와 레이아웃을 분석하고,\n사용자 경험(UI/UX)을 고려해 재해석 및 구현한 UI 클론 프로젝트입니다.",
    summary: "브랜드 UI · 반응형 · 컴포넌트 설계",
    summaryIcon: "/img/layer.svg",
    thumbnail: "/img/project-diptyque.png",
    darkThumbnail: "/img/project-diptyque-dark.png",
    icon: "/img/icon-monitor.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "SCSS", icon: "/img/scss.svg" },
      { name: "Responsive / Component UI", icon: "/img/responsive.svg" },
    ],
    links: {
      notion:
        "https://www.notion.so/TOCOBO-31181c8faa338023b58ed2defa7497be?source=copy_link",
      demo:
        "https://diptyque-clone.vercel.app/",
    },
  },
  {
    id: 5,
    title: "CafeIndex",
    category: "Python · API · Favorites",
    description:
      "네이버 카페글 검색 API를 활용해 커뮤니티 게시글을 검색하고 즐겨찾기로 관리할 수 있는 Python 웹 프로젝트입니다.\nFastAPI와 Jinja2 기반으로 검색 결과를 카드 UI로 출력했으며,\n수집 개수 선택, HTML 태그 정제, MongoDB 기반 즐겨찾기 저장 및 삭제 기능을 구현했습니다.",
    summary: "카페글 검색 · 수집 개수 선택 · 즐겨찾기",
    summaryIcon: "/img/listCheck.svg",
    thumbnail: "/img/project-cafeindex.png",
    darkThumbnail: "/img/project-cafeindex-dark.png",
    icon: "/img/search.svg",
    tags: [
      { name: "Python", icon: "/img/python.svg" },
      { name: "FastAPI", icon: "/img/fastApi.svg" },
      { name: "MongoDB", icon: "/img/mongo.svg" },
      { name: "Jinja2", icon: "/img/html.svg" },
      { name: "Naver API", icon: "/img/naver.svg" },
    ],
    links: {
      notion: "https://app.notion.com/p/36f81c8faa3380c78579d5133b105b0c?source=copy_link",
      demo: "https://python-web-scraping.vercel.app",
      github: "https://github.com/SeongMin-089/python-WebScraping",
    },
  },
]

export default projects
