import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";

function Page12() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h1">{`<JSX />`}</Typography>
      <Typography as="h4">
        HTML style syntax inside Javascript{" "}
        <span role="img" aria-label="poppers">
          🎉
        </span>
      </Typography>
    </Presentation>
  );
}

export default Page12;
