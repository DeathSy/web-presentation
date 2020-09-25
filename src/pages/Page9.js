import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Code from "../components/Code";

function Page9() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        Let's dig a little deeper about what we are doing eariler
      </Typography>
      <Code language="javasript">
        {`React.createElement("component or HTMLElement", Props{}, Children{})`}
      </Code>
    </Presentation>
  );
}

export default Page9;
