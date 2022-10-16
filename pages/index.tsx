import Head from "next/head";
import dynamic from "next/dynamic";

import { Container, Stack, Divider, Grid } from "@mui/material";

import HeroBanner from "@/components/banner/HeroBanner";
import IntroSection from "@/components/content/home/IntroSection";
import PurposeSection from "@/components/content/home/PurposeSection";
import ResourcesSection from "@/components/content/home/ResourcesSection";
import RoutesSection from "@/components/content/home/RoutesSection";
import SampleSection from "@/components/content/home/SampleSection";
import MainFooter from "@/components/nav/footer/MainFooter";

const DemoSection = dynamic(() => import("@/components/demo/DemoSection"), {
  ssr: false,
});

function PageHead(): JSX.Element {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>fastText API</title>
      <meta
        name="description"
        content="fastText public API. Get word embeddings quick and easy."
      />
    </Head>
  );
}

function Home(): JSX.Element {
  return (
    <>
      <PageHead />
      <HeroBanner />
      <Container>
        <Stack spacing={12}>
          <IntroSection />
          <PurposeSection />
          <Divider />
          <Grid container justifyContent="space-evenly" alignItems="baseline">
            <Grid item>
              <ResourcesSection />
            </Grid>
            <Grid item>
              <RoutesSection />
            </Grid>
          </Grid>
          <Divider />
          <SampleSection />
          <Divider />
          <DemoSection />
        </Stack>
      </Container>
      <MainFooter />
    </>
  );
}

export default Home;
