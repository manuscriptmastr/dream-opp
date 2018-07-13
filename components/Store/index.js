import React from 'react';
import Navigator from '../navigation/Navigator';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

let client = new ApolloClient({
  uri: "http://0.tcp.ngrok.io:12186/graphql"
});

let Store = () =>
  <ApolloProvider client={client} >
    <Navigator />
  </ApolloProvider>

export default Store;
