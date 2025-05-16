import { motion } from "framer-motion";
import profileImg from "../assets/img/son.jpg";
import styled from "styled-components";
import Contact from "./Contact";

const Intro = () => {
  return (
    <Section>
      <ProfileImage
        src={profileImg}
        alt="Profile"
      />

      <TextContent>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          안녕하세요. <br />
          프론트엔드 개발자 <Highlight>손지우</Highlight>입니다.
        </Title>

        <ContactWrapper>
          <Contact />
        </ContactWrapper>

        <Description>
        명확한 UI와 유연한 사용자 경험을 지향합니다.
        </Description>
      </TextContent>
    </Section>
  );
};

const Section = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(to bottom, white, #f3f4f6);
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 8rem;
  height: 8rem;
  margin-top: 30px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ContactWrapper = styled.div`
  a {
    color: #000000;
    font-size: 1rem;
  }
`;

const Description = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #4a5568;
  max-width: 40rem;
  font-weight: 500;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Highlight = styled.span`
  color: #38b2ac;
`;

export default Intro;
