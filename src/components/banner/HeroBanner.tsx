import Image from "next/image";
import heroBgPic from "../../../public/img/hero_bg.jpeg";

import { Theme } from "@mui/material/styles";

import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Box } from "@mui/material";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     section_container_layerStack: {
//       display: "grid",
//       justifyItems: "start",
//       alignItems: "start",
//       "& > *": {
//         gridColumnStart: 1,
//         gridRowStart: 1,
//       },
//     },
//     // header_container_center: {
//     //   width: "100%",
//     //   height: "100%",
//     //   zIndex: 1,
//     //   display: "grid",
//     //   justifyContent: "center",
//     //   alignContent: "center",
//     // },
//     // textMsg: {
//     //   color: theme.palette.background.default,
//     //   fontSize: "clamp(2rem, 10vw, 5rem)",
//     //   background: "rgba(87, 12, 29, 0.2)",
//     // },
//   })
// );

function HeroBanner(): JSX.Element {
  return (
    <Box component="section" role="banner" position="relative">
      <Image
        src={heroBgPic}
        priority
        alt="background: yarn-like network graph"
      />
      <Box position="absolute" top="50%" left="50%">
        <header
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              color: "background.default",
              fontSize: "clamp(2rem, 10vw, 5rem)",
              background: "rgba(87, 12, 29, 0.2)",
              textAlign: "center",
            }}
          >
            fastText API
          </Box>
        </header>
      </Box>
    </Box>
  );
}

export default HeroBanner;
