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
  height: ${(props) => (1 / props.theme.aspectRatio) * 100}%;
`;

const PresentationContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => props.contentDirection};
  justify-content: ${(props) =>
    props.contentDirection === "row"
      ? props.verticalAlignment
      : props.horizontalAlignment};
  align-items: ${(props) =>
    props.contentDirection === "row"
      ? props.horizontalAlignment
      : props.verticalAlignment};
`;

function Presentation({
  children,
  alignments = "center-center",
  contentDirection = "row",
}) {
  const theme = usePresentationTheme();
  const [verticalAlignment, horizontalAlignment] = alignments.split("-");

  return (
    <PresentationWrapper {...{ theme }}>
      <PresentationContainer {...{ theme }}>
        <PresentationContentContainer
          {...{ verticalAlignment, horizontalAlignment, contentDirection }}
        >
          {children}
        </PresentationContentContainer>
      </PresentationContainer>
    </PresentationWrapper>
  );
}

export default Presentation;
