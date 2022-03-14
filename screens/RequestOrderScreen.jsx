import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Button,
  IconButton,
  Flex,
  TextArea,
  Stack,
  Spacer,
} from "native-base";
import { getJobNameById } from "../Utils/jobName.js";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RequestOrderScreen = (props) => {
  const { jobName, serviceName } = props;
  const route = useRoute();
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [dateObject, setDateObject] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
  });
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isSelectedDate, setIsSelectedDate] = useState(false);
  const [isSelectedTime, setIsSelectedTime] = useState(false);
  const [isBlank, setIsBlank] = useState(false);
  const [bestService, setBestService] = useState(route.params.bestService);
  const [formData, setData] = useState({
    jobName: getJobNameById(bestService.jobId),
    serviceName: bestService.serviceName,
    location: "",
    note: "",
  });
  useEffect(() => {
    getDayMonthYear();
    addDateObjectToFormData();
    checkBlank();
  }, [
    date,
    formData.location,
    dateObject.day,
    dateObject.hour,
    dateObject.month,
    dateObject.minute,
  ]);

  const checkBlank = () => {
    if (isSelectedDate && isSelectedTime && formData.location !== "") {
      setIsBlank(true);
    } else {
      setIsBlank(false);
    }
  };

  const addDateObjectToFormData = () => {
    setData({ ...formData, date: dateObject });
  };
  const getDayMonthYear = () => {
    var day, month, year, hour, minute;
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    hour = date.getHours();
    minute = date.getMinutes();
    if (hour == 0) {
      hour = "00";
    } else if (hour > 0 && hour < 10) {
      hour = "0" + hour;
    }

    if (minute == 0) {
      minute = "00";
    } else if (minute > 0 && minute < 10) {
      minute = "0" + minute;
    }
    setDateObject({
      ...dateObject,
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute,
    });
    // console.log(
    //   "day:" +
    //     day +
    //     " month:" +
    //     month +
    //     " year:" +
    //     year +
    //     " Hour:" +
    //     hour +
    //     " minute:" +
    //     minute
    // );
  };

  const [errors, setErrors] = useState({});
  // const validate = () => {
  //   if (formData.serviceName === undefined) {
  //     setErrors({ ...errors, serviceName: "Name is required" });
  //     return false;
  //   } else if (formData.serviceName.length < 3) {
  //     setErrors({ ...errors, serviceName: "Name is too short" });
  //     return false;
  //   }

  //   return true;
  // };
  const onChangeDate = (event, selectedDate) => {
    setShowDate(false);
    setShowTime(false);
    setDate(selectedDate);
    setIsSelectedDate(true);
    // getDayMonthYear(selectedDate);
  };

  const onChangeTime = (event, selectedTime) => {
    setShowDate(false);
    setShowTime(false);
    setDate(selectedTime);
    setIsSelectedTime(true);
  };
  const showDatepicker = () => {
    setShowDate(true);
  };

  const showTimepicker = () => {
    setShowTime(true);
  };
  const onSubmit = () => {
    // validate() ? console.log(formData) : console.log(errors);
    // console.log(formData);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
        <View style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 20, fontFamily: "OpenSans-Bold" }}>
            Chi tiết công việc
          </Text>
        </View>

        <VStack width="100%" maxW={screenWidth} my="5">
          <FormControl>
            <FormControl.Label>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>Dịch vụ</Text>
            </FormControl.Label>
            <View style={styles.textInput}>
              <Input
                isReadOnly={true}
                size="md"
                paddingLeft="4"
                borderWidth={0}
                defaultValue={getJobNameById(bestService.jobId)}
                onChangeText={(value) =>
                  setData({ ...formData, jobName: value })
                }
              />
            </View>

            <FormControl.Label>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>Công việc</Text>
            </FormControl.Label>

            <View style={styles.textInput}>
              <Input
                isReadOnly={true}
                size="md"
                paddingLeft="4"
                borderWidth={0}
                defaultValue={bestService.serviceName}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
              />
            </View>

            <FormControl.Label>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>Ngày</Text>
            </FormControl.Label>

            <TouchableWithoutFeedback
              onPress={() => {
                showDatepicker();
              }}
            >
              <Flex direction="row" style={styles.datetimeFlex}>
                <View style={styles.inputDatePicker}>
                  <Input
                    isReadOnly={true}
                    textAlign="center"
                    placeholder="Ngày"
                    size="md"
                    borderWidth={0}
                    defaultValue={!isSelectedDate ? "" : dateObject.day + ""}
                  />
                </View>

                <View style={styles.inputDatePicker}>
                  <Input
                    isReadOnly={true}
                    textAlign="center"
                    placeholder="Tháng"
                    size="md"
                    borderWidth={0}
                    defaultValue={!isSelectedDate ? "" : dateObject.month + ""}
                  />
                </View>

                <View style={styles.inputDatePicker}>
                  <Input
                    isReadOnly={true}
                    textAlign="center"
                    placeholder="Năm"
                    size="md"
                    borderWidth={0}
                    defaultValue={!isSelectedDate ? "" : dateObject.year + ""}
                  />
                </View>

                <View style={styles.buttonDate}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      showDatepicker();
                    }}
                  >
                    <MaterialCommunityIcons
                      name="calendar-month"
                      size={20}
                      color="white"
                    />
                  </TouchableWithoutFeedback>
                </View>
              </Flex>
            </TouchableWithoutFeedback>

            <FormControl.Label>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>Thời gian</Text>
            </FormControl.Label>
            <TouchableWithoutFeedback
              onPress={() => {
                showTimepicker();
              }}
            >
              <Flex direction="row">
                <View style={styles.inputTimePicker}>
                  <Input
                    isReadOnly={true}
                    textAlign="center"
                    placeholder="Giờ"
                    size="md"
                    borderWidth={0}
                    defaultValue={!isSelectedTime ? "" : dateObject.hour + ""}
                  />
                </View>

                <View style={styles.inputTimePicker}>
                  <Input
                    isReadOnly={true}
                    textAlign="center"
                    placeholder="Phút"
                    size="md"
                    borderWidth={0}
                    defaultValue={!isSelectedTime ? "" : dateObject.minute + ""}
                  />
                </View>

                <View style={styles.buttonDate}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      showTimepicker();
                    }}
                  >
                    <AntDesign name="clockcircle" size={18} color="white" />
                  </TouchableWithoutFeedback>
                </View>
              </Flex>
            </TouchableWithoutFeedback>
            <View>
              {showDate && (
                <DateTimePicker
                  dateFormat="day month year"
                  display="spinner"
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  onChange={onChangeDate}
                />
              )}
              {showTime && (
                <DateTimePicker
                  dateFormat="day month year"
                  display="spinner"
                  testID="dateTimePicker"
                  value={date}
                  mode="time"
                  onChange={onChangeTime}
                />
              )}
            </View>
            <FormControl.Label>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>Địa điểm</Text>
            </FormControl.Label>
            <View style={styles.textInput}>
              <Input
                placeholder="Nhập địa điểm"
                size="md"
                paddingLeft="4"
                borderWidth={0}
                onChangeText={(value) =>
                  setData({ ...formData, location: value })
                }
              />
            </View>
            <FormControl.Label>
              <Text style={{ fontFamily: "OpenSans-Regular" }}>
                Ghi chú (không bắt buộc)
              </Text>
            </FormControl.Label>
            <View style={styles.textArea}>
              <TextArea
                placeholder="Nhập ghi chú"
                size="md"
                paddingLeft="4"
                borderWidth={0}
                onChangeText={(value) => setData({ ...formData, note: value })}
              />
            </View>
          </FormControl>
        </VStack>
      </ScrollView>
      <View style={styles.bottomViewStyle}>
        <Flex direction="row">
          <View
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Flex direction="column">
              <View>
                <Text>Giá ước tính</Text>
              </View>
              <View style={{ marginTop: 8 }}>
                {bestService.price === 0 ? (
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Thương Lượng
                  </Text>
                ) : (
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {bestService.price / 1000}.000 VNĐ
                  </Text>
                )}
              </View>
            </Flex>
          </View>
          <Spacer />
          <View
            style={{
              height: 70,
              justifyContent: "center",
            }}
          >
            <TouchableWithoutFeedback
              // onPress={() =>
              //   navigation.navigate("RequestOrderScreen", {
              //     bestService: bestService,
              //   })
              // }
              disabled={!isBlank ? true : false}
              onPress={() => {
                onSubmit();
                navigation.navigate("RequestDetailScreen", {
                  data: formData,
                  bestService: bestService,
                });
              }}
            >
              {!isBlank ? (
                <View backgroundColor="gray" style={styles.buttonStyle}>
                  <Text style={styles.textPrice}>Tiếp tục</Text>
                </View>
              ) : (
                <View backgroundColor="#02b2b9" style={styles.buttonStyle}>
                  <Text style={styles.textPrice}>Tiếp tục</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
          </View>
        </Flex>
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
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
    marginTop: 12,
  },
  textInput: {
    marginBottom: 16,
    height: 45,
    borderRadius: 15,
    width: screenWidth - 32,
    backgroundColor: "#f0f0f0",
  },
  inputDatePicker: {
    marginBottom: 16,
    height: 45,
    borderRadius: 15,
    width: "28%",
    backgroundColor: "#f0f0f0",
    marginRight: "auto",
  },
  buttonDate: {
    marginTop: 5,
    height: 35,
    width: 35,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#02b2b9",
  },
  inputTimePicker: {
    marginBottom: 16,
    height: 45,
    borderRadius: 15,
    width: "43%",
    backgroundColor: "#f0f0f0",
    marginRight: "auto",
  },
  textArea: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 16,
    height: 150,
    borderRadius: 15,
    width: screenWidth - 32,
    backgroundColor: "#f0f0f0",
  },
  bottomViewStyle: {
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    width: screenWidth,
    borderTopColor: "silver",
    borderTopWidth: 0.5,
    height: 70,
  },
  buttonStyle: {
    flexDirection: "row",
    borderRadius: 14,
    height: 42,
    width: screenWidth * 0.45,
    alignItems: "center",
    justifyContent: "center",
  },
  textPrice: {
    fontFamily: "OpenSans-Bold",
    color: "white",
  },
});
export default RequestOrderScreen;
