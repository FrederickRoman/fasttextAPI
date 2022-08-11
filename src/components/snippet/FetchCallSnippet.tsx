import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import { codingLang } from "@/types/union/codingLang";

interface Props {
  codeLang: codingLang;
}

const API_URL = "https://fasttextapi.com";

/**
 * To avoid
 * Warning: Prop `className` did not match.
 * Server: " language-js" Client: "language-js",
 * lazy load SyntaxHighlighter without SSR
 */
const lazyLoadSH = () => import("@/components/highlighter/SyntaxHighlighter");
const SyntaxHighlighter = dynamic(lazyLoadSH, { ssr: false });

function JavascriptSnippet(): JSX.Element {
  return (
    <SyntaxHighlighter
      codingLanguage="js"
      codeText={
        `fetch('${API_URL}/api/word/cat')` +
        "\n" +
        ".then(response => response.json())" +
        "\n" +
        ".then(json => console.log(json))"
      }
    />
  );
}

function PythonSnippet(): JSX.Element {
  return (
    <SyntaxHighlighter
      codingLanguage="python"
      codeText={
        "import requests" +
        "\n" +
        `response = requests.get('${API_URL}/api/word/cat')` +
        "\n" +
        "print(response.json())"
      }
    />
  );
}

function CurlSnippet(): JSX.Element {
  return (
    <SyntaxHighlighter
      codingLanguage="bash"
      codeText={`curl ${API_URL}/api/word/cat`}
    />
  );
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
    <Box minHeight={90} style={{ background: "#1e1e1e" }}>
      <Snippet />
    </Box>
  );
}

export default FetchCallSnippet;
