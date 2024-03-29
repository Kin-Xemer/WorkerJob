import React from "react";
import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import RequestScreen from "./screens/RequestScreen";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import Home from "./screens/HomeScreen";
import ServicesRecommend from "./screens/ServicesRecommend";
import WorkerInformation from "./screens/WorkerInformation";
import RequestOrderScreen from "./screens/RequestOrderScreen";
import RequestDetailScreen from "./screens/RequestDetailScreen";
import ServiceDetailScreen from "./screens/ServiceDetailScreen";
import ViewRequestDetailSreen from "./screens/ViewRequestDetailSreen";
import UpdateRequestScreen from "./screens/UpdateRequestScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReasonScreen from "./screens/ReasonScreen";
import LoginScreenn from "./screens/LoginScreenn";
import CompleteScreen from "./screens/CompleteScreen";
import MoreScreen from "./screens/MoreScreen";
import NotiScreen from "./screens/NotiScreen";
import ResultSearchWorkerDetailScreen from "./screens/ResultSearchWorkerDetailScreen";
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
      <Stack.Screen name="RequestOrderScreen" component={RequestOrderScreen} />
      <Stack.Screen
        name="RequestDetailScreen"
        component={RequestDetailScreen}
      />
      <Stack.Screen
        name="ViewRequestDetailSreen"
        component={ViewRequestDetailSreen}
      />
      <Stack.Screen name="ReasonScreen" component={ReasonScreen} />
      <Stack.Screen
        name="ResultSearchWorkerDetailScreen"
        component={ResultSearchWorkerDetailScreen}
      />
      <Stack.Screen
        name="UpdateRequestScreen"
        component={UpdateRequestScreen}
      />
      <Stack.Screen name="WorkerInformation" component={WorkerInformation} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="LoginScreenn" component={LoginScreenn} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ServicesRecommend" component={ServicesRecommend} />
      <Stack.Screen name="Home" component={Home} />
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
        name="RequestScreen"
        component={RequestScreen}
        options={{
          tabBarLabel: "Lịch Hẹn",
          tabBarIcon: ({ color }) => (
            <Ionicons name="alarm-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NotiScreen"
        component={NotiScreen}
        options={{
          tabBarLabel: "Thông Báo",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
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
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
