import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
    color: #222;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
