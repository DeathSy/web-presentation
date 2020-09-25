import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";

function Page11() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        That didn't seem easy{" "}
        <span role="img" aria-label="">
          🤔
        </span>
      </Typography>
    </Presentation>
  );
}

export default Page11;
