import React from 'react';

import {
  View,
} from 'react-native';

import Products from './Products';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Products />
        </View>
    );
}

export default HomeScreen;