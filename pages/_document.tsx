import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="GraphQL Playground by create NextJS"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="font-body antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
