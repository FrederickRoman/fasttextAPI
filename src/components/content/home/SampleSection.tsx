import { useState } from "react";
import {
  Box,
  Stack,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FetchCallSnippet from "@/components/snippet/FetchCallSnippet";
import { codingLang } from "@/types/union/codingLang";

function SampleSection(): JSX.Element {
  const [codeLang, setCodeLang] = useState<codingLang>("js");

  const handleChange = (event: SelectChangeEvent) => {
    setCodeLang(event.target.value as codingLang);
  };

  const CodeLangSelect = () => (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <FormControl>
          <InputLabel id="codingLanguage_selectLabel">Language</InputLabel>
          <Select
            labelId="codingLanguage_selectLabel"
            id="codingLanguage_select"
            value={codeLang}
            onChange={handleChange}
          >
            <MenuItem value="js">javascript</MenuItem>
            <MenuItem value="py">python</MenuItem>
            <MenuItem value="bash">cURL</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );

  return (
    <Box component="section" my={5}>
      <Stack spacing={8}>
        <CodeLangSelect />
        <FetchCallSnippet codeLang={codeLang} />
      </Stack>
    </Box>
  );
}

export default SampleSection;
