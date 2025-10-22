import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding: 1rem 1rem 4rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const SkillsSection = styled.section`
  background-color: #ffffff;
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 900;
  color: black;
  -webkit-text-stroke: 1px black;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 2rem;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.fonts.accent};
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
`;

export const SkillImage = styled.img`
  height: 2rem;
`;