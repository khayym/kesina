import "../styles/_app.css";
import AppProvider from '../src/provider/AppProvider'
// eslint-disable-next-line
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { Loader } from '@mantine/core';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AppProvider>
      <Head>
        <title>Ksenia Shapor</title>
        <meta name="title" content="Ksenia Shapor" />
        <meta name="description" content="С 2014 года я являюсь преподавателем по макияжу и базовым прическам, визажистом, имиджмейкером (училась на персонального стилиста в Милане в 2019 году), телеведущей и экспертом в сфере красоты, женским психологом. С 2017 года в Санкт-Петербурге существовала школа макияжа EFFEKTNO, далее я переехала в Москву. На моих курсах побывало более 700 учениц. Курсы преподавались в Воронеже, Тюмени, Ростове на Дону, Екатеринбурге и других городах. За 7 лет ко мне на курсы приезжали ученицы из Финляндии, Швеции, Израиля и даже США. Многие из которых вы можете увидеть во влогах на YouTube." />
        <meta name="keywords" content="beauty, СТИЛЬ ,stil,MAKEUP" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Russian" />
        <meta name="author" content="Khayyam Karimov" />
      </Head>
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
