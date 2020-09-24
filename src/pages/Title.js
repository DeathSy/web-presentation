import React from "react";
import Presentation from "../components/Presentation";
import Typography from '../components/Typography'

function Title() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h1">This is a Title Content</Typography>
      <Typography as="h4">this is an ordinary subtitle</Typography>
    </Presentation>
  );
}

export default Title;
