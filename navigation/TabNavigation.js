import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import AuthHome from "../screens/Auth/AuthHome";
import Search from "../screens/Auth/Search";
import Notifications from "../screens/Auth/Notifications";
import Profile from "../screens/Auth/Profile";
import MessagesLink from "../components/MessagesLink";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({ initialRoute: { screen: initialRoute, navigationOptions: { ...customConfig } } });

export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(AuthHome, {
      title: "Home",
      headerRight: () => <MessagesLink />
    })
  },
  Search: {
    screen: stackFactory(Search, {
      title: "Search"
    })
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate("PhotoNavigation");
      }
    }
  },
  Notifications: {
    screen: stackFactory(Notifications, {
      title: "Notifications"
    })
  },
  Profile: {
    screen: stackFactory(Profile, {
      title: "Profile"
    })
  }
});
