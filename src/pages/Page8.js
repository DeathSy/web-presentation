import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Sandbox from "../components/Sandbox";

function Page8() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">Start using ReactJS</Typography>
      <Sandbox language="html" initialCode={`<div id="root"></div>

<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<script type="text/javascript">
    const rootNode = document.getElementById("root");
</script>
`} />
    </Presentation>
  );
}

export default Page8;
