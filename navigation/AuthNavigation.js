import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Signup from "../screens/Auth/Signup";

const AuthNavigation = createStackNavigator({
  Signup
});

export default createAppContainer(AuthNavigation);
