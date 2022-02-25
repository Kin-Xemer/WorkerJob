import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { LogBox } from "react-native";
import { NativeBaseProvider } from "native-base";
import AppNavigator from "./AppNavigator";
LogBox.ignoreLogs(["NativeBase:"]);
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#fff" barStyle="default" />
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
