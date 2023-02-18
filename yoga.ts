// import {createSchema, createYoga} from 'https://cdn.skypack.dev/graphql-yoga?dts'
import {createSchema, createYoga} from 'https://cdn.jsdelivr.net/npm/graphql-yoga/+esm'
import {useDeferStream} from 'https://cdn.jsdelivr.net/npm/@graphql-yoga/plugin-defer-stream/+esm'
import {countdown} from "./resolvers/countdown.resolver.ts";
import {throwErrorGraphql, throwErrorMasked} from "./resolvers/throw-error.resolver.ts";
import {deferFastField, deferSlowField} from "./resolvers/deferAndStream.resolver.ts";

export const yoga = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */ `
            type Query {
                hello: String!
                throwErrorGraphql: String!
                throwErrorMasked: String!
                alphabetStream: [String!]
                deferFastField: String!
                deferSlowField(waitFor: Int! = 5000): String!
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
        // alphabetStream,
        deferFastField,
        deferSlowField,
      },
      Subscription: {
        countdown,
      }
    }
    }),
  plugins: [useDeferStream()],
})
