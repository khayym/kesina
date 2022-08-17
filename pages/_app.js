import "../styles/_app.css";
import AppProvider from '../src/provider/AppProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
