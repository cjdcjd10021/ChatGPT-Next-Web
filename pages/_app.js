// 在 pages/_app.js 或一个特定的页面组件中
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 确保在客户端代码执行
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-EQ27PZH0VM', {
        page_path: url,
      });
    };
    // 监听路由变化事件
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Google AdSense */}
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-您的发布者ID"
        crossOrigin="anonymous"
      />
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-EQ27PZH0VM"
        async
      />
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

