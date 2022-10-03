import { Box } from "@mui/material";

function IntroSection(): JSX.Element {
  return (
    <Box
      component="section"
      px={5}
      sx={{ bgcolor: "black", color: "lightgray", borderRadius: 5 }}
    >
      <p style={{ fontSize: "clamp(2em, 5vw, 5em)", textAlign: "center" }}>
        Fastext API is an unnoficial API for Facebook's fastText word embedding
        used under a public license
      </p>
    </Box>
  );
}

export default IntroSection;
