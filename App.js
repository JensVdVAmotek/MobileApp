// App.js
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homescreen from './screens/homescreen';
import secondpage from './screens/secondpage';
import ProductItem from './screens/ProductItem';
import CheckoutScreen from './screens/checkoutscreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in when the app starts
    const checkLoggedIn = async () => {
      try {
        const loggedInStatus = await AsyncStorage.getItem('loggedIn');
        if (loggedInStatus === 'true') {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error('Error retrieving login status:', error);
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={loggedIn ? 'Profile' : 'homescreen'}>
          <Stack.Screen name="secondpage" component={secondpage} options={{ headerShown: false }} />
          <Stack.Screen name="homescreen" component={homescreen} options={{ headerShown: false }} />
          <Stack.Screen name="ProductItem" component={ProductItem} options={{ headerShown: false }} />
          <Stack.Screen name="Checkoutscreen" component={CheckoutScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" options={{ headerShown: false }}>
            {props => <ProfileSettingsScreen {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <LoginScreen {...props} setLoggedIn={setLoggedIn} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
