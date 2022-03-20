import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
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
import LoginScreen from "react-native-login-screen";
const MoreScreen = (props) => {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%",
            height: 250,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLogin ? (
            <View style={{ width: 150, height: 150 }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
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
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 24,
                    color: "black",
                    fontFamily: "OpenSans-Bold",
                  }}
                >
                  Mạnh Kiên
                </Text>
                <View>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate("ProfileScreen");
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 8,
                        fontSize: 12,
                        color: "gray",
                        fontFamily: "OpenSans-Regular",
                      }}
                    >
                      Chỉnh sửa tài khoản
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          ) : (
            <View style={{ width: 150, height: 150 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("LoginScreenn");
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 100,
                      height: 100,
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
                  <Text
                    style={{
                      marginTop: 8,
                      fontSize: 24,
                      color: "black",
                      fontFamily: "OpenSans-Bold",
                    }}
                  >
                    Đăng nhập
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>

        <Divider thickness={5} mb={5} />
        <LabelSetting reasonText="Địa chỉ của tôi" />
        <LabelSetting reasonText="Đã lưu" />
        <Divider thickness={4} mb={5} mt={-4} />
        <LabelSetting reasonText="Liên hệ" />
        <LabelSetting reasonText="Phản hồi, báo cáo" />
        <LabelSetting reasonText="Câu hỏi thường gặp" />
        <LabelSetting reasonText="Cơ chế quản lý" />
        <LabelSetting reasonText="Chính sách bảo mật" />
        <LabelSetting reasonText="Điều khoản sử dụng" />
        <LabelSetting reasonText="Liên hệ" />
        <Flex direction="row">
          <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14 }}>
            Phiên bản ứng dụng
          </Text>
          <Spacer />
          <Text>1.0.0</Text>
        </Flex>
        <Divider my="4" thickness={5} />
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setShow(true);
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                fontSize: 15,
                paddingBottom: 16,
                color: "red",
              }}
            >
              Đăng xuất
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>

      <Modal isOpen={show} size="lg" onClose={() => setShow(false)}>
        <Modal.Content maxWidth="250">
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={{ fontSize: 20, fontFamily: "OpenSans-Bold" }}>
              Đăng xuất
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text>Bạn thực sự muốn đăng xuất?</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="rgb(2, 178, 185)"
                onPress={() => {
                  setShow(false);
                }}
              >
                Hủy
              </Button>

              <Button
                activeOpacity={1}
                bgColor="transparent"
                onPress={() => {
                  setShow(false);
                  navigation.navigate("LoginScreenn");
                }}
              >
                <Text style={{ fontFamily: "OpenSans-Bold", color: "red" }}>
                  Đồng ý
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default MoreScreen;
