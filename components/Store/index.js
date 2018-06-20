import React from 'react';
import Navigator from '../navigation/Navigator';
import store from '../../store';
import { Provider } from 'react-redux';

let Store = () =>
  <Provider store={store} >
    <Navigator />
  </Provider>

export default Store;
