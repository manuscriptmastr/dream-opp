import React from 'react';
import Navigator from '../Navigator';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

let client = new ApolloClient({
  uri: "http://0.tcp.ngrok.io:15632/graphql"
});

let Store = () =>
  <ApolloProvider client={client} >
    <Navigator />
  </ApolloProvider>

export default Store;
