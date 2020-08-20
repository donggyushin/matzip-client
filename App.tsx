/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'

import MainStackNavigation from './navigations/MainStackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import React from 'react';
import {
StatusBar
} from 'react-native';
import store from './Store'

declare const global: { HermesInternal: null | {} };

const App = () => {


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Matzip />
    </Provider>

  );
};

const Matzip = () => {


  return <NavigationContainer>
    <MainStackNavigation />
  </NavigationContainer>
}


export default App;
