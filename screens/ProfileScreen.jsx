import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  VStack,
  FormControl,
  Input,
  IconButton,
  Flex,
  TextArea,
  Spacer,
  Button,
  Modal,
  HStack,
  Image,
  NativeBaseProvider,
  Radio,
  Divider,
} from "native-base";
import LabelSetting from "../components/LabelSetting";
import Finder from "../assets/user.png";
import { Entypo, AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import LoginScreen from "react-native-login-screen";
const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (route.params !== undefined) {
      setIsLogin(route.params.isLogin);
    }
  }, [route.params]);
  return (
    <View
      style={{
        paddingTop: 40,
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "white",
      }}
    >
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
      <View
        style={{
          width: "100%",
          height: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 150, height: 150 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "#f0f0f0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Image
                alt="avata"
                source={Finder}
                style={{ width: 70, height: 70 }}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <Flex direction="row">
            <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 18 }}>
              Họ và tên
            </Text>
            <Spacer />
            <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 18 }}>
              Nguyễn Mạnh Kiên
            </Text>
            <Entypo name="chevron-right" size={12} color="black" />
          </Flex>
          <Divider my="4" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <Flex direction="row">
            <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 18 }}>
              Số điện thoại
            </Text>
            <Spacer />
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                color: "silver",
                fontSize: 18,
              }}
            >
              ************02
            </Text>
          </Flex>
          <Divider my="4" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <Flex direction="row">
            <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 18 }}>
              Email
            </Text>
            <Spacer />
            <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 18 }}>
              kienchothiec1@gmail.com
            </Text>
            <Entypo name="chevron-right" size={12} color="black" />
          </Flex>
          <Divider my="4" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <Flex direction="row">
            <AntDesign name="facebook-square" size={24} color="#3b5998" />
            <Text
              style={{
                marginLeft: 4,
                fontFamily: "OpenSans-Bold",
                fontSize: 18,
              }}
            >
              Facebook
            </Text>
            <Spacer />
            <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 18 }}>
              Chưa liên kết
            </Text>
          </Flex>
          <Divider my="4" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <Flex direction="row">
            <FontAwesome name="google-plus-square" size={24} color="#DB4437" />
            <Text
              style={{
                marginLeft: 4,
                fontFamily: "OpenSans-Bold",
                fontSize: 18,
              }}
            >
              Google
            </Text>
            <Spacer />
            <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 18 }}>
              Mạnh Kiên
            </Text>
          </Flex>
          <Divider my="4" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
  },
});
export default ProfileScreen;
