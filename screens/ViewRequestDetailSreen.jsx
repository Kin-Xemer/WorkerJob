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
  Entypo,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getJobNameById } from "../Utils/jobName.js";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ViewRequestDetailSreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.data);
  const [requestFrom, setRequestFrom] = useState(route.params.requestFrom);
  const [bestService, setBestService] = useState(route.params.bestService);

  useEffect(() => {
    setData(route.params.data);
    setBestService(route.params.bestService);
  }, [route.params]);
  return (
    <View style={styles.container}>
      <Flex direction="row" style={styles.topButton}>
        <View style={styles.backIconButton}>
          {requestFrom == "list" ? (
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
          ) : (
            <IconButton
              onPress={() => navigation.navigate("Home")}
              icon={
                <Ionicons
                  name="chevron-back-circle-outline"
                  color={"black"}
                  size={23}
                />
              }
            />
          )}
        </View>
        <Spacer />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("RequestScreen", {
              data: data,
              bestService: bestService,
              requestFrom: requestFrom,
            });
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={styles.textPrice}>Quản lý lịch hẹn</Text>
          </View>
        </TouchableWithoutFeedback>
      </Flex>
      <View style={styles.headerInfor}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "OpenSans-Regular",
            color: "white",
          }}
        >
          {getJobNameById(bestService.jobId)}
        </Text>
        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "OpenSans-Bold",
              color: "white",
            }}
          >
            {bestService.serviceName}
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
          <Flex direction="row">
            <Entypo name="check" size={24} color="#4bb543" />
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
          </Flex>
          <Flex direction="row" style={{ marginTop: 10 }}>
            <Entypo name="check" size={24} color="#4bb543" />
            <Text style={{ marginLeft: 10 }}>
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
          </Flex>
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
              {bestService.workerName}
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
              <Text style={{ fontFamily: "OpenSans-Bold" }}>
                {data.date.day}/{data.date.month}/{data.date.year}
              </Text>
              <Divider mx={4} orientation="vertical" bg="black" />
              <Text style={{ fontFamily: "OpenSans-Bold" }}>
                {data.date.hour}:{data.date.minute}
              </Text>
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
            <Text style={{ fontFamily: "OpenSans-Bold" }}>{data.location}</Text>
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
            {bestService.price === 0 ? (
              <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 18 }}>
                Thương Lượng
              </Text>
            ) : (
              <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 18 }}>
                {bestService.price / 1000}.000 VNĐ
              </Text>
            )}
          </View>
        </Flex>
      </Flex>
      <View>
        <Divider bg="#f0f0f0" thickness="5" w={screenWidth + 50} ml="-4" />
        {data.note !== "" ? (
          <View>
            <View style={styles.noteStyle}>
              <Text style={{ fontFamily: "OpenSans-SemiBold" }}>Ghi chú</Text>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>
                {data.note}
              </Text>
            </View>
            <Divider bg="#f0f0f0" thickness="5" w={screenWidth + 50} ml="-4" />
          </View>
        ) : (
          <Text> </Text>
        )}
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("UpdateRequestScreen", {
            data: data,
            bestService: bestService,
          });
        }}
      >
        <View style={styles.touchOption}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>
            Chỉnh sửa lịch hẹn
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Divider bg="#f0f0f0" thickness="1" />
      <TouchableWithoutFeedback>
        <View style={styles.touchOption}>
          <Text style={{ fontFamily: "OpenSans-Bold", color: "red" }}>
            Huỷ lịch hẹn
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
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
  touchOption: {
    paddingVertical: 10,
  },
});
export default ViewRequestDetailSreen;
