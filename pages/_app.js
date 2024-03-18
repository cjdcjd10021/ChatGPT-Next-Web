import { useEffect } from 'react';
import { useRouter } from 'next/router'; // 导入 useRouter
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // 使用 useRouter hook

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-EQ27PZH0VM', {
        page_path: url,
      });
    };

    // 监听路由变化事件
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      // 移除监听器以避免内存泄漏
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]); // 添加 router.events 作为依赖项

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
        id="google-analytics-script" // 添加 id 属性
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
