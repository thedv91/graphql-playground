import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'graphiql/graphiql.min.css';

const GraphiQL = dynamic(() => import('@/components/GraphiQL'), {
  ssr: false,
});

const Home: NextPage = () => {
  const [url, setUrl] = useState(
    'https://swapi-graphql.netlify.app/.netlify/functions/index',
  );
  return (
    <>
      <Head>
        <title>GraphiQL</title>
        <link
          rel="shortcut icon"
          href="//graphql.org/favicon.ico"
          // href="//cdn.jsdelivr.net/npm/graphql-playground-react/build/favicon.png"
        />
      </Head>
      <div className="container mx-auto my-4 flex gap-4 items-center">
        <span>URL</span>
        <input
          className="px-2 py-1 border w-full border-gray-300 rounded-md"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </div>
      <GraphiQL url={url} />
    </>
  );
};

export default Home;
