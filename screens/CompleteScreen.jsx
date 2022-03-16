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
  Image,
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
import { AirbnbRating } from "react-native-ratings";
import { convertStar } from "../Utils/convertStar.js";
const CompleteScreen = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [bestService, setBestService] = useState(route.params.bestService);
  const [serviceName, setServiceName] = useState(route.params.serviceName);
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
        <Text style={{ fontSize: 24, fontFamily: "OpenSans-Bold" }}>
          Gửi đánh giá
        </Text>
      </View>
      <Flex
        direction="row"
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 8,
        }}
      >
        <View>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Đánh giá</Text>
        </View>
        <Spacer />
        <AirbnbRating
          count={5}
          defaultRating={5}
          size={22}
          showRating={false}
        />
      </Flex>

      <Flex
        direction="row"
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Thợ</Text>
        </View>
        <Spacer />
        <Text>{bestService.workerName}</Text>
      </Flex>

      <Flex
        direction="row"
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Dịch vụ</Text>
        </View>
        <Spacer />
        <Text>{serviceName}</Text>
      </Flex>

      <Flex
        style={{
          paddingVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontFamily: "OpenSans-Bold" }}>Lời nhắn</Text>
        </View>
        <Spacer />
        <View style={styles.textArea}>
          <TextArea
            placeholder="Viết vài dòng về chất lượng của thợ nhé."
            size="md"
            paddingLeft="4"
            borderWidth={0}
          />
        </View>
      </Flex>
      <Spacer />
      <View style={{ paddingBottom: 16 }}>
        <Button
          activeOpacity={1}
          bgColor="rgb(2, 178, 185)"
          style={{ borderRadius: 15, height: 45 }}
          onPress={() => navigation.navigate("WelcomeScreen")}
        >
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              color: "white",
              fontSize: 16,
            }}
          >
            Gửi đánh giá
          </Text>
        </Button>
      </View>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
  },
  workerLabel: {
    marginTop: 15,
    paddingBottom: 16,
    borderRadius: 15,
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
  },
  iconStyle: {
    width: 48,
    height: 48,
  },
  textArea: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 6,
    marginBottom: 16,
    height: 150,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },
});
export default CompleteScreen;
