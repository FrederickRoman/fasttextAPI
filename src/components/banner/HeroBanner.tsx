import Image from "next/image";
import heroBgPic from "../../../public/img/hero_bg.jpeg";
import { Box } from "@mui/material";

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
