import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TitlePage from "./pages/Title";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TitlePage} />
      </Switch>
    </Router>
  );
}

export default Routes;
