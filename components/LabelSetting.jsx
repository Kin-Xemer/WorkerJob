import { Divider, Flex, Spacer } from "native-base";
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
import { Entypo } from "@expo/vector-icons";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LabelSetting = (props) => {
  const { reasonText } = props;
  return (
    <TouchableOpacity>
      <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
        <Flex direction="row">
          <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14 }}>
            {reasonText}
          </Text>
          <Spacer />
          <Entypo name="chevron-right" size={12} color="black" />
        </Flex>
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
export default LabelSetting;
