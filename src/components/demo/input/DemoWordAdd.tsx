import { Stack } from "@mui/material";
import WordList from "./WordList";
import WordTextField from "./WordTextField";

interface Props {
  words: string[];
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
}

function DemoWordAdd(props: Props): JSX.Element {
  const { words, setWords } = props;

  return (
    <Stack spacing={4}>
      <WordTextField setWords={setWords} />
      <WordList words={words} setWords={setWords} />
    </Stack>
  );
}

export default DemoWordAdd;
