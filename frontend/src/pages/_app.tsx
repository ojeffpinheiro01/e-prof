import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";

import theme from "ui/theme/theme";
import "@styles/globals.css";
import Header from "ui/components/surfaces/header/header/header";
import Footer from "ui/components/surfaces/footer/Footer";

import { AppContainer } from "@styles/pages/_app.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e-profs</title>
        {/* eslint-disable @next/next/no-css-tags */}
        <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
