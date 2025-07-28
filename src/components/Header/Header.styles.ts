import styled, { keyframes } from "styled-components";

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeaderStyle = styled.header`
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
      -webkit-text-stroke: 1px ${({theme})=> theme.fonts.accent};
      color: ${({theme})=> theme.fonts.accent};
      display: inline-block;
      animation: ${fadeInDown} 1s ease-out;
    }
  }
`;
