import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    intro_p: {
      fontSize: "clamp(2em, 5vw, 5em)",
      textAlign: "center"
    },
  })
);

function IntroSection(): JSX.Element {
  const classes = useStyles();
  return (
    <section>
      <p className={classes.intro_p}>
        Fastext API is an unnoficial API for Facebook's fastText word embedding
        used under a public license
      </p>
    </section>
  );
}

export default IntroSection;
