import { Box, Link, Stack, Typography } from "@mui/material";

function AttributionSection(): JSX.Element {
  return (
    <Box component="section" px={2}>
      <Stack spacing={2}>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Attribution
        </Typography>
        <Stack spacing={2}>
          <p>
            The data was taken from &nbsp;
            <Link
              color="inherit"
              href="https://github.com/facebookresearch/fastText"
            >
              fastText public repository
            </Link>
            &nbsp; where they are licensed under &nbsp;
            <Link
              color="inherit"
              href="https://creativecommons.org/licenses/by-sa/3.0/"
            >
              CC BY-SA 3.0
            </Link>
            &nbsp;
          </p>
          <p>
            The size of the data was reduced. Only the most common word embeddings were
            extracted. Then the embeddings were reduced with PCA.
          </p>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AttributionSection;
