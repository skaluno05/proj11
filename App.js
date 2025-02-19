import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação das telas
import Home from "./src/screens/Home.js";
import Likes from "./src/screens/Likes.js";
import Search from "./src/screens/Search.js";

const Stack = createNativeStackNavigator()

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={ Home }/>
    </Stack.Navigator>
  </NavigationContainer>
}
