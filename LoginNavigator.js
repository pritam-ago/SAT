import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from "react-native";

import DrawerNavigator from "./DrawerNavigator";
import LoginScreen from "../screens/LoginScreen";
import SampleScreen from "../screens/SampleScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreens" component={DrawerNavigator} />
        <Stack.Screen name="Logout" component={SampleScreen} />
      </Stack.Navigator>
  );
}

export default LoginNavigator;