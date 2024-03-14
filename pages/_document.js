import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'; // 引入 Script 组件

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google AdSense */}
          <Script
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8339895143846620"
            crossOrigin="anonymous"
          ></Script>

          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-EQ27PZH0VM"
            async
          ></Script>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EQ27PZH0VM');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
