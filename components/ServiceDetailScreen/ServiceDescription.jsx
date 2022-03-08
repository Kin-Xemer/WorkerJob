import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import DividerFullWidth from "../DividerFullWidth";
const ServiceDescription = (props) => {
  const { bestService } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mô tả công việc: </Text>
      <ScrollView>
        <Text style={styles.content}>{bestService.description}</Text>
      </ScrollView>
      <DividerFullWidth />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 90,
    padding: 8,
    marginLeft: 32,
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
