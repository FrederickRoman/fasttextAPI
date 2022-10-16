import { Box, Stack, Typography } from "@mui/material";

function PurposeSection(): JSX.Element {
  return (
    <Box component="section" px={2}>
      <Stack spacing={2}>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Purpose
        </Typography>
        <Stack spacing={2}>
          <p>
            Word embeddings enable the use of state of the art NLP DL models.
          </p>
          <p>
            However, you need those embeddings on inference (not just on
            training).
          </p>
          <p>
            If you decide to run the inference client-side, you either have to
            bundle the embeddings with the client code (too impractical) or use
            a server API.
          </p>
          <p>
            With this API service, you get word embeddings to run state of the
            art NLP DL inference client-side.
          </p>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PurposeSection;
