import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from '@/themes/ftaTheme';

const cache = createCache({ key: "css" });
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
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <MainBar /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
