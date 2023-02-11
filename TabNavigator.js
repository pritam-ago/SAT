import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import SampleScreen from "../screens/SampleScreen";
import ActivitiesHomeScreen from "../screens/ActivitiesHomeScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "HomeScreen") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "ActivitiesHome") {
                        iconName = focused ? "book" : "book-outline";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={RFValue(25)}
                            color={color}
                            style={styles.icons}
                        />
                    );
                }
            })}
            activeColor={"#F2B035"}
            inactiveColor={"#F2D6A2"}
        >
            
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name="ActivitiesHome" component={ActivitiesHomeScreen} options={{headerShown:false}}/>

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#035AA6",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30),
        marginLeft : RFValue(10),
        marginTop : RFValue(-5)
    }
});

export default TabNavigator;