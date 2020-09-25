import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Helmet } from "react-helmet";
import PresentationThemeProvider from "./context/PresentationTheme";
import { Theme } from "./constants/theme";
import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: ${Theme.FONT_COLOR};
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
      <Helmet>
        <meta charSet="utf-8" />
        <link href={Theme.FONT} rel="stylesheet" />
      </Helmet>
      <PresentationThemeProvider>
        <Routes />
      </PresentationThemeProvider>
    </Fragment>
  );
}

export default App;
