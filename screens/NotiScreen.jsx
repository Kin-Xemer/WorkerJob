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
const NotiScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "OpenSans-Bold", fontSize: 24, marginBottom: 25 }}
      >
        Thông báo
      </Text>
      <Text style={{ fontFamily: "OpenSans-Bold", marginBottom: 15 }}>Mới</Text>

      <Flex
        backgroundColor="#e8fafa"
        direction="row"
        style={styles.workerLabel}
      >
        <View style={styles.iconStyle}>
          <Image
            size={10}
            resizeMode={"contain"}
            borderRadius={300}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1154/1154466.png",
            }}
            alt="Alternate Text"
          />
        </View>
        <View style={{ marginLeft: 8, flex: 1, justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>
            Đặt lịch thành công
          </Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Thợ đã nhận được yêu cầu của bạn, đợi xíu nhé.
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 13,
              color: "gray",
            }}
          >
            Vừa xong.
          </Text>
        </View>
      </Flex>

      <Flex
        backgroundColor="#e8fafa"
        direction="row"
        style={styles.workerLabel}
      >
        <View style={styles.iconStyle}>
          <Image
            size={10}
            resizeMode={"contain"}
            borderRadius={300}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1154/1154468.png",
            }}
            alt="Alternate Text"
          />
        </View>
        <View style={{ marginLeft: 8, flex: 1, justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Hủy lịch hẹn</Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Bạn vừa mới hủy lịch hẹn thành công.
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 13,
              color: "gray",
            }}
          >
            Hôm qua lúc 16:02
          </Text>
        </View>
      </Flex>

      <Flex direction="row" style={styles.workerLabel}>
        <View style={styles.iconStyle}>
          <Image
            size={10}
            resizeMode={"contain"}
            borderRadius={300}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
            }}
            alt="Alternate Text"
          />
        </View>
        <View style={{ marginLeft: 8, flex: 1, justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Tin nhắn mới</Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Bạn ơi mình sắp tới rồi
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 13,
              color: "gray",
            }}
          >
            T4 lúc 12:09
          </Text>
        </View>
      </Flex>

      <Flex direction="row" style={styles.workerLabel}>
        <View style={styles.iconStyle}>
          <Image
            size={10}
            resizeMode={"contain"}
            borderRadius={300}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
            }}
            alt="Alternate Text"
          />
        </View>
        <View style={{ marginLeft: 8, flex: 1, justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>
            Đặt lịch thành công
          </Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Thợ đã nhận được yêu cầu của bạn, bạn đợi xíu nhé.
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 13,
              color: "gray",
            }}
          >
            T4 lúc 12:09
          </Text>
        </View>
      </Flex>

      <Flex
        backgroundColor="#e8fafa"
        direction="row"
        style={styles.workerLabel}
      >
        <View style={styles.iconStyle}>
          <Image
            size={10}
            resizeMode={"contain"}
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/873/premium/873490.png?token=exp=1647500745~hmac=5a3bbc04f079d781cd3db2a0682501c1",
            }}
            alt="Alternate Text"
          />
        </View>
        <View style={{ marginLeft: 8, flex: 1, justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>
            Đăng ký thành công
          </Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Chào mừng bạn đến với WorkerJob
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans-Regular",
              fontSize: 13,
              color: "gray",
            }}
          >
            T2 lúc 10:02
          </Text>
        </View>
      </Flex>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 16,
  },
  workerLabel: {
    marginHorizontal: -16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default NotiScreen;
