// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homescreen from './screens/homescreen';
import secondpage from './screens/secondpage';
import ProductItem from './screens/ProductItem';
import CheckoutScreen from './screens/checkoutscreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homescreen">
        <Stack.Screen name="homescreen" component={homescreen} options={{ headerShown: false }} />
        <Stack.Screen name="secondpage" component={secondpage} options={{ headerShown: false }} />
        <Stack.Screen name="ProductItem" component={ProductItem} options={{ headerShown: false }} />
        <Stack.Screen name="Checkoutscreen" component={CheckoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileSettingsScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
