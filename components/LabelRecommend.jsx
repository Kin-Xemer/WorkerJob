import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LabelRecommend = (props) => {
  const { recommendText } = props;
  return (
    <View width={screenWidth} style={styles.container}>
      <Text style={styles.textStyle}>{recommendText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    paddingTop: 20,
    maxWidth: "100%",
    marginLeft: 8,
  },
  textStyle: {
    color: "#02b2b9",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default LabelRecommend;
