import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import Details from './Screen/Details';


export default function App() {
  const stack = createStackNavigator();
  return (
   <NavigationContainer>
           <stack.Navigator>
               <stack.Screen name='Home' component={Home}/>
               <stack.Screen name='Details' component={Details}/>
           </stack.Navigator>
   </NavigationContainer>
  );
};