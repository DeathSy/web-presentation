import React from "react";
import Presentation from "../components/Presentation";
import Typography from '../components/Typography'
import Sandbox from '../components/Sandbox';

function Page10() {
  return (
    <Presentation contentDirection="column" alignments="center-center">
      <Typography as="h3">Let make things more complex</Typography>
      <Sandbox language="html" initialCode={`<div id="root"></div>

<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<script type="text/javascript">
    const rootNode = document.getElementById("root");

    const childComponent = React.createElement(
      "div", 
      null,
      "Hello This is a childComponent"
    );
    const containerComponent = React.createElement(
      "div"
    );

    ReactDOM.render(containerComponent, rootNode);
</script>
`} />
    </Presentation>
  );
}

export default Page10;
