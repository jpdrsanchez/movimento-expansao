import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ScrollProvider } from '../context/ScrollContext';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movimento Expansão</title>
      </Head>
      <GlobalStyles />
      <ScrollProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ScrollProvider>
    </>
  );
}

export default MyApp;
