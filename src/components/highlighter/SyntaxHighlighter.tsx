import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
//import "prismjs/themes/prism-vsc-dark-plus.css";

require("prismjs/components/prism-python");
require("prismjs/components/prism-bash");

interface Props {
  codingLanguage: string;
  codeText: string;
}

function SyntaxHighlighter(props: Props): JSX.Element {
  const { codingLanguage, codeText } = props;

  useEffect(() => Prism.highlightAll(), []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${codingLanguage}`}>{codeText}</code>
      </pre>
    </div>
  );
}

export default SyntaxHighlighter;
