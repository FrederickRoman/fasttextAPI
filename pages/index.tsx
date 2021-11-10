import Head from "next/head";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import HeroBanner from "@/components/banner/HeroBanner";
import IntroSection from "@/components/content/home/IntroSection";
import ResourcesSection from "@/components/content/home/ResourcesSection";
import RoutesSection from "@/components/content/home/RoutesSection";
import SampleSection from "@/components/content/home/SampleSection";
import DemoSection from "@/components/demo/DemoSection";
import MainFooter from "@/components/nav/footer/MainFooter";

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
        <IntroSection />
        <Divider />
        <ResourcesSection />
        <Divider />
        <RoutesSection />
        <Divider />
        <SampleSection />
        <Divider />
        <DemoSection />
      </Container>
      <MainFooter />
    </>
  );
}

export default Home;
