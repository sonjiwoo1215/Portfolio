import React from "react";
import ReactDOM from "react-dom/client";
import './styles/global.css'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme.ts";
import GlobalStyle from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
