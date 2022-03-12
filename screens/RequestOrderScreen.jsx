import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
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
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [bestService, setBestService] = useState(route.params.bestService);
  const [formData, setData] = useState({
    jobName: getJobNameById(bestService.jobId),
    serviceName: bestService.serviceName,
  });
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
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const onSubmit = () => {
    // validate() ? console.log(formData) : console.log(errors);
    console.log(formData);
  };

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
              onChangeText={(value) => setData({ ...formData, jobName: value })}
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

          <Flex direction="row" style={styles.datetimeFlex}>
            <View style={styles.inputDatePicker}>
              <Input
                textAlign="center"
                placeholder="Ngày"
                size="md"
                borderWidth={0}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
              />
            </View>

            <View style={styles.inputDatePicker}>
              <Input
                textAlign="center"
                placeholder="Tháng"
                size="md"
                borderWidth={0}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
              />
            </View>

            <View style={styles.inputDatePicker}>
              <Input
                textAlign="center"
                placeholder="Năm"
                size="md"
                borderWidth={0}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
              />
            </View>

            <View style={styles.buttonDate}>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("clicked");
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

          <FormControl.Label>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>Thời gian</Text>
          </FormControl.Label>

          <Flex direction="row">
            <View style={styles.inputTimePicker}>
              <Input
                textAlign="center"
                placeholder="Giờ"
                size="md"
                borderWidth={0}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
              />
            </View>

            <View style={styles.inputTimePicker}>
              <Input
                textAlign="center"
                placeholder="Phút"
                size="md"
                borderWidth={0}
                onChangeText={(value) =>
                  setData({ ...formData, serviceName: value })
                }
              />
            </View>

            <View style={styles.buttonDate}>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("clicked");
                }}
              >
                <AntDesign name="clockcircle" size={18} color="white" />
              </TouchableWithoutFeedback>
            </View>
          </Flex>

          <View>
            <View style={{ height: 45, width: 45 }}>
              <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View style={{ height: 45, width: 45 }}>
              <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
              <DateTimePicker
                display="spinner"
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={onChange}
              />
            )}
          </View>
        </FormControl>

        <Button
          onPress={() => {
            onSubmit();
          }}
          mt="5"
          colorScheme="cyan"
        >
          Submit
        </Button>
      </VStack>
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
    width: screenWidth * 0.93,
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
});
export default RequestOrderScreen;
