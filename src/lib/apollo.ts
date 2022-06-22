import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohw0oz0a4301z4541m8j8q/master',
  cache: new InMemoryCache()
})