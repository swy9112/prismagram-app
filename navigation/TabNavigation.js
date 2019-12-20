import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Auth/Home";
import Search from "../screens/Auth/Search";
import Notifications from "../screens/Auth/Notifications";
import Profile from "../screens/Auth/Profile";

export default createBottomTabNavigator({
  Home,
  Search,
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate("PhotoNavigation");
      }
    }
  },
  Notifications,
  Profile
});
