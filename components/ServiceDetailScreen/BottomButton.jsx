import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const BottomButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupButton}>
        <TouchableWithoutFeedback>
          <View backgroundColor="#FFC900" style={styles.buttonStyle}>
            <Ionicons
              name="chatbubbles"
              size={18}
              color="black"
              style={{ marginRight: 4, marginTop: 2 }}
            />
            <Text>CHAT NGAY</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View backgroundColor="#02b2b9" style={styles.buttonStyle}>
            <Text style={styles.textPrice}>LẤY BÁO GIÁ</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    height: screenHeight * 0.095,
    width: screenWidth,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  groupButton: {
    flexDirection: "row",
  },
  buttonStyle: {
    flexDirection: "row",
    borderRadius: 14,
    height: 42,
    width: screenWidth * 0.45,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textPrice: {
    fontWeight: "bold",
    color: "white",
  },
});
export default BottomButton;
