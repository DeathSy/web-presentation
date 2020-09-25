import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Code from "../components/Code";

function Page14() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        This slide is all written using ReactJS so you can find and download
        this slide at
      </Typography>
      <Typography as="h2">
        <Code language="text">github.com/DeathSy/web-presentation</Code>
      </Typography>
    </Presentation>
  );
}

export default Page14;
