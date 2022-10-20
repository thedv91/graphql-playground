import GraphiQL from 'graphiql';

type Props = {
  url?: string;
};
const GraphiQLComponent: React.FC<Props> = ({ url }) => {
  return (
    <GraphiQL
      fetcher={async (graphQLParams) => {
        const data = await fetch(
          url ?? 'https://swapi-graphql.netlify.app/.netlify/functions/index',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphQLParams),
          },
        );
        return data.json().catch(() => data.text());
      }}
    />
  );
};

export default GraphiQLComponent;
