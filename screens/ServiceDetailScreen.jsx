import Header from "../components/ServiceDetailScreen/Header";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import Rating from "../components/ServiceDetailScreen/Feedback/Rating";
import ServiceDescription from "../components/ServiceDetailScreen/ServiceDescription";
import BottomButton from "../components/ServiceDetailScreen/BottomButton";
import { Pressable, Box, Button, Text, Flex, Spacer } from "native-base";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ServiceDetailScreen = (props) => {
  const route = useRoute();
  const [bestService, setBestService] = useState(route.params.bestService);
  return (
    <Flex direction="column" style={styles.container}>
      <StatusBar animated={true} backgroundColor="#f0f0f0" barStyle="default" />
      <Header bestService={bestService} />
      <ServiceDescription bestService={bestService} />
      <Rating bestService={bestService} />
      <Spacer />
      <BottomButton bestService={bestService} />
    </Flex>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default ServiceDetailScreen;
