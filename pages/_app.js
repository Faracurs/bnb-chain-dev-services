import './styles.css';

// This file exists to satisfy the build requirement
// The actual application uses the App Router in src/app
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;