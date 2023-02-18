import {createSchema, createYoga} from 'https://cdn.skypack.dev/graphql-yoga?dts'
import {countdown} from "./resolvers/countdown.resolver.ts";
import {throwErrorGraphql, throwErrorMasked} from "./resolvers/throw-error.resolver.ts";

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
        throwErrorGraphql,
        throwErrorMasked,
      },
      Subscription: {
        countdown,
      }
    }
  })
})

