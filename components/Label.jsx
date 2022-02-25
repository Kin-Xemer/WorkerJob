import { View, Text, Image, Divider, StyleSheet } from "react-native";
const Label = () => {
  return (
    <View style={styles.vertical}>
      <Divider orientation="vertical" />
      <Text>Right text</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  vertical: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
export default Label;
