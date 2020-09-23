import React from "react";
import styled from "styled-components";
import { usePresentationTheme } from "../context/PresentationTheme";

const PresentationWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.blankspaceBackgroundColor};
`;

const PresentationContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  width: 100%;
  height: 56.25%;
`;

function Presentation({ children }) {
  const theme = usePresentationTheme();

  return (
    <PresentationWrapper {...{ theme }}>
      <PresentationContainer {...{ theme }}>
        <div>{children}</div>
      </PresentationContainer>
    </PresentationWrapper>
  );
}

export default Presentation;
