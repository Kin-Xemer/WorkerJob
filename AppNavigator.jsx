import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Cart from "./screens/Cart";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import Home from "./screens/HomeScreen";
import ServicesRecommend from "./screens/ServicesRecommend";
import WorkerInformation from "./screens/WorkerInformation";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      labled={true}
      activeColor={"#02b2b9"}
      shifting={false}
      initialRouteName="HomeScreen"
      barStyle={{ backgroundColor: "#fff", paddingTop: 0, paddingBottom: 0 }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang Chủ",
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={Cart}
        options={{
          tabBarLabel: "Lịch Hẹn",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-clock-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrdersScreen}
        options={{
          tabBarLabel: "Thông Báo",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: "Thêm",
          tabBarIcon: ({ color }) => (
            <Feather name="more-horizontal" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: "horizontal",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ServicesRecommend" component={ServicesRecommend} />
      <Stack.Screen name="WorkerInformation" component={WorkerInformation} />
    </Stack.Navigator>
  );
};

const CartScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

const OrdersScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={Cart} />
    </Stack.Navigator>
  );
};
const SettingScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Cart} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
export default AppNavigator;
