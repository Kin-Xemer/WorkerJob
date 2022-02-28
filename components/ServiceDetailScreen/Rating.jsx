import { Text, View, StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Rating = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Đánh giá</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 10,
    marginRight: "auto",
    width: screenWidth,
    paddingLeft: 8,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Rating;
