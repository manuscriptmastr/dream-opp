import React from 'react';
import Navigator from '../navigation/Navigator/index';
import store from '../../store/index';
import { Provider } from 'react-redux';

let Store = () =>
  <Provider store={store} >
    <Navigator />
  </Provider>

export default Store;
