import Script from 'next/script';

const Playground = () => {
  return (
    <>
      <Script
        id="graphql-playground"
        src="//cdn.jsdelivr.net/npm/graphql-playground-react/build/static/js/middleware.js"
        onReady={() => {
          (window as any).GraphQLPlayground?.init(
            document.getElementById('playground'),
            {
              endpoint:
                'https://swapi-graphql.netlify.app/.netlify/functions/index',
            },
          );
        }}
      />
      <div className="overflow-hidden h-screen w-screen" id="playground" />
    </>
  );
};

export default Playground;
