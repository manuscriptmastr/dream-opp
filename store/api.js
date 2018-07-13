import ApolloClient from 'apollo-boost';
import defaults from './initial'

let client = new ApolloClient({
  uri: "http://0.tcp.ngrok.io:12186/graphql",
  clientState: {
    defaults
  }
});

export default client;