import Description from "../components/Description/Description";
import Me from "../components/Me/Me";
import Skills from "../components/Skills/Skills";

const About = () => {
  return (
    <section>
      <div>
        <Me />
        <Skills />
        <Description />
      </div>
    </section>
  );
};

export default About;
