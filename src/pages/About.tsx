import Description from "../components/Description/Description";
import Experience from "../components/Experience/Experience";
import Me from "../components/Me/Me";
import Skills from "../components/Skills/Skills";

const About = () => {
  return (
    <section>
      <div>
        <Me />
        <Experience />
        <Skills />
        <Description />
      </div>
    </section>
  );
};

export default About;
