import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import DividerFullWidth from "../DividerFullWidth";
const ServiceDescription = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mô tả công việc</Text>
      <ScrollView>
        <Text style={styles.content}>Sửa chữa, rửa máy lạnh</Text>
      </ScrollView>
      <DividerFullWidth />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 90,
    padding: 8,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  header: {
    paddingTop: 8,
    fontWeight: "bold",
    fontSize: 15,
  },
  content: {
    paddingTop: 4,
    fontSize: 15,
    paddingBottom: 5,
  },
});
export default ServiceDescription;
