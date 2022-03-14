import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import {
  Input,
  NativeBaseProvider,
  Center,
  Button,
  IconButton,
  Flex,
  TextArea,
  Stack,
  Spacer,
  Image,
  Divider,
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import { useNavigation, useRoute } from "@react-navigation/native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ViewRequestDetailSreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.data);
  const [bestService, setBestService] = useState(route.params.bestService);

  return (
    <View style={styles.container}>
      <Flex direction="row" style={styles.topButton}>
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
        <Spacer />
        <TouchableWithoutFeedback>
          <View style={styles.buttonStyle}>
            <Text style={styles.textPrice}>Quản lý lịch hẹn</Text>
          </View>
        </TouchableWithoutFeedback>
      </Flex>
      <View style={styles.headerInfor}>
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: "white",
          }}
        >
          Sửa đồ điện gia dụng
        </Text>
        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              color: "white",
            }}
          >
            Sửa chữa máy lạnh, tháo lắp vệ sinh
          </Text>
        </View>
      </View>
      <View style={styles.requiredInfor}>
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            color: "black",
          }}
        >
          Khi Thợ đến làm việc, bạn nên yêu cầu Thợ
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                color: "black",
              }}
            >
              Đưa ra Giấy xác nhận/ ứng dụng có xác nhận
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                color: "black",
              }}
            >
              {" "}
              đã tiêm ngừa Covid-19.
            </Text>
          </Text>
          <Text style={{ marginLeft: 10, marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                color: "black",
              }}
            >
              Tuân thủ 5K,
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                color: "black",
              }}
            >
              {" "}
              giữ khoảng cách, vệ sinh sạch sẽ khu vực làm việc để đảm bảo an
              toàn cho bạn và Thợ.
            </Text>
          </Text>
        </View>
      </View>

      <Flex style={styles.detailContainer}>
        <Flex direction="row" style={styles.workerLabel}>
          <View style={styles.iconStyle}>
            <Image
              size={10}
              resizeMode={"contain"}
              borderRadius={300}
              source={{
                uri: "https://i.pinimg.com/474x/8b/5f/c3/8b5fc3b2ca040e0fc20f1c8a19f6c282.jpg",
              }}
              alt="Alternate Text"
            />
          </View>
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>Thợ</Text>
            <Text style={{ fontFamily: "OpenSans-Bold" }}>
              Nguyễn Mạnh Kiên
            </Text>
            <TouchableWithoutFeedback>
              <View
                style={{
                  marginTop: 8,
                  width: 100,
                  borderRadius: 25,
                  borderWidth: 1,
                  alignItems: "center",
                  paddingVertical: 8,
                }}
              >
                <Text>LIÊN HỆ</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={{ marginTop: 10 }}>
              <DashedLine
                dashLength={3}
                dashThickness={1}
                dashColor="gray"
                dashStyle={{ borderRadius: 3 }}
                dashGap={3}
              />
            </View>
          </View>
        </Flex>

        <Flex direction="row" style={styles.timeLabel}>
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons
              name="calendar-clock"
              size={25}
              color="black"
            />
          </View>
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>
              Thời gian làm việc
            </Text>
            <Flex direction="row">
              <Text style={{ fontFamily: "OpenSans-Bold" }}>8/3/2022</Text>
              <Divider mx={4} orientation="vertical" bg="black" />
              <Text style={{ fontFamily: "OpenSans-Bold" }}>08:30</Text>
            </Flex>
            <View style={{ marginTop: 10 }}>
              <DashedLine
                dashLength={3}
                dashThickness={1}
                dashColor="gray"
                dashStyle={{ borderRadius: 3 }}
                dashGap={3}
              />
            </View>
          </View>
        </Flex>

        <Flex direction="row" style={styles.timeLabel}>
          <View style={styles.iconStyle}>
            <MaterialIcons name="location-on" size={25} color="black" />
          </View>
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>Địa điểm</Text>
            <Text style={{ fontFamily: "OpenSans-Bold" }}>
              453/15, Lê Văn Khương, Hiệp Thành, Quận 12
            </Text>
            <View style={{ marginTop: 10 }}>
              <DashedLine
                dashLength={3}
                dashThickness={1}
                dashColor="gray"
                dashStyle={{ borderRadius: 3 }}
                dashGap={3}
              />
            </View>
          </View>
        </Flex>

        <Flex direction="row" style={styles.timeLabel}>
          <View style={styles.iconStyle}>
            <FontAwesome5 name="money-bill-wave" size={25} color="black" />
          </View>
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>Báo giá</Text>
            <Text style={{ fontFamily: "OpenSans-Bold" }}>140.000 VNĐ</Text>
          </View>
        </Flex>
      </Flex>
      <View>
        <Divider bg="#f0f0f0" thickness="5" w={screenWidth + 50} ml="-4" />
        <View style={styles.noteStyle}>
          <Text style={{ fontFamily: "OpenSans-SemiBold" }}>Ghi chú</Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Dọn dẹp sạch sẽ sau khi dọn
          </Text>
        </View>
        <Divider bg="#f0f0f0" thickness="5" w={screenWidth + 50} ml="-4" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
  },
  topButton: {
    width: screenWidth,
    backgroundColor: "white",
    marginTop: 6,
    marginLeft: -16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
  },
  buttonStyle: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  textPrice: {
    fontFamily: "OpenSans-Bold",
    color: "black",
  },
  headerInfor: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#02b2b9",
  },
  requiredInfor: {
    borderRadius: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f2e3c2",
  },
  detailContainer: {
    borderRadius: 15,
    paddingTop: 16,
    paddingRight: 8,
  },
  workerLabel: {
    paddingBottom: 16,
    borderRadius: 15,
  },
  timeLabel: {
    paddingBottom: 16,
    borderRadius: 15,
  },
  iconStyle: {
    width: 48,
    height: 48,
  },
  noteStyle: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
  },
});
export default ViewRequestDetailSreen;
