import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";

function Page6() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <img src={require("../assets/react-logo.svg")} alt="react-logo" />
      <Typography as="h2">
        ReactJS to the Rescue{" "}
        <span role="img" aria-label="ambulance">
          🚑🚨
        </span>
      </Typography>
    </Presentation>
  );
}

export default Page6;
