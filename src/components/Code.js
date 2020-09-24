import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const Pre = styled.pre`
  background-color: #090b10;
  padding: 0.4rem;
  border-radius: 0.4rem;
  font-weight: 500;
`;

const Code = styled.code``;

function CodeComponent({ children }) {
  const containerNode = useRef(null);
  useEffect(() => {
    containerNode.current
      .querySelectorAll("pre")
      .forEach((block) => hljs.highlightBlock(block));
  });

  return (
    <div ref={containerNode}>
      <Pre>
        <Code className="language-javascript">{children}</Code>
      </Pre>
    </div>
  );
}

export default CodeComponent;
