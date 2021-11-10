import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function ResourcesHeader(): JSX.Element {
  return <h2>Resources</h2>;
}
function PostRoute(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <span>POST /api/word/</span>
      </Grid>
      <Grid item>
        <span>&gt; 130,000 words</span>
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

function ResourcesSection(): JSX.Element {
  return (
    <section>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <ResourcesHeader />
        </Grid>
        <Grid item>
          <RoutesDescription />
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              Note: Due budget/memory constraints this version is a subset of
              fastText.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default ResourcesSection;