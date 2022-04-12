import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
<<<<<<< HEAD
=======
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { initializeStore } from './../store/store';\
import { wrapper } from './../store/store';
>>>>>>> ed703815911de717f00e35ea454c911afedb64dc

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to consumer!</title>
      </Head>
      <main className="app">
<<<<<<< HEAD
        <Component {...pageProps} />
=======
        {/* <Provider store={initializeStore()}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
>>>>>>> ed703815911de717f00e35ea454c911afedb64dc
      </main>
    </>
  );
}

<<<<<<< HEAD
export default CustomApp;
=======
// export default CustomApp;
export default wrapper.withRedux(CustomApp);
>>>>>>> ed703815911de717f00e35ea454c911afedb64dc
