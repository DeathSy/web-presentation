import React from "react";
import Presentation from "../components/Presentation";
import Typography from "../components/Typography";
import Sandbox from "../components/Sandbox";

function Page13() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">
        Start changing our <code>createElement</code> to JSX
      </Typography>
      <Sandbox
        language="html"
        initialCode={`<div id="root"></div>

<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script
  crossorigin
  src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"
  integrity=
    "sha512-DskGSYqitGt/j48MFn5qbGNmDKNzCBJDw6hVEiIB6Cu49+CQWgeDo/lFX70kPCPbpCh0gIlKV6o4qEY+DUKmmQ=="></script>

<script type="text/javascript">
    const rootNode = document.getElementById("root");

    const ChildComponent = React.createElement(
      "div", 
      null,
      "Hello This is a childComponent"
    );
    const containerComponent = React.createElement(
      "div",
      null,
      ["Hello World", ChildComponent]
    );

    ReactDOM.render(containerComponent, rootNode);
</script>
`}
      />
    </Presentation>
  );
}

export default Page13;
