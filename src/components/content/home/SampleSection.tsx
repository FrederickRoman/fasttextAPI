import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import FetchCallSnippet from "@/components/snippet/FetchCallSnippet";
import { codingLang } from "@/types/union/codingLang";

function SampleSection(): JSX.Element {
  const [codeLang, setCodeLang] = useState<codingLang>("js");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
    <section>
      <CodeLangSelect />
      <FetchCallSnippet codeLang={codeLang} />
    </section>
  );
}

export default SampleSection;
