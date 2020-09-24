import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Code from "../components/Code";

function Page2() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h2">Before we start learn how to use ReactJS</Typography>
      <Typography as="h2">Let start with some old school way using</Typography>
      <Code>document.createElement</Code>
    </Presentation>
  );
}

export default Page2;
