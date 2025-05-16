// import React from "react";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  return (
    <Section>
      <Title>PROJECTS</Title>
      <ProjectList />
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: black;
`;
