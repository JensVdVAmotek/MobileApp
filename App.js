import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homescreen from './screens/homescreen';
import secondpage from './screens/secondpage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="homescreen" component={homescreen} options={{ headerShown: false }} />
        <Stack.Screen name="secondpage" component={secondpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
