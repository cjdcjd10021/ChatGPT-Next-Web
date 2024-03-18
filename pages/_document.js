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
            id="adsbygoogle-script" // 添加了 id
          ></Script>

          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-EQ27PZH0VM"
            async
            id="gtag-script" // 添加了 id
          ></Script>
          <Script
            strategy="afterInteractive"
            id="gtag-init-script" // 为内联脚本添加了 id
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
