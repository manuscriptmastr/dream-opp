import React from 'react';
import Navigator from '../Navigator';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import config from '../../config.json';
const { API_URL } = config;

let client = new ApolloClient({
  uri: `${API_URL}/graphql`
});

let Store = () =>
  <ApolloProvider client={client} >
    <Navigator />
  </ApolloProvider>

export default Store;
