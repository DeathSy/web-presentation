import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Sandbox from "../components/Sandbox";

function Page4() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        Let's make things harder by create some action to our divs
      </Typography>
      <Sandbox
        language="html"
        initialCode={`<style type="text/css">
  .red { background-color: red; }
  .blue { backgorund-color: blue; }
</style>

<div id="root"></div>

<script type="text/javascript">
  const rootNode = document.getElementById("root");

  const element = document.createElement("div");
  element.textContent = "Click Me!";
  element.className = "red";

  rootNode.appendChild(element);
</script>
`}
      />
    </Presentation>
  );
}

export default Page4;
