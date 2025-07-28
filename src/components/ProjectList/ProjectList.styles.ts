import styled from "styled-components";

export const ProjectListStyle = styled.div`
  padding: 1rem 1rem 4rem 1rem;
`;

export const GridContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  text-align: center;
  font-weight: 900;
  color: black;
  -webkit-text-stroke: 1px black;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;