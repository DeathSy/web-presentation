import React, { Fragment } from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
import { usePresentationTheme } from "../context/PresentationTheme";

const PresentationWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.blankspaceBackgroundColor};
`;

const PresentationContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
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

function usePageAction() {
  const prev = () => {};
  const next = () => {};

  return { prev, next };
}

function Presentation({
  children,
  alignments = "center-center",
  contentDirection = "row",
}) {
  const theme = usePresentationTheme();
  const [verticalAlignment, horizontalAlignment] = alignments.split("-");
  const { prev, next } = usePageAction();

  return (
    <Fragment>
      <PresentationWrapper {...{ theme }}>
        <PresentationContainer {...{ theme }}>
          <PresentationContentContainer
            {...{ verticalAlignment, horizontalAlignment, contentDirection }}
          >
            {children}
          </PresentationContentContainer>
        </PresentationContainer>
      </PresentationWrapper>
      <PresentationActionContainer>
        <PresentationAction onClick={prev}>
          <Icon name="ChevronLeft" />
        </PresentationAction>
        <PresentationAction onClick={next}>
          <Icon name="ChevronRight" />
        </PresentationAction>
      </PresentationActionContainer>
    </Fragment>
  );
}

export default Presentation;
