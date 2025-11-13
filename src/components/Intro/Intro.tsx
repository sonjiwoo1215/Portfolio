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
          웹 개발자 <Highlight>손지우</Highlight>입니다.
        </Title>
        <Contact />
        <Description><strong>웹과 모바일에서 일관된 서비스 가치를 구현하는 것을 지향하며, <br/> 의도가 명확한 UI/UX를 추구합니다.</strong></Description>
      </TextContent>
    </Section>
  );
};

export default Intro;
