/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home/Home';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/redux/reducer';
import createSagaMiddleware from 'redux-saga'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware)
  )

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Magazine Siará" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
