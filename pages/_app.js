import "../styles/_app.css";
import AppProvider from '../src/provider/AppProvider'
// eslint-disable-next-line
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { Loader } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AppProvider>
      {
        loading ? <div style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 999999, backgroundColor: '#232323' }}>
          <Loader color="#A91111" size="xl" variant="bars" />
        </div>
          : <Component {...pageProps} />
      }
    </AppProvider>
  )
}

export default MyApp
