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
    font-size: 40px;
    user-select: none;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: .8rem 0;
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
