import { useState, useEffect } from "react";
import {
  Flex,
  Spacer,
  Box,
  IconButton,
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from "native-base";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Header from "../components/SearchScreen/Header";
import Finder from "../assets/Finder.png";
import SearchResult from "../components/SearchScreen/SearchResult";
import { useNavigation } from "@react-navigation/native";
import FormSearchWorkerScreen from "./FormSearchWorkerScreen";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const WelcomeScreen = (props) => {
  const navigation = useNavigation();
  const [searchResult, setSearchResult] = useState("");
  const [listBestService, setListBestService] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 4.86,
      jobId: 2,
      serviceName: "Vệ sinh máy lạnh",
      ratingAmount: 8,
      price: 140000,
      avt: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
      description: "Dọn dẹp máy lạnh vệ sinh máy lạnh",
    },
    {
      id: 2,
      workerName: "Nguyễn Hoàng Nam",
      workerId: "nam123",
      rating: 4.88,
      jobId: 5,
      serviceName: "Sửa chữa đường ống nước",
      ratingAmount: 50,
      price: 135000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
      description: "Thay ống nước, sửa ống cấp",
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 4.6,
      jobId: 6,
      serviceName: "Dọn vệ sinh nhà cửa",
      ratingAmount: 25,
      price: 100000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154434.png",
      description: "Quét dọn, lau nhà, làm vườn",
    },
    {
      id: 4,
      workerName: "Trần Trung Hiếu",
      workerId: "hieu123",
      rating: 4.68,
      jobId: 2,
      serviceName: "Vệ sinh máy lạnh",
      ratingAmount: 20,
      price: 110000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154466.png",
      description: "Thay máy lạnh, vệ sinh máy lạnh",
    },
    {
      id: 5,
      workerName: "Nguyễn Đức Hoàng",
      workerId: "hoang123",
      rating: 4.75,
      jobId: 4,
      serviceName: "Chuyển nhà , đồ đạc",
      price: 240000,
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154468.png",
      description: "Nhận dịch vụ chuyển trọ, chuyển nhà cửa",
    },
    {
      id: 6,
      workerName: "Nguyễn Mạnh Kiên",
      workerId: "kien123",
      rating: 4.96,
      jobId: 8,
      serviceName: "Sửa khóa, đánh khóa",
      price: 240000,
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154470.png",
      description: "Sủa khóa, làm chìa, phá khóa nhà cửa",
    },
    {
      id: 7,
      workerName: "Nguyễn Minh Đạt",
      workerId: "dat123",
      rating: 4.88,
      jobId: 5,
      serviceName: "Thay đường ống",
      price: 240000,
      ratingAmount: 19,
      avt: "https://cdn-icons-png.flaticon.com/128/219/219970.png",
      description: "Thay ống nước, sửa điện nước",
    },
    {
      id: 8,
      workerName: "Huỳnh Xuân Cường",
      workerId: "cuong123",
      rating: 4.76,
      jobId: 3,
      serviceName: "Lắp đặt camera",
      price: 240000,
      ratingAmount: 42,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154470.png",
      description: "Lắp đặt cấu hình modem, camera",
    },
    {
      id: 9,
      workerName: "Huỳnh Thị Ngọc Thảo",
      workerId: "thao123",
      rating: 4.87,
      jobId: 9,
      serviceName: "Làm móng tay, trang điểm",
      price: 240000,
      ratingAmount: 12,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154449.png",
      description:
        "Nhận trang điểm cô dâu, trang điểm đi ăn đám cưới, làm móng gội đầu",
    },
    {
      id: 10,
      workerName: "Nguyễn Thị Thùy Linh",
      workerId: "linh123",
      rating: 4.69,
      jobId: 6,
      serviceName: "Dọn bếp, dọn nhà",
      price: 95000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
      description: "Quét dọn lau chùi nhà cửa",
    },
    {
      id: 11,
      workerName: "Nguyễn Đức Tài",
      workerId: "tai123",
      rating: 4.85,
      jobId: 3,
      serviceName: "Sửa điện thoại, laptop",
      price: 500000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154455.png",
      description: "Thay pin, thay màn hình, sửa nguồn, sửa main",
    },
    {
      id: 12,
      workerName: "Nguyễn Anh Tú",
      workerId: "tu123",
      rating: 4.95,
      jobId: 7,
      serviceName: "Vá lốp, sửa xe",
      price: 500000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154469.png",
      description: "sửa xe, vá xe",
    },
  ]);
  const [bestService, setBestService] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isBlank, setIsBlank] = useState(false);
  const [dataa, setDataa] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [showButtonLoading, setShowButtonLoading] = useState(false);
  const [random, setRandom] = useState(0);
  useEffect(() => {
    getBestService();
  }, [random]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandom(getRandomNumberBetween(1, 12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getBestService = () => {
    setBestService(listBestService[getRandomNumberBetween(1, 12)]);
  };

  var timesRunButton = 0;
  const loaddingButton = () => {
    const interval = setInterval(() => {
      timesRunButton += 1;
      if (timesRunButton === 2) {
        setShowModal(false);
        setShowButtonLoading(false);
        navigation.navigate("ResultSearchWorkerDetailScreen", {
          data: dataa,
          bestService: bestService,
        });
        clearInterval(interval);
      }
      console.log(timesRunButton + "s");
    }, 200);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowModal(true);
      }}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
          <View style={styles.backIconButton}>
            <Flex direction="row">
              <IconButton
                disabled={true}
                icon={<AntDesign name="caretleft" color={"silver"} size={14} />}
              />
              <View
                alignItems="center"
                justifyContent="center"
                style={{ marginLeft: -8 }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 12, color: "gray" }}
                >
                  Trang chủ
                </Text>
              </View>
            </Flex>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.textHeader}>
          <Text style={styles.textStyleHeader}>Bạn muốn sửa gì ?</Text>
        </View>
        <View
          style={{
            height: 600,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={Finder} style={{ width: 128, height: 128 }} />
          <Text
            style={{
              marginTop: 16,
              fontSize: 18,
              color: "gray",
              fontFamily: "OpenSans-Light",
            }}
          >
            Nhấn vào màn hình để bắt đầu tìm thợ nhé.{" "}
          </Text>
        </View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px" maxHeight="700px">
            <Modal.CloseButton />
            <Modal.Header>
              <Text style={{ fontSize: 18, fontFamily: "OpenSans-SemiBold" }}>
                Nhập thông tin
              </Text>
            </Modal.Header>
            <Modal.Body>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <FormSearchWorkerScreen
                  setIsBlank={setIsBlank}
                  setDataa={setDataa}
                />
              </ScrollView>
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
                {!isBlank ? (
                  <Button
                    activeOpacity={1}
                    isDisabled={true}
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    Tìm thợ ngay
                  </Button>
                ) : showButtonLoading ? (
                  <Button
                    isLoading
                    _loading={{
                      bg: "#02b2b9",
                      _text: {
                        color: "white",
                      },
                    }}
                    _spinner={{
                      color: "white",
                    }}
                  />
                ) : (
                  <Button
                    activeOpacity={1}
                    bgColor="rgb(2, 178, 185)"
                    onPress={() => {
                      console.log(dataa);
                      setShowButtonLoading(true);
                      loaddingButton();
                    }}
                  >
                    Tìm thợ ngay
                  </Button>
                )}
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: screenHeight + 50,
    backgroundColor: "white",
    paddingTop: 32,
  },
  backIconButton: {
    zIndex: 1,
    position: "absolute",
    height: 55,
    width: 55,
    marginTop: 42,
  },
  textHeader: {
    width: screenWidth * 0.9,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  textStyleHeader: {
    fontSize: 20,
    fontFamily: "OpenSans-SemiBold",
  },
});
export default WelcomeScreen;
