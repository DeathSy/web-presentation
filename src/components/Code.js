import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Code({ children, ...codeProps }) {
  return (
    <SyntaxHighLighter
      {...codeProps}
      lineNumberStyle={{ color: "rgba(255,255,255,0.5)" }}
      lineNumberContainerStyle={{ float: 'left', paddingRight: 20 }}
      style={irBlack}
    >
      {children}
    </SyntaxHighLighter>
  );
}

export default Code;
