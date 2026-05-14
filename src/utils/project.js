const projects = [
  {
    id: 1,
    title: "Wifi Spot",
    category: "Map · Router · Favorites",
    description:
      "공공 와이파이 정보를 지도에서 확인하고 즐겨찾기로 관리할 수 있는 프로젝트입니다.\nReact Router로 페이지를 분리하고, Kakao Map 연동을 통해 위치 기반 데이터를 시각화했으며,\n즐겨찾기 컨텍스트를 분리해 사용자 중심 흐름을 구성했습니다.",
    summary: "지도 시각화 · 즐겨찾기 · 라우팅",
    summaryIcon: "/img/wave.svg",
    thumbnail: "/img/project-wifi.png",
    icon: "/img/icon-map.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "React Router", icon: "/img/router.svg" },
      { name: "Kakao Map", icon: "/img/kakao.svg" },
    ],
    links: {
      notion: "노션링크",
      demo: "배포링크",
    },
  },
  {
    id: 2,
    title: "Diptyque UI Clone",
    category: "React · SCSS · Responsive",
    description:
      "Diptyque 웹사이트를 기반으로 브랜드의 타이포그래피와 레이아웃을 분석하고,\n사용자 경험(UI/UX)을 고려해 재해석 및 구현한 UI 클론 프로젝트입니다.",
    summary: "브랜드 UI · 반응형 · 컴포넌트 설계",
    summaryIcon: "/img/layer.svg",
    thumbnail: "/img/project-diptyque.png",
    icon: "/img/icon-monitor.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "SCSS", icon: "/img/scss.svg" },
      { name: "Responsive / Component UI", icon: "/img/responsive.svg" },
    ],
    links: {
      notion: "노션링크",
      demo: "배포링크",
    },
  },
]

export default projects
