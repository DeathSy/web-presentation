import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import PresentationThemeProvider from "./context/PresentationTheme";
import { Theme } from './constants/theme'
import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
  @import url(${Theme.FONT});

  ${normalize}

  html, body, #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex: 1;
    font-family: 'Roboto', sans-serif;
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
