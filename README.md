# graphql-yoga-deno

## Deno

https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-deno

`deno run --allow-net index.ts`

- cdn for imports, npm or not

```graphql
{
    hello
}
```
https://graphql-yoga-deno.deno.dev

## Error masking

https://the-guild.dev/graphql/yoga-server/docs/features/error-masking

### masked

```graphql
{
    throwErrorMasked
}
```

https://graphql-yoga-deno.deno.dev/?query=%7B%0A++++throwErrorMasked%0A%7D

### throw GraphQLError

```graphql
{
    throwErrorGraphql
}
```

https://graphql-yoga-deno.deno.dev/?query=%7B%0A++++throwErrorGraphql%0A%7D

## Subscriptions

https://the-guild.dev/graphql/yoga-server/docs/features/subscriptions

```graphql
subscription {
    countdown(from: 10)
}
```

https://graphql-yoga-deno.deno.dev/?query=subscription+%7B%0A++++countdown%28from%3A+10%29%0A%7D

## Defer and Stream

https://the-guild.dev/graphql/yoga-server/docs/features/defer-stream

```graphql
{
    hello
    alphabetStream @stream
    ...on Query @defer { deferSlowField(waitFor: 6000) }
    ...on Query @defer { deferFastField }
}
```

https://graphql-yoga-deno.deno.dev/?query=%7B%0A++++hello%0A++++alphabetStream+%40stream%0A++++...on+Query+%40defer+%7B+deferSlowField%28waitFor%3A+6000%29+%7D%0A++++...on+Query+%40defer+%7B+deferFastField+%7D%0A%7D

## Caching
- Global caching
- Session based caching
- TTL configuration
- Manual invalidation
- External cache (redis)
  https://the-guild.dev/graphql/yoga-server/docs/features/response-caching
```graphql
{
  ...on Query @defer { deferSlowField }
  ...on Query @defer { slowWithCache }
}
```
