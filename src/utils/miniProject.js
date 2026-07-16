const miniProjects = [
  {
    id: 1,
    title: "Emotion Diary",
    category: "CRUD · Router · LocalStorage",
    description:
      "감정 선택과 함께 일기를 작성하고, 수정·삭제·조회까지 가능한 다이어리 앱입니다.\n월별 리스트, 필터링과 React Router 기반 페이지 분리, useReducer와 localStorage를\n 활용한 데이터 관리 흐름을 적용했습니다.",
    summary: "작성 · 수정 · 삭제 · 월별 조회",
    icon: "/img/icon-document.svg",
    summaryIcon: "/img/list.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "React Router", icon: "/img/router.svg" },
      { name: "useReducer" },
    ],
    link: "https://www.notion.so/31281c8faa33807e92c9d25a4806c853?source=copy_link",
  },
  {
    id: 2,
    title: "끝말잇기 게임",
    category: "Input · Validation · Focus",
    description:
      "시작 단어를 기준으로 끝말잇기를 진행하는 간단한 게임입니다.\n입력값 검증과 마지막 글자 비교 로직을 구현했습니다.",
    summary: "단어 체크 · 메시지 피드백",
    icon: "/img/icon-play.svg",
    summaryIcon: "/img/message.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "Validation" },
      { name: "Keyboard Event" },
    ],
    link: "https://www.notion.so/2ff81c8faa3380a38654c57450483d6a?source=copy_link",
  },
  {
    id: 3,
    title: "Timer App",
    category: "Timer · Interval · State",
    description:
      "시작, 일시정지, 초기화 기능을 갖춘 기본 타이머 앱입니다.\nsetInterval과 useRef를 이용해 타이머를 제어하고,\n 초 단위 값을 분·초 형식으로 변환해 표시하는 로직을 구현했습니다.",
    summary: "시작 · 정지 · 초기화",
    icon: "/img/icon-clock.svg",
    summaryIcon: "/img/list.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "setInterval" },
      { name: "useRef" },
    ],
    link: "https://www.notion.so/2ff81c8faa338002bb19ec243b4a45dd?source=copy_link",
  },
  {
    id: 4,
    title: "Todo List v2",
    category: "Context · Reducer · Search",
    description:
      "할 일 등록, 검색, 목록 관리가 가능한 투두 앱입니다.\nContext와 useReducer를 활용해 전역 상태를 구성했고,\n localStorage 저장과 useMemo 기반 검색 필터링으로 구조를 개선했습니다.",
    summary: "추가 · 검색 · 상태 관리",
    icon: "/img/icon-check.svg",
    summaryIcon: "/img/listCheck.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "Context API" },
      { name: "LocalStorage" },
    ],
    link: "https://www.notion.so/TodoListVer2-30681c8faa33800397e4e7f09d27a860?source=copy_link",
  },
  {
    id: 5,
    title: "Weather-app",
    category: "React · Open API",
    description:
      "OpenWeather API를 활용해 현재 날씨를 조회할 수 있는 웹 애플리케이션입니다. 도시명을 입력해 위치 좌표를 조회한 뒤 현재 날씨 정보, 아이콘, 온도, 습도를 출력하도록 구현했습니다.",
    summary: "Open API · 컴포넌트 설계",
    icon: "/img/icon-cloud.svg",
    summaryIcon: "/img/layer.svg",
    tags: [
      { name: "React", icon: "/img/react.svg" },
      { name: "OpenWeather API" },
      { name: "Search / Current Weather" },
    ],
    link: "https://www.notion.so/30481c8faa3380c7b3f4f9e5a7bb7978?source=copy_link",
    wide: true,
  },
  {
  id: 6,
  title: "MySubscription",
  category: "CRUD · Search · Filter",
  description:
    "여러 구독 서비스를 한 번에 등록하고 관리할 수 있는 구독 관리 서비스입니다. 구독 항목 등록·수정·삭제 기능과 검색, 카테고리 필터, 정렬 기능을 구현했고,\n월 구독료 합계와 결제일 정보를 한눈에 확인할 수 있도록 구성했습니다.",
  summary: "등록 · 수정 · 삭제 · 월 구독료 계산",
  icon: "/img/icon-monitor.svg",
  summaryIcon: "/img/list.svg",
  tags: [
    { name: "React", icon: "/img/react.svg" },
    { name: "Vite", icon: "/img/vite.svg" },
    { name: "CRUD / LocalStorage" },
  ],
  link: "https://app.notion.com/p/AI-37981c8faa3380de833bf8f93dd7c993?source=copy_link",
  wide: true,
}
]

export default miniProjects