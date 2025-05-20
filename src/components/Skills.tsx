import styled from "styled-components";

const skillCategories = {
  Language: [
    {
      name: "HTML5",
      src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      name: "CSS3",
      src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      name: "JavaScript",
      src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      name: "TypeScript",
      src: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
    },
  ],
  Frontend: [
    {
      name: "React",
      src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    },
    {
      name: "TailwindCSS",
      src: "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
    },
    {
      name: "styled-components",
      src: "https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      name: "Express.js",
      src: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
    },
    {
      name: "MySQL",
      src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "MariaDB",
      src: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
    },
    {
      name: "Docker",
      src: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    },
  ],
  Others: [
    {
      name: "GitHub",
      src: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      name: "Figma",
      src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    },
    {
      name: "Illustrator",
      src: "https://img.shields.io/badge/Adobe Illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white",
    },
    {
      name: "Photoshop",
      src: "https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white",
    },
  ],
};

const Skills = () => {
  return (
    <SkillsContainer>
      <Title>SKILLS</Title>
      <SkillsSection>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <CategorySection key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsWrapper>
              {skills.map((skill) => (
                <SkillImage key={skill.name} src={skill.src} alt={skill.name} />
              ))}
            </SkillsWrapper>
          </CategorySection>
        ))}
      </SkillsSection>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  padding: 1rem 1rem 4rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
`;

const SkillsSection = styled.section`
  background-color: #ffffff;
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 900;
  color: black;
  -webkit-text-stroke: 1px black;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.fonts.accent};
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
`;

const SkillImage = styled.img`
  height: 2rem;
`;
