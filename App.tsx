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
import rootReducer from './src/redux/Reducer';
import createSagaMiddleware from 'redux-saga'
import CustomStore from './src/redux/CustomStore';
import CheckoutScreen from './src/views/checkout/Checkout';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const sagaMiddleware = createSagaMiddleware();
  const store = new CustomStore(rootReducer, sagaMiddleware);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
