/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform} from 'react-native';
import Login from './src/guies/components/auth/Login';
import allReducers from './src/guies/reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Login/>
      </Provider>
    );
  }
}
