import React from "react";
import { StyleSheet } from "react-native";
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
import ServiceDetailScreen from "./screens/ServiceDetailScreen";
import SearchScreen from "./screens/SearchScreen";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: "horizontal",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="TabNaviHome" component={TabNavigator} />
      <Stack.Screen
        name="ServiceDetailScreen"
        component={ServiceDetailScreen}
      />
      <Stack.Screen name="WorkerInformation" component={WorkerInformation} />
    </Stack.Navigator>
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
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ServicesRecommend" component={ServicesRecommend} />
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
const TabNavigator = () => {
  return (
    <Tab.Navigator
      labled={true}
      activeColor={"#02b2b9"}
      shifting={false}
      initialRouteName="HomeScreen"
      barStyle={{ backgroundColor: "white", paddingTop: 0, paddingBottom: 0 }}
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
            <Ionicons name="home-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={Cart}
        options={{
          tabBarLabel: "Lịch Hẹn",
          tabBarIcon: ({ color }) => (
            <Ionicons name="alarm-outline" color={color} size={26} />
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
const SettingScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Cart} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
