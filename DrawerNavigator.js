import React, {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
    render()
    {
       return (
        <Drawer.Navigator screenOptions={{headerShown:true}}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    ); 
    }
    
};
