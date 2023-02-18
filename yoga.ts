import {createSchema, createYoga} from 'https://cdn.jsdelivr.net/npm/graphql-yoga/+esm'
import {useDeferStream} from 'https://cdn.jsdelivr.net/npm/@graphql-yoga/plugin-defer-stream/+esm'
import {resolvers, typeDefs} from "./typedefsAndResolvers.ts";

export const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  plugins: [useDeferStream()],
  graphqlEndpoint: '/',
})
