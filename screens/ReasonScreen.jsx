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
const ReasonScreen = (props) => {
  const [listData, setListData] = useState([]);
  const [listDataSchedule, setListDataShedule] = useState([{}]);
  const [listDataDone, setListDataDone] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [check, setCheck] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text>Reason Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default ReasonScreen;
