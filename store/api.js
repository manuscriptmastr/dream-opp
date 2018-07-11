import ApolloClient from 'apollo-boost';

let client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

export default client;