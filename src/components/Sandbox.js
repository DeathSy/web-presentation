import React, { useState, useCallback } from "react";
import Editor from "react-ace";
import styled from "styled-components";
import "brace/mode/javascript";
import "brace/mode/html";
import "brace/theme/dracula";

const SandboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HTMLPreview = styled.iframe`
  background-color: #fff;
  flex: 1;
`;

function Sandbox({ initialCode, language }) {
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = useCallback((newCode) => setCode(newCode), [
    setCode,
  ]);

  return (
    <SandboxContainer>
      <Editor
        value={code}
        onChange={handleCodeChange}
        mode={language}
        fontSize={20}
        theme="dracula"
        width="800px"
        tabSize={2}
        style={{ flex: 2 }}
      />
      <HTMLPreview title="code-output" srcDoc={code} />
    </SandboxContainer>
  );
}

export default Sandbox;
