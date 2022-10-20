import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Playground = dynamic(() => import('@/components/Playground'));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GraphQL Playground</title>
        <link
          rel="shortcut icon"
          href="//raw.githubusercontent.com/graphql/graphql-playground/main/packages/graphql-playground-electron/static/icons/icon.ico"
        />
      </Head>
      <Playground />
    </>
  );
};

export default Home;
