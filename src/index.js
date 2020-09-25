import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RouteContextProvider from "./context/RouteContext";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

const routes = [
  {
    key: "page1",
    path: "/",
    exact: true,
    component: Page1,
  },
  {
    key: "page2",
    path: "/page2",
    component: Page2,
  },
  {
    key: "page3",
    path: "/page3",
    component: Page3,
  },
  {
    key: "page4",
    path: "/page4",
    component: Page4,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouteContextProvider {...{ routes }}>
        <App />
      </RouteContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
