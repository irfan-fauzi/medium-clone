import { ApolloClient, InMemoryCache } from "@apollo/client";
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://n7b67.sse.codesandbox.io/graphql');
const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache()
})

export default client