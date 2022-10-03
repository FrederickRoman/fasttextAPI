import { useState, useEffect } from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import DemoWordAdd from "./input/DemoWordAdd";
import DemoHeatmap from "./output/DemoHeatmap";
import ApiCallService from "@/services/client/ApiCallService";
import DataAnalysisService from "@/services/client/DataAnalysisService";

const DEFAULT_WORDS: Readonly<string[]> = Object.freeze([
  "cat",
  "dog",
  "pet",
  "human",
  "animal",
]);
const DEFAULT_DATA: Readonly<number[][]> = Object.freeze([
  [1, 0.24, 0.45, 0.23, 0.4],
  [0.24, 1, 0.25, 0.3, 0.23],
  [0.45, 0.25, 1, 0.19, 0.35],
  [0.23, 0.3, 0.19, 1, 0.41],
  [0.4, 0.23, 0.35, 0.41, 1],
]);

function DemoSection(): JSX.Element {
  const [words, setWords] = useState<string[]>([...DEFAULT_WORDS]);
  const [data, setData] = useState<number[][]>([...DEFAULT_DATA]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isActive: boolean = true;
    const round = (decimal: number): number => Math.round(100 * decimal) / 100;

    async function fetchHeatmapData(words: string[]): Promise<void> {
      try {
        setError(false);
        setLoading(true);
        if (words.length) {
          const embeddings = await ApiCallService.getFastTextEmbeddings(words);
          console.log(embeddings);
          if (isActive) {
            const coseSimMat = DataAnalysisService.getHeatMap(embeddings);
            const roundedCosSimMat = coseSimMat.map((row) => row.map(round));
            setData(roundedCosSimMat);
          }
        } else {
          if (isActive) setData([]);
        }
      } catch (error) {
        console.log(error);
        setData([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchHeatmapData(words);
    return () => {
      isActive = false;
      setData([]);
      setError(false);
      setLoading(false);
    };
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
                <Typography variant="h4">0 = different</Typography>
                <Typography variant="h4">1 = similar</Typography>
              </Box>
            </Grid>
            <Grid item>
              <DemoWordAdd words={words} setWords={setWords} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item width="100%">
          {words.length == 0 ? (
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>Please, add words</Grid>
            </Grid>
          ) : loading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={`${2 * words.length + 1.4}rem`}
            />
          ) : error ? (
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                API connection error. Please try again later or report it.
              </Grid>
            </Grid>
          ) : (
            <DemoHeatmap xLabels={words} yLabels={words} data={data} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DemoSection;
