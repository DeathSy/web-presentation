import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Sandbox from "../components/Sandbox";

function Page3() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        Start with create element into root <code>div</code>
      </Typography>
      <Sandbox
        language="html"
        initialCode={`<style type="text/css">
  .container {
    background-color: red;
  }
</style>

<div id="root"></div>

<script type="text/javascript">
  const rootNode = document.getElementById("root");

</script>`}
      />
    </Presentation>
  );
}

export default Page3;
