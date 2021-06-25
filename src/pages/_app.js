import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movimento Expansão</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
