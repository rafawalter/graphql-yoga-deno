import {createSchema, createYoga} from 'https://cdn.skypack.dev/graphql-yoga?dts'
import {ThrowErrorResolver} from "./resolvers/throw-error.resolver.ts";

export const yoga = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */ `
            type Query {
                hello: String!
                throwMaskedError: String!
                throwGraphQLError: String!
            }
        `,
      resolvers: {
        Query: {
          hello: () => 'Hello Deno!',
          throwMaskedError: ThrowErrorResolver.throwMaskedError,
          throwGraphQLError: ThrowErrorResolver.throwGraphQLError,
        }
      }
    })
})

