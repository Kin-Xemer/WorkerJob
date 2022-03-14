import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
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
  Divider,
  AlertDialog,
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import DividerFullWidth from "../components/DividerFullWidth";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RequestDetailScreen = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState(route.params.data);
  const [bestService, setBestService] = useState(route.params.bestService);
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  const onClose = () => setIsOpen(false);
  useEffect(() => {
    // console.log(data);
  });
  return (
    <Flex style={styles.container}>
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
        <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 20 }}>
          Xác nhận
        </Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={{ fontFamily: "OpenSans-Bold" }}>Dịch vụ</Text>
      </View>
      <Text style={{ fontFamily: "OpenSans-Regular" }}>{data.jobName}</Text>
      <View style={styles.textStyle}>
        <Text style={{ fontFamily: "OpenSans-Bold" }}>Công việc</Text>
      </View>
      <Text style={{ fontFamily: "OpenSans-Regular" }}>{data.serviceName}</Text>
      <View style={styles.datetimeViewStyle}>
        <Flex direction="row">
          <View>
            <Text style={{ fontFamily: "OpenSans-Bold" }}>Ngày</Text>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>
              {data.date.day}/{data.date.month}/{data.date.year}
            </Text>
          </View>
          <View style={{ marginLeft: 100 }}>
            <Text style={{ fontFamily: "OpenSans-Bold" }}>Thời gian</Text>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>
              {data.date.hour}:{data.date.minute}
            </Text>
          </View>
        </Flex>
      </View>
      <View style={styles.textStyle}>
        <Text style={{ fontFamily: "OpenSans-Bold" }}>Địa điểm</Text>
        <Text style={{ fontFamily: "OpenSans-Regular" }}>{data.location}</Text>
      </View>
      {data.note !== "" ? (
        <View style={styles.textStyle}>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Ghi chú</Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>{data.note}</Text>
        </View>
      ) : (
        <Text> </Text>
      )}
      <View>
        <Divider
          mt={2}
          w={screenWidth * 0.93}
          bg="#EFEFEF"
          orientation="horizontal"
          thickness="1"
        />
      </View>
      <Spacer />
      <TouchableWithoutFeedback
        // onPress={() =>
        //   navigation.navigate("RequestOrderScreen", {
        //     bestService: bestService,
        //   })
        // }
        onPress={() => {
          setIsOpen(!isOpen);
        }}
      >
        <View backgroundColor="#02b2b9" style={styles.buttonStyle}>
          <Text style={styles.textPrice}>Gửi cho nhà cung cấp</Text>
        </View>
      </TouchableWithoutFeedback>
      <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Gửi</AlertDialog.Header>
            <AlertDialog.Body>
              Bạn có thực sự muốn gửi yêu cầu này không?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}
                >
                  <Text
                    style={{
                      fontFamily: "OpenSans-SemiBold",
                      color: "#02b2b9",
                    }}
                  >
                    Hủy
                  </Text>
                </Button>
                <Button
                  variant="unstyled"
                  onPress={() => {
                    navigation.navigate("ViewRequestDetailSreen", {
                      data: data,
                      bestService: bestService,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "OpenSans-SemiBold",
                      color: "#02b2b9",
                    }}
                  >
                    Gửi
                  </Text>
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </Flex>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    paddingTop: 18,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    flex: 1,
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
  textStyle: {
    marginTop: 20,
  },
  datetimeViewStyle: {
    marginTop: 32,
  },
  buttonStyle: {
    flexDirection: "row",
    borderRadius: 14,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  textPrice: {
    fontFamily: "OpenSans-Bold",
    color: "white",
  },
});
export default RequestDetailScreen;
