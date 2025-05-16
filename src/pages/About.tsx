import Description from "../components/Description";
import Me from "../components/Me";
import Skills from "../components/Skills";

const About = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto text-center">
        <Me />
        <Skills />
        <Description />
      </div>
    </section>
  );
};

export default About;
