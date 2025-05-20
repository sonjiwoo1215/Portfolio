import Description from "../components/Description";
import Me from "../components/Me";
import Skills from "../components/Skills";

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
