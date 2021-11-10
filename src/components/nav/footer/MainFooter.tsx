import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

function MainFooter(): JSX.Element {
  const currentYear: number = new Date().getFullYear();
  return (
    <Typography variant="body2" color="primary" align="center">
      ©
      <MuiLink color="inherit" href="https://www.frederickroman.com/">
        &nbsp; Frederick Roman &nbsp;
      </MuiLink>
      {currentYear}.
    </Typography>
  );
}

export default MainFooter;
