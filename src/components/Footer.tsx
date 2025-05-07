import styled from "styled-components";
import Contact from "./Contact";

function Footer() {
  return (
    <FooterStyle>
      <Contact />
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  padding: 2rem 0;
  background: #000000;
  opacity: 50%;
  font-size: 1rem;
`;

export default Footer;
