import { useState, useEffect } from "react";
import { Box, Center, Flex, VStack, Spacer } from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderBar from "../components/InformationScreen/HeaderBar";
import BottomButton from "../components/ServiceDetailScreen/BottomButton";
import DividerBar from "../components/DividerBar";
import Services from "../components/InformationScreen/Services";
import bgImage from "../assets/bgImage.png";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const WorkerInformation = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [worker, setWorker] = useState(route.params.worker);
  return (
    <View alignItems="center" style={{ flex: 1 }}>
      <HeaderBar />
      <View style={styles.header}>
        <Image style={{ height: "100%", width: "100%" }} source={bgImage} />
      </View>
      <View style={styles.avatarStyle}>
        <Image style={styles.avatar} source={{ uri: worker.avt }} />
      </View>
      <Box style={styles.body}>
        <Center mt={70}>
          <Text style={styles.nameWorker}>{worker.workerName}</Text>
        </Center>
        <Flex direction="row" style={styles.ratingBar}>
          <View marginHorizontal={20} alignItems="center">
            <Text style={{ fontSize: 24 }}>350</Text>
            <Text>Lượt đặt</Text>
          </View>
          <View marginHorizontal={20} alignItems="center">
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 24, marginRight: 5 }}>4.85/5</Text>
              <View style={{ marginTop: 2 }}>
                <AntDesign name="star" size={20} color="#02b2b9" />
              </View>
            </View>
            <Text>Đánh giá</Text>
          </View>
          <View marginHorizontal={20} alignItems="center">
            <Text style={{ fontSize: 24 }}>50</Text>
            <Text>Lượt đánh giá</Text>
          </View>
        </Flex>
        <View
          style={{
            height: 55,
            width: screenWidth,
          }}
        >
          <DividerBar dividerName="dịch vụ" />
        </View>

        <Services
          avt="https://cdn-icons-png.flaticon.com/512/995/995260.png"
          serviceName="Vận chuyển"
          serviceAmount="Xem 2 dịch vụ"
        />
        <Services
          avt="https://cdn-icons-png.flaticon.com/512/6265/6265638.png"
          serviceName="Điện gia dụng"
          serviceAmount="Xem 5 dịch vụ"
        />
        <Services
          avt="https://cdn-icons-png.flaticon.com/512/5188/5188554.png"
          serviceName="Điện nước"
          serviceAmount="Xem 1 dịch vụ"
        />

        <View
          style={{
            height: 55,
            width: screenWidth,
          }}
        >
          <DividerBar dividerName="Giới thiệu" />
        </View>
        <View style={styles.noteStyle}>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Chuyên dọn dẹp, thi công
          </Text>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            Thi công, sửa chữa nhôm kính
          </Text>
        </View>
        <View
          style={{
            height: 55,
            width: screenWidth,
            marginTop: -15,
          }}
        >
          <DividerBar dividerName="Liên lạc" />
        </View>
        <View style={styles.noteStyle}>
          <Text style={{ fontFamily: "OpenSans-Regular" }}>
            0123456789, khang123@gmail.com
          </Text>
        </View>
      </Box>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#02b2b9",
    height: 200,
    width: "100%",
  },
  noteStyle: {
    width: screenWidth - 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 130,
    flex: 1,
  },
  body: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  avatarStyle: {
    zIndex: 1,
    position: "absolute",
  },
  nameWorker: {
    textTransform: "uppercase",
    fontSize: 30,
  },
});
export default WorkerInformation;
