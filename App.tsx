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

import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { RootReducerType } from './Store'

import ErrorModal from './components/ErrorModal';
import MainStackNavigation from './navigations/MainStackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {
  StatusBar
} from 'react-native';
import { deleteError } from './actions/ErrorReducerActions';

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

  const ErrorReducer = useSelector((state: RootReducerType) => state.ErrorReducer)
  const dispatch = useDispatch()

  const makeErrorWhiteSpaceInErrorReducer = () => {
    dispatch(deleteError())
  }

  return <NavigationContainer>
    <MainStackNavigation />
    <ErrorModal closeModal={makeErrorWhiteSpaceInErrorReducer} errorMessage={ErrorReducer.error} visible={ErrorReducer.error ? true : false} />
  </NavigationContainer>
}


export default App;
