import "@/styles/globals.css";
import { NotificationContextProvider } from "../store/context";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Head>
        <title>The CELS® Test</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The CELS® Test is an English language proficiency assessment that is widely recognized for student exchange programs"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
