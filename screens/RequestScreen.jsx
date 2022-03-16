import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
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
import { ButtonGroup } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import RequestDetail from "../components/RequestScreen/RequestDetail";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RequestScreen = (props) => {
  const [listData, setListData] = useState([]);
  const [listDataSchedule, setListDataShedule] = useState([{}]);
  const [listDataDone, setListDataDone] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [check, setCheck] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.requestFrom == "update") {
        listData.pop();
      }
      setListData([
        ...listData,
        { data: route.params.data, bestService: route.params.bestService },
      ]);
      setCheck("");
    } else {
      setCheck("khong co gi");
    }
  }, [route.params]);
  const onDelete = (index) => {};
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
      <Text>{check}</Text>
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
              onDelete={onDelete}
            />
          ))}
        </View>
      </ScrollView>

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
