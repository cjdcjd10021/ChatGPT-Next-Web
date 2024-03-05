// 如果你使用的是传统的 pages 目录，这个文件应该放在 pages/_document.tsx
// 如果你的项目采用的是 Next.js 的 App Directory 特性，这个文件应该放在 app/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 其他你可能需要的头部元素 */}
          {/* Google AdSense 脚本 */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8339895143846620"
            crossOrigin="anonymous"
          ></script>
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

