import "../styles/_app.css";
import AppProvider from '../src/provider/AppProvider'
// eslint-disable-next-line
import "swiper/css/bundle";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <AppProvider>
      {loading ? <Component {...pageProps} /> : <div style={{ height: '100%', width: '100%', backgroundColor: '#000' }}>Loading...</div>}
    </AppProvider>
  )
}

export default MyApp
