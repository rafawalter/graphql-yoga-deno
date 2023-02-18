import {createSchema, createYoga} from 'https://cdn.skypack.dev/graphql-yoga?dts'
import {ThrowErrorResolver} from "./resolvers/throw-error.resolver.ts";
import {countdown} from "./resolvers/countdown.resolver.ts";

export const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
        throwErrorGraphql: String!
        throwErrorMasked: String!
      }
      type Subscription {
        countdown(from: Int!): Int!
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello Deno!',
        throwErrorGraphql: ThrowErrorResolver.throwErrorGraphql,
        throwErrorMasked: ThrowErrorResolver.throwErrorMasked,
      },
      Subscription: {
        countdown,
      }
    }
  })
})

