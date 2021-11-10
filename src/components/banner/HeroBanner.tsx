import Image from "next/image";
import heroBgPic from "../../../public/img/hero_bg.jpeg";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section_container_layerStack: {
      display: "grid",
      justifyItems: "start",
      alignItems: "start",
      "& > *": {
        gridColumnStart: 1,
        gridRowStart: 1,
      },
    },
    header_container_center: {
      width: "100%",
      height: "100%",
      zIndex: 1,
      display: "grid",
      justifyContent: "center",
      alignContent: "center",
    },
    textMsg: {
      color: theme.palette.background.default,
      fontSize: "clamp(2rem, 10vw, 5rem)",
      background: "rgba(87, 12, 29, 0.2)",
    },
  })
);

function HeroBanner(): JSX.Element {
  const classes = useStyles();
  return (
    <section role="banner" className={classes.section_container_layerStack}>
      <Image
        src={heroBgPic}
        priority
        alt="background: yarn-like network graph"
      />
      <header className={classes.header_container_center}>
        <span className={classes.textMsg}> fastText API</span>
      </header>
    </section>
  );
}

export default HeroBanner;
