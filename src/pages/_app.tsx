import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";
import SplashScreen from "@/components/splash/SplashScreen";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <RecoilRoot>
      <Head>
        <title>KukkeKart</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
