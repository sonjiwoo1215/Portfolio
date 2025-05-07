import styled, { keyframes } from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <h1>
        Frontend Developer <span>Son jiwoo</span>
      </h1>
    </HeaderStyle>
  );
}

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderStyle = styled.header`
  background: linear-gradient(to right, #38b2ac, #68d391);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    -webkit-text-stroke: 1px #ffffff;
    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
    margin: 0;

    span {
      -webkit-text-stroke: 0.5px black; 
      color: black;
      display: inline-block;
      animation: ${fadeInDown} 1s ease-out;
    }
  }
`;

export default Header;
