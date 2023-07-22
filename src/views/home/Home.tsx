import React from 'react';

import {
    Button,
  View,
} from 'react-native';

import Products from './Products';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Checkout: undefined;
  };
type Props = StackScreenProps<RootStackParamList, 'Checkout'>;


function HomeScreen(props: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Products />
            <Button title="Go to Checkout" onPress={() => props.navigation.navigate('Checkout')} />
        </View>
    );
}

export default HomeScreen;