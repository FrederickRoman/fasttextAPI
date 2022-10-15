import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import { codingLang } from "@/types/union/codingLang";

interface Props {
  codeLang: codingLang;
}

const API_URL = "https://fasttextapi.com/api/word/";

/**
 * To avoid
 * Warning: Prop `className` did not match.
 * Server: " language-js" Client: "language-js",
 * lazy load SyntaxHighlighter without SSR
 */
const lazyLoadSH = () => import("@/components/highlighter/SyntaxHighlighter");
const SyntaxHighlighter = dynamic(lazyLoadSH, { ssr: false });

function JavascriptSnippet(): JSX.Element {
  const codeTextJs = `const data = { words: ['cat'] };

fetch('${API_URL}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });`;
  return <SyntaxHighlighter codingLanguage="js" codeText={codeTextJs} />;
}

function PythonSnippet(): JSX.Element {
  const codeTextPy = `import requests

url = '${API_URL}'
data = { words: ['cat'] }
        
r = requests.post(url, data = data)
        
print(r.json())`;
  return <SyntaxHighlighter codingLanguage="python" codeText={codeTextPy} />;
}

function CurlSnippet(): JSX.Element {
  const codeTextCurl = `curl -d '{ words: ['cat'] }' \\
     -H "Content-Type: application/json" \\
     -X POST ${API_URL}`;

  return <SyntaxHighlighter codingLanguage="bash" codeText={codeTextCurl} />;
}

function FetchCallSnippet(props: Props): JSX.Element {
  const { codeLang } = props;

  const Snippet = () => {
    if (codeLang == "js") return <JavascriptSnippet />;
    else if (codeLang == "py") return <PythonSnippet />;
    else if (codeLang == "bash") return <CurlSnippet />;
    else return <JavascriptSnippet />;
  };

  return (
    <Box minHeight={90} width={550}>
      <Snippet />
    </Box>
  );
}

export default FetchCallSnippet;
