import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useRoute, useRouteAction } from "./context/RouteContext";
import Icon from "./components/Icon";

const AppContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const PresentationActionContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 30px;
`;

const PresentationAction = styled.div`
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`;

function Routes() {
  const routes = useRoute();
  const { prev, next } = useRouteAction()

  return (
    <AppContainer>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
      <PresentationActionContainer>
        <PresentationAction to="/" onClick={prev}>
          <Icon name="ChevronLeft" />
        </PresentationAction>
        <PresentationAction to="/page2" onClick={next}>
          <Icon name="ChevronRight" />
        </PresentationAction>
      </PresentationActionContainer>
    </AppContainer>
  );
}

export default Routes;
