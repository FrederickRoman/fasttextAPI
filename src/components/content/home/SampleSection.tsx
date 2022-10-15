import { useState } from "react";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FetchCallSnippet from "@/components/snippet/FetchCallSnippet";
import { codingLang } from "@/types/union/codingLang";
import ResponseSnippet from "@/components/snippet/ResponseSnippet";

function SampleSection(): JSX.Element {
  const [codeLang, setCodeLang] = useState<codingLang>("js");
  const [showSample, setShowSample] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCodeLang(event.target.value as codingLang);
  };

  return (
    <Box component="section" my={5}>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <FormControl>
                <InputLabel id="codingLanguage_selectLabel">
                  Language
                </InputLabel>
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
        </Grid>
        <Grid item>
          <FetchCallSnippet codeLang={codeLang} />
        </Grid>
        <Grid item>{showSample && <ResponseSnippet />}</Grid>
        <Grid item>
          {showSample ? (
            <Button variant="outlined" onClick={() => setShowSample(false)}>
              Hide sample response
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => setShowSample(true)}>
              Show sample response
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SampleSection;
