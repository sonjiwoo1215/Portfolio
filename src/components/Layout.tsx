import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
  }

function Layout({children}: LayoutProps) {
  return (
    <LayoutStyle>
        <Header />
        <LayoutStyle>{children}</LayoutStyle>
        <Footer />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div``;

export default Layout;