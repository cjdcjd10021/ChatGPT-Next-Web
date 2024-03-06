// 引入Head组件
import Head from 'next/head';
import { getClientConfig } from './config/client';
import { GoogleTagManager } from '@next/third-parties/google';
import { getServerSideConfig } from './config/server';

const serverConfig = getServerSideConfig();

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* 原有的meta标签、链接和脚本 */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="/serviceWorkerRegister.js" defer></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8339895143846620"
          crossOrigin="anonymous"></script>

        {/* 加入的Google Tag (gtag.js) 脚本 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQ27PZH0VM"></script>
        <script
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
      {/* 页面主体内容 */}
      <div>
        {children}
        {serverConfig?.isVercel && <SpeedInsights />}
        {serverConfig?.gtmId && <GoogleTagManager gtmId={serverConfig.gtmId} />}
      </div>
    </>
  );
}
