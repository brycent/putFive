/* eslint-disable react/prop-types */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <Component pageProps={pageProps} />;
}

export default MyApp;
