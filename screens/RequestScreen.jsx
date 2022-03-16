import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import {
  Input,
  NativeBaseProvider,
  Center,
  Button,
  IconButton,
  Modal,
  Flex,
  TextArea,
  Stack,
  Spacer,
  Divider,
  VStack,
} from "native-base";
import Finder from "../assets/folderImg.png";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import { ButtonGroup } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import RequestDetail from "../components/RequestScreen/RequestDetail";
import LabelReason from "../components/LabelReason";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RequestScreen = (props) => {
  const [listData, setListData] = useState([]);
  const [listDataSchedule, setListDataShedule] = useState([{}]);
  const [listDataDone, setListDataDone] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalPrice, setShowModalPrice] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [isHaveData, setIsHaveData] = useState(false);
  const [serviceName, setServceName] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    if (route.params !== undefined || listData.length > 0) {
      if (route.params.requestFrom == "update") {
        listData.pop();
      }
      setListData([
        ...listData,
        { data: route.params.data, bestService: route.params.bestService },
      ]);
      setServceName(route.params.data.serviceName);
      setIsHaveData(true);
    } else {
      setIsHaveData(false);
    }
  }, [route.params]);
  const deleteRequest = () => {
    if (listData.length == 1) {
      setIsHaveData(false);
    }
    listData.pop();
  };
  const setTitle = (value) => {
    setSelectedIndex(value);
    if (value == 0) {
      setSelectedTitle("Yêu cầu");
    } else if (value == 1) {
      setSelectedTitle("Lịch hẹn");
    } else if (value == 2) {
      setSelectedTitle("Đã xong");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 20, fontFamily: "OpenSans-SemiBold" }}>
          Lịch hẹn
        </Text>
      </View>
      <View style={{ marginBottom: 8 }}>
        <ButtonGroup
          innerBorderStyle={{ width: 0 }}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setTitle(value);
          }}
          buttons={["Yêu cầu", "Lịch hẹn", "Đã xong"]}
          textStyle={{ color: "black", fontFamily: "OpenSans-SemiBold" }}
          selectedTextStyle={{ color: "white" }}
          selectedButtonStyle={{ borderRadius: 15, backgroundColor: "#02b2b9" }}
          buttonStyle={{
            backgroundColor: "#f0f0f0",
            borderRadius: 15,
            marginHorizontal: 16,
          }}
          containerStyle={{
            borderWidth: 0,
            borderRadius: 15,
            marginHorizontal: -16,
          }}
        />
      </View>
      {isHaveData ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            {listData.map((item, index) => (
              <RequestDetail
                key={index}
                index={index}
                bestService={item.bestService}
                data={item.data}
                setShowModal={setShowModal}
                setShowModalPrice={setShowModalPrice}
                isAccept={isAccept}
                serviceName={serviceName}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            height: 500,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={Finder} style={{ width: 128, height: 128 }} />
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              color: "gray",
              fontFamily: "OpenSans-Light",
            }}
          >
            Chưa có yêu cầu nào.{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 15,
              color: "gray",
              fontFamily: "OpenSans-Light",
            }}
          >
            Hãy tiếp tục tìm Thợ để giúp bạn giải quyết vấn đề nhé.{" "}
          </Text>
        </View>
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" maxHeight="700px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
              Lý do hủy
            </Text>
          </Modal.Header>
          <Modal.Body>
            <VStack style={{ flex: 1, paddingBottom: 15 }}>
              <LabelReason reasonText="Tôi đã tìm được thợ khác" />
              <LabelReason reasonText="Tôi đợi lâu mà không thấy thợ trả lời" />
              <LabelReason reasonText="Tôi muốn thay đổi thời gian làm việc" />
              <LabelReason reasonText="Tôi muốn chọn loại công việc khác" />
              <LabelReason reasonText="Tôi không có ở nhà thời điểm làm việc" />
              <LabelReason reasonText="Thôi muốn thay đổi địa chỉ" />
              <LabelReason reasonText="Thợ yêu cầu tôi hủy công việc" />
              <LabelReason reasonText="Tôi không liên lạc được với thợ" />
              <LabelReason reasonText="Thợ không đến làm việc" />
              <LabelReason reasonText="Thợ có hành vi hoặc ngôn từ khiếm nhã" />
              <LabelReason reasonText="Lý do khác..." />
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="rgb(140, 178, 185)"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Hủy
              </Button>
              <Button
                activeOpacity={1}
                bgColor="rgb(2, 178, 185)"
                style={{ borderRadius: 15, height: 45 }}
                onPress={() => {
                  setShowModal(false);
                  deleteRequest();
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  Xác nhận
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModalPrice} onClose={() => setShowModalPrice(false)}>
        <Modal.Content maxWidth="400px" maxHeight="700px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={{ fontSize: 18, fontFamily: "OpenSans-Bold" }}>
              Chấp nhận báo giá
            </Text>
          </Modal.Header>
          <Modal.Body>Bạn có đồng ý báo giá không ? </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="rgb(140, 178, 185)"
                onPress={() => {
                  setShowModalPrice(false);
                  setIsAccept(false);
                }}
              >
                Hủy
              </Button>
              <Button
                activeOpacity={1}
                bgColor="rgb(2, 178, 185)"
                style={{ borderRadius: 10 }}
                onPress={() => {
                  setShowModalPrice(false);
                  setIsAccept(true);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  Đồng ý
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {/* {route.params != undefined ? (
        <RequestDetail
          bestService={route.params.bestService}
          data={route.params.data}
        />
      ) : (
        <Text>Khong co gi het</Text>
      )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "white",
    flex: 1,
  },
});
export default RequestScreen;
