import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "../screens/Auth/Search";
import AuthHome from "../screens/Auth/AuthHome";
import Notifications from "../screens/Auth/Notifications";
import Profile from "../screens/Auth/Profile";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    Notifications,
    Profile,
    Search
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigation);
