import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HeaderComponent } from "../components/organisims/HeaderComponent/HeaderComponent";
import { Provider } from "react-redux";
import { store } from "../ducks/page/"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Head>
        <title>Diphylleia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Diphyl_Grayi" />
        <meta name="twitter:title" content="Diphylleia" />
        <meta name="twitter:description" content="Next fall, bloom❁" />
        <meta property="og:image" content="/preview.png" />
      </Head>
      <HeaderComponent />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
