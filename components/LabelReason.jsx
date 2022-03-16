import { Divider, Button } from "native-base";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LabelReason = (props) => {
  const { reasonText } = props;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 16 }}>
          {reasonText}
        </Text>
        <Divider my="4" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textStyle: {
    color: "#02b2b9",
    textTransform: "uppercase",
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
  },
});
export default LabelReason;
