import profileImg from "../../assets/img/son.jpg"
import Contact from "../Contact/Contact";
import { Description, Highlight, ProfileImage, Section, TextContent, Title } from "./Intro.styles";

const Intro = () => {
  return (
    <Section>
      <ProfileImage src={profileImg} alt="Profile" />

      <TextContent>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          안녕하세요. <br />
          프론트엔드 개발자 <Highlight>손지우</Highlight>입니다.
        </Title>
        <Contact />
        <Description>명확한 UI와 유연한 사용자 경험을 지향합니다.</Description>
      </TextContent>
    </Section>
  );
};

export default Intro;
