import Header from "../components/ServiceDetailScreen/Header";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import Rating from "../components/ServiceDetailScreen/Rating";

const ServiceDetailScreen = (props) => {
  return (
    <View>
      <Header />
      <Rating />
    </View>
  );
};
export default ServiceDetailScreen;
