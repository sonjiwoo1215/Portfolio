import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";

function Projects() {
  return (
    <ProjectsStyle>
      <Project1 />
      <Project2 />
    </ProjectsStyle>
  );
}

const ProjectsStyle = styled.div``;

export default Projects;