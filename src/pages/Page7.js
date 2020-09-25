import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";

function Page7() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h4">To start using ReactJS just import</Typography>
      <Typography as="h4">
        <code>React</code> and <code>ReactDOM</code>
      </Typography>
      <Typography as="h4">
        in your application and you're good to go!
      </Typography>
    </Presentation>
  );
}

export default Page7;
