import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import PresentationThemeProvider from "./context/PresentationTheme";
import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex: 1;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <PresentationThemeProvider>
        <Routes />
      </PresentationThemeProvider>
    </Fragment>
  );
}

export default App;
