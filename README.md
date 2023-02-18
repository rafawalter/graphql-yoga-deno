# graphql-yoga-deno

## Deno

https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-deno

`deno run --allow-net index.ts`

- imports using cdn

```graphql
{
    hello
}
```

## Error masking

https://the-guild.dev/graphql/yoga-server/docs/features/error-masking

### masked

```graphql
{
    throwErrorMasked
}
```

### throw GraphQLError

```graphql
{
    throwErrorGraphql
}
```

## Subscriptions

https://the-guild.dev/graphql/yoga-server/docs/features/subscriptions

```graphql
subscription {
    countdown(from: 10)
}
```

## Defer and Stream

https://the-guild.dev/graphql/yoga-server/docs/features/defer-stream

```graphql
{
    alphabetStream @stream
    ...on Query @defer { deferSlowField(waitFor: 6000) }
    ...on Query @defer { deferFastField }
    hello
}
```
