/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PokemonDetailsScreen from './screens/PokemonDetailsScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={PokemonDetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App;
