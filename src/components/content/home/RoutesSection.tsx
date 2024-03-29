import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function RoutesHeader(): JSX.Element {
  return <h2>Routes</h2>;
}
function PostRoute(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Box mx={1}>
          <span>POST /api/word/</span>
        </Box>
      </Grid>
      <Grid item>
        <Box mx={1}>
          <span> body:&#123;words:['list', 'of', 'words']&#125; </span>
        </Box>
      </Grid>
    </Grid>
  );
}

function RoutesDescription(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <PostRoute />
      </Grid>
    </Grid>
  );
}

function RoutesSection(): JSX.Element {
  return (
    <Box component="section" my={5}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <RoutesHeader />
        </Grid>
        <Grid item>
          <RoutesDescription />
        </Grid>
      </Grid>
    </Box>
  );
}

export default RoutesSection;
