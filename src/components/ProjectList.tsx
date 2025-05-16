import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import speakizImg from "../assets/img/Speakiz.jpg";


const projects = [
  {
    title: "Speakiz",
    period: "24.06-24.11",
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
  {
    title: "Book-store",
    period: "25.02-25.04 (개인 프로젝트)",
    description: 
    `Book-store는 사용자들이 도서를 탐색하고 구매할 수 있는 온라인 도서 판매 웹사이트입니다.
     회원 가입부터 도서 검색, 장바구니 담기, 주문까지의 전 과정을 구현하였습니다.`,
    features: 
    `- 회원 관리: JWT 기반 회원가입, 로그인, 비밀번호 초기화 기능 구현
      - 도서 탐색: 전체 도서 목록 제공, 페이지네이션, 신간 안내 기능 제공
      - 검색 및 필터링: 카테고리별 도서 검색 기능 구현
      - 장바구니 및 주문: 장바구니 담기 및 주문 프로세스 구축`,
    stack: ["Javascript", "Node.js", "Express.js", "MariaDB", "Docker", 
            "React", "TypeScript", "Styled-components", "Redux", "zustand", "React-query"],
    image: speakizImg,
    link: "https://github.com/sonjiwoo1215/Book_store",
  },
];

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectList = () => {
  return (
    <GridContainer>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </GridContainer>
  );
};

export default ProjectList;
