import { Html, Head, Main, NextScript } from 'next/document';

// This file exists to satisfy the build requirement
// The actual application uses the App Router in src/app
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}