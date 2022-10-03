import React, { useState } from "react";
import { Grid, IconButton, Box, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface Props {
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
}

function WordTextField(props: Props): JSX.Element {
  const { setWords } = props;
  const [value, setValue] = useState<string>("");

  const pushInputToList = (word: string): void => {
    if (word) {
      setWords((words) => (words.includes(word) ? words : [...words, word]));
      setValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(event.target.value);

  const handleClick = (): void => pushInputToList(value);

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key == "Enter") {
      event.preventDefault();
      pushInputToList(value);
    }
  };

  return (
    <Grid container flexDirection="row">
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item>
            <IconButton aria-label="add" onClick={handleClick}>
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Word"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default WordTextField;
