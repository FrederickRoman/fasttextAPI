import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Stack, Typography } from "@mui/material";

interface Props {
  words: string[];
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
}

function WordList(props: Props): JSX.Element {
  const { words, setWords } = props;

  const handleDelete = (word: string): void =>
    setWords((words) => words.filter((w) => w !== word));

  return (
    <Stack spacing={2} style={{ listStyleType: "none" }}>
      {words.map((word, i) => (
        <Stack key={i}>
          <Box component="li">
            <IconButton aria-label="delete" onClick={() => handleDelete(word)}>
              <DeleteIcon />
            </IconButton>
            <Box component="span" mx={2}>
              <Typography component="span">{word}</Typography>
            </Box>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}

export default WordList;
