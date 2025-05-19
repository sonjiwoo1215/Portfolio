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
  background-color: ${({theme})=>theme.colors.lightDark};
  font-size: 1rem;
`;

export default Footer;
