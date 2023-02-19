import {throwErrorGraphql, throwErrorMasked} from "./resolvers/throw-error.resolver.ts";
import {alphabetStream, deferFastField, deferSlowField} from "./resolvers/deferAndStream.resolver.ts";
import {countdown} from "./resolvers/countdown.resolver.ts";

export const typeDefs = /* GraphQL */ `
    type Query {
        hello: String!
        throwErrorGraphql: String!
        throwErrorMasked: String!
        alphabetStream: [String!]
        deferFastField: String!
        deferSlowField(waitFor: Int! = 5000): String!,
        slowWithCache: String!
    }
    type Subscription {
        countdown(from: Int!): Int!
    }
`

export const resolvers = {
  Query: {
    hello: () => 'Hello Deno!',
    throwErrorGraphql,
    throwErrorMasked,
    alphabetStream,
    deferFastField,
    deferSlowField,
    slowWithCache: deferSlowField,
  },
  Subscription: {
    countdown,
  }
}
