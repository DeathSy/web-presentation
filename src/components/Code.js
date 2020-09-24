import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Code({ children, language }) {
  return (
    <SyntaxHighLighter {...{ language }} style={irBlack}>
      {children}
    </SyntaxHighLighter>
  );
}

export default Code;
