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
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/SearchScreen/Header";
import Finder from "../assets/Finder.png";
import SearchResult from "../components/SearchScreen/SearchResult";
import { useNavigation } from "@react-navigation/native";
import FormSearchWorkerScreen from "./FormSearchWorkerScreen";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const WelcomeScreen = (props) => {
  const navigation = useNavigation();
  const [searchResult, setSearchResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isBlank, setIsBlank] = useState(false);
  const [dataa, setDataa] = useState();
  return (
    <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
          <View style={styles.backIconButton}>
            <IconButton
              disabled={true}
              icon={
                <Ionicons name="arrow-back-outline" color={"black"} size={30} />
              }
            />
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
                ) : (
                  <Button
                    activeOpacity={1}
                    bgColor="rgb(2, 178, 185)"
                    onPress={() => {
                      console.log(dataa);
                      setShowModal(false);
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
    height: 45,
    width: 45,
    marginTop: 32,
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
