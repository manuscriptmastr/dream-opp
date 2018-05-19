import React from 'react';
import Router from '../Router/index';
import store from './../../store/index';
import { Provider } from 'react-redux';

let Store = () =>
  <Provider store={store} >
    <Router />
  </Provider>

export default Store;
