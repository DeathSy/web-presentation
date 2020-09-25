import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RouteContextProvider from "./context/RouteContext";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";

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
  {
    key: "page5",
    path: "/page5",
    component: Page5,
  },
  {
    key: "page6",
    path: "/page6",
    component: Page6,
  },
  {
    key: "page7",
    path: "/page7",
    component: Page7,
  },
  {
    key: "page8",
    path: "/page8",
    component: Page8,
  },
  {
    key: "page9",
    path: "/page9",
    component: Page9,
  },
  {
    key: "page10",
    path: "/page10",
    component: Page10,
  },
  {
    key: "page11",
    path: "/page11",
    component: Page11,
  },
  {
    key: "page12",
    path: "/page12",
    component: Page12,
  },
  {
    key: "page13",
    path: "/page13",
    component: Page13,
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
