import {
  GraphQLError
} from "https://cdn.skypack.dev/-/graphql@v16.6.0-LSwlwUw61uFtjUF6PMr3/dist=es2019,mode=imports/optimized/graphql.js";

export const throwErrorMasked = async () => {
  return await fetch('http://localhost:9876/does-not-exist')
    .then(res => res.text())
}
export const throwErrorGraphql = () => {
  throw new GraphQLError(`This is a custom GraphQL error`, {extensions: {msg: 'you can send aditional info using error etensions'}})
}
