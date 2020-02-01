import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import Restaurants from "../screens/Restaurants";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import StackAccount from "./StackAccount";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Inicio",
      tabBarIcon: ({ tintColor }) => <Entypo name="home" color={tintColor} size={25} />
    }
  },
  Restaurants: {
    screen: Restaurants,
    navigationOptions: {
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="restaurant" color={tintColor} size={25} />
      }
  },
  Account: {
    screen: StackAccount,
    navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="account-circle" color={tintColor} size={25} />
      }
  }
},{
    initialRouteName:'Account',
    tabBarOptions:{
        activeTintColor:'#4567ff',
        inactiveTintColor:'#444'
    }
    
});

export default createAppContainer(TabNavigator);
