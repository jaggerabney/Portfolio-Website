import { Html, Head, Main, NextScript } from "next/document";
import { SectionContextProvider } from "../store/section-context";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/styles/_app.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
