import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Intro from "../components/Intro/Intro";

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