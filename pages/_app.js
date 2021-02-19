import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag';
import { isBrowser } from '../lib/utils';

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  // client side using window undefinde condition
  const currentUrl = isBrowser() ? window.location.href : null;
  pageProps.currentUrl = currentUrl

  return <Component {...pageProps} />
}

export default App