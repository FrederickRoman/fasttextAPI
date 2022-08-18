import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, IconButton } from "@mui/material";

interface Props {
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
}

function WordTextField(props: Props): JSX.Element {
  const { setWords } = props;
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleAddWord = (): void => {
    setWords((words) => (words.includes(value) ? words : [...words, value]));
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
            <IconButton aria-label="add" onClick={handleAddWord}>
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
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default WordTextField;
