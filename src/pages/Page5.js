import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";

function Page5() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        As you can all see our code just look wired{" "}
        <span role="img" aria-label="not-good-face">
          😖
        </span>
      </Typography>
      <Typography as="h3">
        Can we just make our <q>JS HTML things</q> look more simple{" "}
        <span role="img" aria-label="think-face">
          🤔
        </span>
      </Typography>
    </Presentation>
  );
}

export default Page5;
