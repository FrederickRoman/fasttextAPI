import { Box, Link, Typography } from "@mui/material";

function MainFooter(): JSX.Element {
  const currentYear: number = new Date().getFullYear();
  return (
    <Box mt={5} mb={5}>
      <Typography
        variant="body2"
        color="primary"
        align="center"
        sx={{ fontSize: "large" }}
      >
        ©
        <Link
          color="inherit"
          href="https://www.frederickroman.com/"
          sx={{ textDecoration: "none" }}
        >
          &nbsp; Frederick Roman &nbsp;
        </Link>
        {currentYear}.
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        align="center"
        sx={{ fontSize: "large" }}
      >
        ©
        <Link
          color="inherit"
          href="https://homeroroman.com/"
          sx={{ textDecoration: "none" }}
        >
          &nbsp; Homero Roman &nbsp; &nbsp;
        </Link>
        {currentYear}.
      </Typography>
    </Box>
  );
}

export default MainFooter;
