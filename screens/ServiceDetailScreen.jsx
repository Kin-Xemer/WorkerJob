import Header from "../components/ServiceDetailScreen/Header";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import Rating from "../components/ServiceDetailScreen/Feedback/Rating";
import ServiceDescription from "../components/ServiceDetailScreen/ServiceDescription";
import BottomButton from "../components/ServiceDetailScreen/BottomButton";
import { Pressable, Box, Button, Text, Flex, Spacer } from "native-base";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ServiceDetailScreen = (props) => {
  return (
    <Flex direction="column" style={styles.container}>
      <Header />
      <ServiceDescription />
      <Rating />
      <BottomButton />
    </Flex>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: screenHeight,
  },
});
export default ServiceDetailScreen;
