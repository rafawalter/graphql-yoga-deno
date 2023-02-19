import {createSchema, createYoga} from 'https://cdn.jsdelivr.net/npm/graphql-yoga/+esm'
import {useDeferStream} from 'https://cdn.jsdelivr.net/npm/@graphql-yoga/plugin-defer-stream/+esm'
import {useResponseCache} from 'https://cdn.jsdelivr.net/npm/@graphql-yoga/plugin-response-cache/+esm'
import {resolvers, typeDefs} from "./typedefsAndResolvers.ts";

export const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: '/',
  plugins: [
    useDeferStream(),
    useResponseCache({
      session: () => null,
      ttl: 0,
      ttlPerSchemaCoordinate: {
        'Query.slowWithCache': 60_000,
      }
    })
  ],
})
