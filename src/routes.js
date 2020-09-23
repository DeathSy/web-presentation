import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TitlePage = lazy(() => import("./pages/Title"));

function Routes() {
  return (
    <Router>
      <Suspense fallback="loading...">
        <Switch>
          <Route path="/" component={TitlePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
