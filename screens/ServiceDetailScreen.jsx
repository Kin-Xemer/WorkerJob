import Header from "../components/ServiceDetailScreen/Header";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import Rating from "../components/ServiceDetailScreen/Feedback/Rating";
import ServiceDescription from "../components/ServiceDetailScreen/ServiceDescription";
import BottomButton from "../components/ServiceDetailScreen/BottomButton";
import { Pressable, Box, Button, Text, Flex, Spacer } from "native-base";
import { StatusBar } from "expo-status-bar";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ServiceDetailScreen = (props) => {
  return (
    <Flex direction="column" style={styles.container}>
      <StatusBar animated={true} backgroundColor="#f0f0f0" barStyle="default" />
      <Header />
      <ServiceDescription />
      <Rating />
      <Spacer />
      <BottomButton style={styles.bottomButton} />
    </Flex>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default ServiceDetailScreen;
