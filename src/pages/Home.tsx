import styled from "styled-components";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";

function Home() {
  return (
    <HomeStyle>
      <Intro />
      <About />
      <Projects />
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;

export default Home;