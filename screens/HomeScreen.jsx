import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import SearchField from "../components/SearchField";
import Servies from "../components/Services";
import DividerBar from "../components/DividerBar";
import BestServices from "../components/BestServices";
import ListBestServies from "../components/ListBestServies";
const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <SearchField />
        <DividerBar dividerName="Dịch vụ" />
        <Servies />
        <DividerBar dividerName="Dịch vụ nổi bật" />
        <ListBestServies />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "transparent",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
