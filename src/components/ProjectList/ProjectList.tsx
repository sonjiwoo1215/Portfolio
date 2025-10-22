import bookstoreImg from "../../assets/img/bookstore.png";
import quizChatImg from "../../assets/img/quizChat.png";
import littleGardenImg from "../../assets/img/LittleGarden.png";
import speakizImg from "../../assets/img/Speakiz.jpg";
import { GridContainer, ProjectListStyle, Title } from "./ProjectList.styles";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
    {
    title: "LittleGarden",
    period: "25.06 ~ 25.07",
    participants: "5인 프로젝트",
    description: `식물의 성장 과정을 사진과 함께 기록하고, 커뮤니티에 공유 할 수 있는 식물 일기 플랫폼입니다.
    사용자가 식물을 더 쉽고 효율적으로 관리할 수 있도록 맞춤형 정보를 제공합니다. 농사로 API를 통해 식물의 이름으로 검색 시
    관련 정보를 제공하고 사용자 맞춤 물주기 알림 기능을 제공합니다. 
    LLM(Gemini API)을 활용하여 외부 API를 통해 받은 방대한 데이터를 
    요약 및 정제하여 사용자에게 필요한 정보만을 전달합니다.`,

    features: `-  JWT 기반 로그인/회원가입 및 세션 관리 구현, 비밀번호 해싱 적용으로 보안 강화
    - 게시글/댓글 CRUD + 작성자만 수정·삭제 가능하도록 권한 제어
    - 반응형 UI 디자인 적용 및 로고 직접 제작`,
    stack: [
      "Figma",
      "React",
      "Typescript",
      "styled-components",
      "zustand",
      "Node",
      "Express",
      "MariaDB",
      "MySQL",
      "AWS",
      "Docker",
    ],
    image: littleGardenImg,
    link: "https://github.com/sonjiwoo1215/LittleGarden",
  },

  {
    title: "quizChat",
    period: "25.05 ~ 25.06",
    participants: "4인 프로젝트",
    description: `Socket.IO를 활용한 실시간 통신, Zustand를 통한 상태 관리, 채팅 서비스와 게임 요소가 결합된 인터랙티브한 웹 환경을 목표로 제작되었습니다.
    사용자들은 별도의 회원가입 없이 닉네임만으로 채팅방에 입장할 수 있으며, 자유롭게 퀴즈나 투표를 진행할 수 있습니다.`,

    features: `- WebSocket 기반 실시간 채팅 기능 구현, 다수 사용자 간 안정적 메시지 송수신 처리
- 실시간 퀴즈 기능 추가 → 채팅 외에 상호작용 확장, 사용자 참여율 극대화
-  비동기 통신 최적화로 30명 동시 접속 테스트 시 지연 없는 서비스 제공`,
    stack: [
      "Figma",
      "React",
      "Typescript",
      "emotion",
      "socket.io",
      "zustand",
      "Node",
      "Express",
      "Redis",
      "MariaDB",
      "AWS",
      "Docker",
    ],
    image: quizChatImg,
    link: "https://github.com/sonjiwoo1215/quizchat",
  },

  {
    title: "Book-store",
    period: "25.02 ~ 25.04",
    participants: "1인 프로젝트",
    description: `Book-store는 사용자들이 도서를 탐색하고 구매할 수 있는 
    온라인 도서 판매 웹사이트입니다.
     회원 가입부터 도서 검색, 장바구니 담기, 주문까지의 전 과정을 구현하였습니다.`,
    features: `- 회원 관리: JWT 기반 회원가입, 로그인, 비밀번호 초기화 기능 구현
      - 도서 탐색: 전체 도서 목록 제공, 페이지네이션, 신간 안내 기능 제공
      - 검색 및 필터링: 카테고리별 도서 검색 기능 구현
      - 장바구니 및 주문: 장바구니 담기 및 주문 프로세스 구축`,
    stack: [
      "Node",
      "Express",
      "MariaDB",
      "Docker",
      "React",
      "TypeScript",
      "styled-components",
      "Redux",
      "zustand",
      "React-query",
    ],
    image: bookstoreImg,
    link: "https://github.com/sonjiwoo1215/Book_store",
  },
  {
    title: "Speakiz",
    period: "24.06-24.11",
    participants: "3인 프로젝트",
    description: `Speakiz는 언어 발달 장애 아동을 위한 AI 기반 언어 훈련 애플리케이션입니다.
      Unity를 사용하여 게임형식으로 개발하였고,
      훈련은 호흡, 조음, 유창성 총 3가지로 구성되어 있습니다.
      각 훈련은 훈련 기록, 정확도 점수 등을 포함한 피드백을 제공합니다.
      시공간적 제약으로 인해 적절한 치료 시기를 놓치는 아동을 위하여 개발한 
      비대면 언어 치료 앱입니다.`,

    features: `- 프로젝트 기획
    - 전체 디자인 구상 및 구현
    - Unity playerprefs를 통해 데이터를 주고 받아 화면에 출력`,
    stack: [
      "Unity",
      "C#",
      "Photoshop",
      "Illustrator",
      "Figma",
      "Microsoft Azure",
      "Azure Speech Service",
    ],
    image: speakizImg,
    link: "https://github.com/sonjiwoo1215/I-m20",
  },
];

const ProjectList = () => {
  return (
    <ProjectListStyle>
      <Title>PROJECTS</Title>
      <GridContainer>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </GridContainer>
    </ProjectListStyle>
  );
};


export default ProjectList;
