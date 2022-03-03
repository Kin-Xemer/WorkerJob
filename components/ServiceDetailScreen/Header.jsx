import { View, StyleSheet, Dimensions, Alert } from "react-native";
import { Flex, IconButton, Text, Divider } from "native-base";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DividerFullWidth from "../DividerFullWidth";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backIconButton}>
        <IconButton
          onPress={() => navigation.goBack()}
          icon={
            <Ionicons
              name="chevron-back-circle-outline"
              color={"black"}
              size={23}
            />
          }
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Sửa chữa máy lạnh điện lạnh</Text>
      </View>
      <Flex direction="row" paddingTop={2}>
        <Text
          color="gray.600"
          fontWeight="400"
          onPress={() => {
            Alert.alert("pressed");
          }}
        >
          Nguyễn Mạnh Kiên
        </Text>
        <MaterialIcons name="navigate-next" size={18} color="gray" />
      </Flex>
      <Flex direction="row" paddingTop={1}>
        <Text
          width={screenWidth / 2.5}
          color="black"
          fontWeight="bold"
          fontSize="24"
          onPress={() => {
            Alert.alert("pressed");
          }}
        >
          250.000 VNĐ
        </Text>
        <Divider
          mt={1}
          h={6}
          bg="coolGray.400"
          orientation="vertical"
          mx="3"
          thickness="2"
        />
        <Flex direction="row">
          <Text mt={1} fontSize={18} width={screenWidth / 4}>
            {" "}
            <AntDesign name="star" size={18} color="#02b2b9" /> 4.86/5
          </Text>
          <View style={styles.heartStyle}>
            <AntDesign
              styles={{ alignItems: "flex-end" }}
              name="hearto"
              size={18}
              color="black"
            />
          </View>
        </Flex>
      </Flex>
      <DividerFullWidth />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "auto",
    width: screenWidth,
    paddingLeft: 8,
    paddingTop: 30,
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    height: 40,
    width: 40,
    marginTop: 8,
  },
  textStyle: {
    paddingTop: 12,
    fontWeight: "800",
    fontSize: 24,
  },
  heartStyle: {
    width: screenWidth / 4,
    marginTop: 7,
    paddingLeft: 8,
    alignItems: "flex-end",
  },
});
export default Header;
