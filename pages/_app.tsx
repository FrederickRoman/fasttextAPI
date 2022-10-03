import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/themes/ftaTheme";

const cache = createCache({
  key: "css",
  prepend: true,
});
cache.compat = true;

interface props {
  Component: PropTypes.ReactComponentLike;
  pageProps: object;
}

export default function MyApp(props: props) {
  const { Component, pageProps } = props;
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>fastText API</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <MainBar /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
