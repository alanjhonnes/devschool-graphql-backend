// The ApolloServer constructor requires two parameters: your schema

import { ApolloServer } from "apollo-server";
import { createGraphQLContext } from "./context";
import { resolvers } from "./resolvers";
import { loadTypedefs } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { mergeTypeDefs } from '@graphql-tools/merge';


async function app() {
  const graphqlDocuments = await loadTypedefs(['./src/**/*.graphql'], {
    loaders: [
      new GraphQLFileLoader()
    ]
  });
  const typeDefs = graphqlDocuments.map(source => source.rawSDL!);
  const mergedTypeDefs = mergeTypeDefs(typeDefs);
  // definition and your set of resolvers.
  const server = new ApolloServer({
    // schema: schema,
    context: createGraphQLContext,
    typeDefs: mergedTypeDefs,
    resolvers: resolvers,
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}



app();
