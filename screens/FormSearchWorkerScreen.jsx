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
  IconButton,
  Flex,
  TextArea,
  Spacer,
  Button,
  Modal,
  HStack,
  Center,
  NativeBaseProvider,
  Radio,
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const FormSearchWorkerScreen = (props) => {
  let { jobName, serviceName, setIsBlank, setDataa } = props;
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
  const [job, setJob] = useState([
    {
      id: 1,
      jobName: "Nhà cửa",
      iconImage: "https://cdn-icons-png.flaticon.com/512/2942/2942587.png",
      service: [
        { serviceName: "Tháo lắp la phông" },
        { serviceName: "Sơn nhà cửa" },
        { serviceName: "Xây nhà" },
      ],
      estimatedPrice: "225.000đ - 400.000đ",
    },
    {
      id: 2,
      jobName: "Điện gia dụng",
      iconImage: "https://cdn-icons-png.flaticon.com/512/6265/6265638.png",
      service: [
        { serviceName: "Sửa lồng quay máy giặt LG cửa trước" },
        { serviceName: "Sửa máy lạnh LG, Panasonic " },
        { serviceName: "Sửa tủ lạnh" },
        { serviceName: "Sửa, vệ sinh điều hòa" },
      ],
      estimatedPrice: "125.000đ - 250.000đ",
    },
    {
      id: 3,
      jobName: "Đồ điện tử",
      iconImage: "https://cdn-icons-png.flaticon.com/512/4982/4982324.png",
      service: [
        { serviceName: "Thay bàn phím, màn hình laptop, điện thoại" },
        { serviceName: "Thay Pin Laptop, Điện thoại,..." },
        { serviceName: "Sửa nguồn, mainboard" },
      ],
      estimatedPrice: "225.000đ - 350.000đ",
    },
    {
      id: 4,
      jobName: "Vận chuyển",
      iconImage:
        "https://cdn-icons.flaticon.com/png/512/3061/premium/3061160.png?token=exp=1646292283~hmac=d00ea930b18a3d768ae9b6ba2fbd721b",
      service: [
        { serviceName: "Chuyển trọ" },
        { serviceName: "Chuyển nhà trọn gói " },
      ],
      estimatedPrice: "200.000đ - 1.000.000đ",
    },

    {
      id: 5,
      jobName: "Điện nước",
      iconImage: "https://cdn-icons-png.flaticon.com/512/5188/5188554.png",
      service: [
        { serviceName: "Sửa ống cấp nước" },
        { serviceName: "Sửa chữa hệ thống điện" },
        { serviceName: "Thay ống nước" },
        { serviceName: "Sửa đường dẫn nước ngầm" },
      ],
      estimatedPrice: "150.000đ - 300.000đ",
    },
    {
      id: 6,
      jobName: "Dọn vệ sinh",
      iconImage:
        "https://cdn-icons.flaticon.com/png/512/4506/premium/4506495.png?token=exp=1646292635~hmac=16dfd45aad2e8057584649d01708a2b5",
      service: [
        { serviceName: "Dọn dẹp nhà cửa" },
        { serviceName: "Dọn kho nhà " },
        { serviceName: "Quét dọn lau chùi bếp" },
      ],
      estimatedPrice: "50.000đ - 150.000đ",
    },
    {
      id: 7,
      jobName: "Sửa xe",
      iconImage: "https://cdn-icons-png.flaticon.com/512/6331/6331739.png",
      service: [
        { serviceName: "Vá xe, thay bugi" },
        { serviceName: "Thay ống pô , thay đề" },
        { serviceName: "Bơm hơi xe" },
        { serviceName: "Thay xe" },
      ],
      estimatedPrice: "5.000đ - 400.000đ",
    },
    {
      id: 8,
      jobName: "Sửa khóa",
      iconImage: "https://cdn-icons-png.flaticon.com/512/2631/2631572.png",
      service: [
        { serviceName: "Sửa khóa phá khóa" },
        { serviceName: "Làm chìa" },
        { serviceName: "Làm remote cửa cuốn" },
        { serviceName: "Làm chìa khóa smartkey" },
      ],
      estimatedPrice: "55.000đ - 455.000đ",
    },
    {
      id: 9,
      jobName: "Làm đẹp",
      iconImage: "https://cdn-icons-png.flaticon.com/512/1940/1940993.png",
      service: [
        { serviceName: "Trang điểm cô dâu, dự tiệc" },
        { serviceName: "Làm nail, sơn móng tay, chân" },
        { serviceName: "Gội đầu dưỡng sinh, spa" },
        { serviceName: "Chăm sóc da mặt, tắm trắng" },
      ],
      estimatedPrice: "225.000đ - 700.000đ",
    },
  ]);
  const [showJob, setShowJob] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isSelectedDate, setIsSelectedDate] = useState(false);
  const [isSelectedTime, setIsSelectedTime] = useState(false);
  const [valueJob, setValueJob] = useState("");
  const [valueService, setValueService] = useState("");
  const [listService, setListService] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState("");
  //   const [bestService, setBestService] = useState(route.params.bestService);
  const [formData, setData] = useState({
    jobName: "Chọn dịch vụ",
    serviceName: "Chọn công việc",
    location: "",
    note: "",
  });
  useEffect(() => {
    getDayMonthYear();
    addDateObjectToFormData();
    checkBlank();
  }, [
    date,
    formData.note,
    formData.location,
    dateObject.day,
    dateObject.hour,
    dateObject.month,
    dateObject.minute,
  ]);

  useEffect(() => {
    setData({ ...formData, serviceName: "Chọn công việc" });
  }, [formData.jobName]);
  const checkBlank = () => {
    if (isSelectedDate && isSelectedTime && formData.location !== "") {
      setIsBlank(true);
    } else {
      setIsBlank(false);
    }
  };

  const addDateObjectToFormData = () => {
    setDataa({ ...formData, date: dateObject });
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
  const onChangeValueJob = (nextValue) => {
    for (let i in job) {
      if (job[i].jobName === nextValue) {
        setListService(job[i].service);
        setEstimatedPrice(job[i].estimatedPrice);
      }
    }
    setData({ ...formData, jobName: nextValue });
    setValueJob(nextValue);
  };

  const onChangeValueService = (nextValue) => {
    setData({ ...formData, serviceName: nextValue });
    setValueService(nextValue);
  };
  return (
    <View style={styles.container}>
      <VStack width="100%" maxW={screenWidth} my="2">
        <FormControl>
          <FormControl.Label>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>Dịch vụ</Text>
          </FormControl.Label>
          <TouchableWithoutFeedback
            onPress={() => {
              setShowJob(true);
            }}
          >
            <View style={styles.textInput}>
              <Input
                isReadOnly={true}
                size="md"
                paddingLeft="4"
                borderWidth={0}
                defaultValue={formData.jobName}
                onChangeText={(value) =>
                  setData({ ...formData, jobName: value })
                }
                InputRightElement={
                  <View style={{ right: 10 }}>
                    <Entypo name="chevron-down" size={23} color="black" />
                  </View>
                }
              />
            </View>
          </TouchableWithoutFeedback>

          <Modal isOpen={showJob} size="lg" onClose={() => setShowJob(false)}>
            <Modal.Content maxWidth="250">
              <Modal.CloseButton />
              <Modal.Header>
                <Text style={{ fontSize: 15, fontFamily: "OpenSans-SemiBold" }}>
                  Chọn dịch vụ
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Radio.Group
                  size="xs"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={valueJob}
                  onChange={(nextValue) => {
                    onChangeValueJob(nextValue);
                  }}
                >
                  <VStack space={3}>
                    {job.map((item) => (
                      <Radio
                        key={item.id}
                        colorScheme="rgb(2, 178, 185)"
                        alignItems="flex-start"
                        _text={{
                          mt: "-0.5",
                          ml: "2",
                          fontSize: "sm",
                        }}
                        value={item.jobName}
                      >
                        {item.jobName}
                      </Radio>
                    ))}
                  </VStack>
                </Radio.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  activeOpacity={1}
                  bgColor="rgb(2, 178, 185)"
                  flex="1"
                  onPress={() => {
                    setShowJob(false);
                  }}
                >
                  Xác nhận
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <FormControl.Label>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>Công việc</Text>
          </FormControl.Label>

          <TouchableWithoutFeedback
            onPress={() => {
              setShowService(true);
            }}
          >
            <View style={styles.textInput}>
              <Input
                isReadOnly={true}
                size="md"
                paddingLeft="4"
                borderWidth={0}
                defaultValue={formData.serviceName}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
                InputRightElement={
                  <View style={{ right: 10 }}>
                    <Entypo name="chevron-down" size={23} color="black" />
                  </View>
                }
              />
            </View>
          </TouchableWithoutFeedback>

          <Modal
            isOpen={showService}
            size="lg"
            onClose={() => setShowService(false)}
          >
            {listService.length > 0 ? (
              <Modal.Content maxWidth="250">
                <Modal.CloseButton />
                <Modal.Header>
                  <Text
                    style={{ fontSize: 15, fontFamily: "OpenSans-SemiBold" }}
                  >
                    Chọn công việc
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Radio.Group
                    size="xs"
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={valueService}
                    onChange={(nextValue) => {
                      onChangeValueService(nextValue);
                    }}
                  >
                    <VStack space={3}>
                      {listService.map((item, index) => (
                        <Radio
                          key={index}
                          colorScheme="rgb(2, 178, 185)"
                          alignItems="flex-start"
                          _text={{
                            mt: "-0.5",
                            ml: "2",
                            fontSize: "sm",
                          }}
                          value={item.serviceName}
                        >
                          {item.serviceName}
                        </Radio>
                      ))}
                    </VStack>
                  </Radio.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    activeOpacity={1}
                    bgColor="rgb(2, 178, 185)"
                    flex="1"
                    onPress={() => {
                      setShowService(false);
                    }}
                  >
                    Xác nhận
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            ) : (
              <Modal.Content maxWidth="250">
                <Modal.CloseButton />
                <Modal.Header>
                  <Text
                    style={{ fontSize: 15, fontFamily: "OpenSans-SemiBold" }}
                  >
                    Lỗi
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Text>Xin vui lòng chọn dịch vụ trước</Text>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    activeOpacity={1}
                    bgColor="rgb(2, 178, 185)"
                    flex="1"
                    onPress={() => {
                      setShowService(false);
                    }}
                  >
                    Xác nhận
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            )}
          </Modal>

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
              Mô tả (không bắt buộc)
            </Text>
          </FormControl.Label>
          <View style={styles.textArea}>
            <TextArea
              placeholder="Nhập ghi chú"
              size="md"
              paddingLeft="4"
              borderWidth={0}
              onChangeText={(value) => {
                setData({ ...formData, note: value });
              }}
            />
          </View>
        </FormControl>
      </VStack>
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
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    fontSize: 18,
                    color: "#D21502",
                  }}
                >
                  {estimatedPrice}
                </Text>
              </View>
            </Flex>
          </View>
          <Spacer />
          <View
            style={{
              height: 70,
              justifyContent: "center",
            }}
          ></View>
        </Flex>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: "white",
  },
  textInput: {
    marginBottom: 16,
    height: 45,
    borderRadius: 15,
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
    backgroundColor: "#f0f0f0",
  },
  bottomViewStyle: {
    paddingLeft: 16,
    paddingRight: 16,
    borderTopColor: "silver",
    borderTopWidth: 1.5,
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
export default FormSearchWorkerScreen;
