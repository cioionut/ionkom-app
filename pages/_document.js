import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';
import { isBrowser } from '../lib/utils';


class MyDocument extends Document {
  render() {
    // client side using window undefinde condition
    const currentUrl = isBrowser() ? window.location.href : null;

    return (
      <Html>
        <Head>
          <script data-ad-client="ca-pub-7711070281943881" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        
          {/* remove this if you want per page canonical url and use _app.js to pass currentUrl for all pages and rewrite if needed */}
          <link rel="canonical" href={ currentUrl } key="canonical" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument