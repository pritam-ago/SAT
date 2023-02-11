import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from "react-native";

import HomeWork from './ActivityScreens/HomeWork';
import Album from './ActivityScreens/Album';
import Circular from './ActivityScreens/Circular';
import Contact from './ActivityScreens/Contact';
import ExamSchedule from './ActivityScreens/ExamSchedule';
import Fees from './ActivityScreens/Fees';
import Messages from './ActivityScreens/Messages';
import OnlineClass from './ActivityScreens/OnlineClass';
import TimeTable from './ActivityScreens/TimeTable';
import VLC from './ActivityScreens/VLC';
import Activities from './Activities';
import Leave from "./ActivityScreens/Leave";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ActivitiesHomeScreen() {
  return (
      <Stack.Navigator initialRouteName = {Activities} screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}>
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="HomeWork" component={HomeWork} />
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="Circular" component={Circular} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ExamSchedule" component={ExamSchedule} />
        <Stack.Screen name="Fees" component={Fees} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="OnlineClass" component={OnlineClass} />
        <Stack.Screen name="TimeTable" component={TimeTable} />
        <Stack.Screen name="VLC" component={VLC} />
        <Stack.Screen name="Leave" component={Leave} />
      </Stack.Navigator>
  );
}

export default ActivitiesHomeScreen;