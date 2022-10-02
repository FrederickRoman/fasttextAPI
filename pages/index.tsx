import Head from "next/head";

import { Container, Stack, Divider } from "@mui/material";

import HeroBanner from "@/components/banner/HeroBanner";
import IntroSection from "@/components/content/home/IntroSection";
import ResourcesSection from "@/components/content/home/ResourcesSection";
import RoutesSection from "@/components/content/home/RoutesSection";
import SampleSection from "@/components/content/home/SampleSection";
import MainFooter from "@/components/nav/footer/MainFooter";

import dynamic from "next/dynamic";

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
          <Divider />
          <ResourcesSection />
          <Divider />
          <RoutesSection />
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
