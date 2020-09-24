import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";

function Page2() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h1">This is page2 title</Typography>
      <Typography as="h4">this is page2 subtitle</Typography>
    </Presentation>
  );
}

export default Page2;
