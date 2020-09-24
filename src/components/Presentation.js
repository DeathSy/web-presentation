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
  height: ${(props) => 1 / props.theme.aspectRatio * 100}%;
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
