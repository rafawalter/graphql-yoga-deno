import {createSchema, createYoga} from 'https://cdn.skypack.dev/graphql-yoga?dts'
import {ThrowErrorResolver} from "./resolvers/throw-error.resolver.ts";

export const yoga = createYoga({

  schema: createSchema({
        typeDefs: /* GraphQL */ `
            type Query {
                hello: String!
                throwErrorGraphql: String!
                throwErrorMasked: String!
            }
        `,
      resolvers: {
        Query: {
          hello: () => 'Hello Deno!',
          throwErrorGraphql: ThrowErrorResolver.graphqlError,
          throwErrorMasked: ThrowErrorResolver.maskedError,
        },
      }
    })
})

