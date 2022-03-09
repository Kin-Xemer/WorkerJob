import {
  Box,
  Heading,
  Center,
  Stack,
  Pressable,
  HStack,
  Button,
  Flex,
  Spacer,
  VStack,
  IconButton,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import OptionsMenu from "react-native-option-menu";

const MoreIcon = <MaterialIcons name="more-vert" color={"black"} size={23} />;

const HeaderBar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Flex direction="row" ml={8} style={styles.headerBar}>
      <View style={styles.buttonBack}>
        <IconButton
          onPress={() => navigation.goBack()}
          icon={
            <Ionicons name="arrow-back-outline" color={"black"} size={30} />
          }
        />
      </View>
      <Spacer />
      <View style={styles.buttonMore}>
        <OptionsMenu
          customButton={MoreIcon}
          buttonStyle={{
            width: 32,
            height: 8,
            margin: 7.5,
            resizeMode: "contain",
          }}
          destructiveIndex={1}
          options={["Chia sẻ", "Báo cáo", "Gắn cờ"]}
          //   actions={[editPost, deletePost]}
        />
      </View>
    </Flex>
  );
};
const styles = StyleSheet.create({
  buttonBack: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 15,
    height: 45,
    width: 45,
  },
  headerBar: {
    width: screenWidth,
    marginTop: 25,
    zIndex: 1,
    position: "absolute",
    backgroundColor: "transparent",
  },
  buttonMore: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 15,
    height: 40,
    width: 40,
  },
});
export default HeaderBar;
