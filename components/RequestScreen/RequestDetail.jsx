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
import { getJobNameById } from "./jobName.js";
import DashedLine from "react-native-dashed-line";
import { useNavigation, useRoute } from "@react-navigation/native";
import OptionsMenu from "react-native-option-menu";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RequestDetail = (props) => {
  const navigation = useNavigation();
  let {
    bestService,
    data,
    setShowModalPrice,
    setShowModal,
    isAccept,
    deleteRequest,
    serviceName,
  } = props;
  const MoreIcon = <MaterialIcons name="more-vert" color={"black"} size={25} />;

  const editRequest = () => {
    navigation.navigate("UpdateRequestScreen", {
      data: data,
      bestService: bestService,
      requestFrom: "list",
    });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("ViewRequestDetailSreen", {
          data: data,
          bestService: bestService,
          requestFrom: "list",
        });
      }}
    >
      <View style={styles.container}>
        <Flex style={styles.headerInfor} direction="row">
          <View>
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                color: "black",
                fontSize: 16,
              }}
            >
              {data.jobName}
            </Text>
            <View style={{ marginTop: 2 }}>
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                  color: "black",
                }}
              >
                {data.serviceName}
              </Text>
            </View>
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
              options={["Hủy yêu cầu", "Chỉnh sửa", "Báo cáo"]}
              actions={[
                () => {
                  setShowModal(true);
                },
                editRequest,
                () => {
                  setShowModal(true);
                },
              ]}
            />
          </View>
        </Flex>
        <View style={{ marginBottom: 8 }}>
          <DashedLine
            dashLength={3}
            dashThickness={1}
            dashColor="#02b2b9"
            dashStyle={{ borderRadius: 3 }}
            dashGap={3}
          />
        </View>
        <Flex style={styles.detailContainer}>
          <Flex direction="row" style={styles.workerLabel}>
            <View style={styles.iconStyle}>
              <Image
                size={10}
                resizeMode={"contain"}
                borderRadius={300}
                source={{
                  uri: bestService.avt,
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
                    borderColor: "#02b2b9",
                  }}
                >
                  <Text
                    style={{ fontFamily: "OpenSans-Regular", color: "#02b2b9" }}
                  >
                    LIÊN HỆ
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{ marginTop: 10 }}>
                <DashedLine
                  dashLength={3}
                  dashThickness={1}
                  dashColor="#02b2b9"
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
                  dashColor="#02b2b9"
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
                {data.location}
              </Text>
              <View style={{ marginTop: 10 }}>
                <DashedLine
                  dashLength={3}
                  dashThickness={1}
                  dashColor="#02b2b9"
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
                <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 15 }}>
                  Thương Lượng
                </Text>
              ) : (
                <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 15 }}>
                  {bestService.price / 1000}.000 VNĐ
                </Text>
              )}
            </View>
            <Spacer />
            {isAccept ? (
              <View></View>
            ) : (
              <Button
                bgColor="rgb(2, 178, 185)"
                style={{ borderRadius: 30, height: 45 }}
                onPress={() => {
                  setShowModalPrice(true);
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    color: "white",
                    fontSize: 12,
                  }}
                >
                  Chấp nhận giá
                </Text>
              </Button>
            )}
          </Flex>
          {isAccept ? (
            <Flex style={styles.timeLabel}>
              <View style={{ marginLeft: 8, flex: 1 }}>
                <View style={{ marginBottom: 10 }}>
                  <DashedLine
                    dashLength={3}
                    dashThickness={1}
                    dashColor="#02b2b9"
                    dashStyle={{ borderRadius: 3 }}
                    dashGap={3}
                  />
                </View>
                <Button
                  bgColor="rgb(2, 178, 185)"
                  style={{ borderRadius: 30, height: 45 }}
                  onPress={() => {
                    navigation.navigate("CompleteScreen", {
                      bestService: bestService,
                      serviceName: serviceName,
                    });
                    deleteRequest();
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "OpenSans-Bold",
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    HOÀN THÀNH LỊCH HẸN
                  </Text>
                </Button>
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Vui lòng xác nhận{" "}
                    <Text style={{ fontFamily: "OpenSans-Bold" }}>
                      HOÀN THÀNH LỊCH HẸN
                    </Text>{" "}
                    và Thợ có thể nhận thanh toán.
                  </Text>
                </View>
              </View>
            </Flex>
          ) : (
            <View></View>
          )}
        </Flex>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#02b2b9",
    borderRadius: 15,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#e8fafa",
    marginBottom: 16,
  },
  detailContainer: {
    borderRadius: 15,
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
  headerInfor: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonMore: {
    backgroundColor: "transparent",
    marginRight: -2,
  },
});
export default RequestDetail;
