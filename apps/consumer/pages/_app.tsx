import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { initializeStore } from './../store/store';\
import { wrapper } from './../store/store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to consumer!</title>
      </Head>
      <main className="app">
        {/* <Provider store={initializeStore()}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
      </main>
    </>
  );
}

// export default CustomApp;
export default wrapper.withRedux(CustomApp);
