import "@/styles/globals.css";
import { NotificationContextProvider } from "../store/context";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
