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
  Modal,
  FormControl,
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import search from "../assets/searching.gif";
import DashedLine from "react-native-dashed-line";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getJobNameById } from "../Utils/jobName.js";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ResultSearchWorkerDetailScreen = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.data);
  const [bestService, setBestService] = useState(route.params.bestService);
  const [isFind, setIsFind] = useState(false);
  var timesRunModal = 0;
  const loaddingButtonModal = () => {
    const interval = setInterval(() => {
      timesRunModal += 1;
      if (timesRunModal === 5) {
        setIsFind(true);
        setOpen(true);
        clearInterval(interval);
      }
      console.log(timesRunModal + "s in run modal");
    }, 1000);
  };
  useEffect(() => {
    loaddingButtonModal();
  }, []);

  useEffect(() => {
    setData(route.params.data);
    setBestService(route.params.bestService);
  }, [route.params]);
  const [open, setOpen] = useState(false);
  return (
    <>
      {isFind ? (
        <View style={styles.container}>
          <Modal isOpen={open} onClose={() => setOpen(false)} mt={12}>
            <Modal.Content maxWidth="350" {...styles["top"]}>
              <Modal.Header>
                <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
                  WorkerJob
                </Text>
              </Modal.Header>
              <Modal.CloseButton />
              <Modal.Body>
                <View
                  width="90%"
                  height={45}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontFamily: "OpenSans-Regular", fontSize: 16 }}
                  >
                    Đã tìm thấy thợ cho bạn
                  </Text>
                </View>
              </Modal.Body>
            </Modal.Content>
          </Modal>

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
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("RequestScreen", {
                  data: data,
                  bestService: bestService,
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
              {data.jobName}
            </Text>
            <View style={{ marginTop: 8 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "OpenSans-Bold",
                  color: "white",
                }}
              >
                {data.serviceName}
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
                    giữ khoảng cách, vệ sinh sạch sẽ khu vực làm việc để đảm bảo
                    an toàn cho bạn và Thợ.
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
                <Text style={{ fontFamily: "OpenSans-Bold" }}>
                  {data.location}
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
                  <Text style={{ fontFamily: "OpenSans-SemiBold" }}>
                    Ghi chú
                  </Text>
                  <Text style={{ fontFamily: "OpenSans-Regular" }}>
                    {data.note}
                  </Text>
                </View>
                <Divider
                  bg="#f0f0f0"
                  thickness="5"
                  w={screenWidth + 50}
                  ml="-4"
                />
              </View>
            ) : (
              <Text> </Text>
            )}
            <View>
              <View style={styles.imageStyle}>
                <Text style={{ fontFamily: "OpenSans-Bold" }}>
                  Ảnh đính kèm
                </Text>
                <Text style={{ fontFamily: "OpenSans-Regular" }}>
                  <Flex direction="row">
                    <View>
                      <Image
                        size={60}
                        resizeMode={"contain"}
                        borderRadius={15}
                        source={{
                          uri: "https://cf.shopee.vn/file/d9db5788a22db82f1ab27b66796ca4a7",
                        }}
                        alt="Alternate Text"
                      />
                    </View>
                    <View>
                      <Image
                        size={60}
                        resizeMode={"contain"}
                        borderRadius={15}
                        source={{
                          uri: "https://cf.shopee.vn/file/297ca8a86ea9e14c9df891286e07e772_tn",
                        }}
                        alt="Alternate Text"
                      />
                    </View>
                  </Flex>
                </Text>
              </View>
              <Divider
                bg="#f0f0f0"
                thickness="5"
                w={screenWidth + 50}
                ml="-4"
              />
            </View>
          </View>
          <Divider bg="#f0f0f0" thickness="1" />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("ReasonScreen");
            }}
          >
            <View style={styles.touchOption}>
              <Text style={{ fontFamily: "OpenSans-Bold", color: "red" }}>
                Huỷ lịch hẹn
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <View style={styles.containerSearch}>
          <View>
            <Image
              source={search}
              alt="Search icon"
              style={{ width: 128, height: 128 }}
            />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 15,
                fontSize: 18,
                color: "gray",
                fontFamily: "OpenSans-Light",
                paddingBottom: 200,
              }}
            >
              Worker Job đang tìm thợ quanh đây, bạn chờ một chút nhé
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  imageStyle: {
    alignItems: "flex-start",
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 15,
  },
  touchOption: {
    paddingVertical: 10,
  },
  top: {
    borderRadius: 15,
    marginBottom: "auto",
    marginTop: 0,
  },
});
export default ResultSearchWorkerDetailScreen;
