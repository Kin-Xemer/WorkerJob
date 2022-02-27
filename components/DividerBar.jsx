import { View, Text, StyleSheet } from "react-native";
import { Divider } from "native-base";
const DividerBar = (props) => {
  const { dividerName } = props;
  return (
    <View style={styles.verticalDevider}>
      <Divider bg="#02b2b9" thickness="5" mx="1" orientation="vertical" />
      <Text style={styles.textStyle}>{dividerName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  verticalDevider: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    flex: 1,
    height: 30,
    marginTop: 20,
    marginLeft: 16,
  },
  textStyle: {
    paddingTop: 4,
    paddingLeft: 1,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default DividerBar;
