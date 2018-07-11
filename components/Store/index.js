import React from 'react';
import Navigator from '../navigation/Navigator';
import store from '../../store';
import client from '../../store/api';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

let Store = () =>
  <ApolloProvider client={client} >
    <Provider store={store} >
      <Navigator />
    </Provider>
  </ApolloProvider>

export default Store;
