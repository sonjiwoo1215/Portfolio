// import React from "react";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  return (
    <Wrapper>
      <Heading>Projects</Heading>
      <ProjectList />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9fafb;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2d3748;
`;
