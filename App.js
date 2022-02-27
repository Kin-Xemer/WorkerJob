import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
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
