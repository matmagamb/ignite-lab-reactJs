import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4olt3xs0fb101z4156r29gh/master',
    cache: new InMemoryCache()
})