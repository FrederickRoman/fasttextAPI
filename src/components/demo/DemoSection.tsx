import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DemoWordAdd from "./input/DemoWordAdd";
import DemoHeatmap from "./output/DemoHeatmap";

const DEFAULT_WORDS: string[] = ["cat", "dog", "pet", "human", "animal"];
const DEFAULT_DATA: number[][] = new Array(DEFAULT_WORDS.length)
  .fill(0)
  .map(() =>
    new Array(DEFAULT_WORDS.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 50 + 50))
  );

function DemoSection(): JSX.Element {
  const [words, setWords] = useState<string[]>(DEFAULT_WORDS);
  const [data, setData] = useState<number[][]>(DEFAULT_DATA);

  useEffect(() => {
    setData(
      new Array(words.length)
        .fill(0)
        .map(() =>
          new Array(words.length)
            .fill(0)
            .map(() => Math.floor(Math.random() * 50 + 50))
        )
    );
  }, [words.toString()]);

  return (
    <Box my={8}>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap={6}
      >
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Box m={6}>
                <Typography variant="h4">Compare words</Typography>
              </Box>
            </Grid>
            <Grid item>
              <DemoWordAdd words={words} setWords={setWords} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item width="100%">
          <DemoHeatmap xLabels={words} yLabels={words} data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DemoSection;
