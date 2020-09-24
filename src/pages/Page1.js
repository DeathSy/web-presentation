import React from "react";
import Presentation from "../components/Presentation";
import Typography from '../components/Typography'

function Page1() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h1">Modern Frontend Development Part 1</Typography>
      <Typography as="h4">Introduction to ReactJS</Typography>
    </Presentation>
  );
}

export default Page1;
