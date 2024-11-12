import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Profile from "./src/screens/profile";
import Professional from "./src/screens/professional";
import Education from "./src/screens/education";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const MyTabs = () => (
  <Tab.Navigator initialRouteName="Perfil">
    <Tab.Screen
      name="Profissional"
      component={Professional}
      options={{ tabBarIcon: () => <Ionicons name="briefcase-sharp" size={30} /> }}
    />
    <Tab.Screen
      name="Perfil"
      component={Profile}
      options={{ tabBarIcon: () => <Ionicons name="person" size={30} /> }}
    />
    <Tab.Screen
      name="Formação"
      component={Education}
      options={{ tabBarIcon: () => <Ionicons name="ribbon" size={30} /> }}
    />
  </Tab.Navigator>
);
