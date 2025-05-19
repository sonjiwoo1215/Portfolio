import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div``;

export default Layout;
