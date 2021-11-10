import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from '@/themes/ftaTheme';


declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}


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
