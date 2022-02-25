import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Center,
  Stack,
  Pressable,
  HStack,
  Button,
  Flex,
  Spacer,
  VStack,
  IconButton,
} from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderBar from "../components/InformationScreen/HeaderBar";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const WorkerInformation = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [worker, setWorker] = useState(route.params.worker);
  return (
    <VStack h={40} alignItems="center">
      <HeaderBar />
      <View style={styles.header}></View>
      <View style={styles.avatarStyle}>
        <Image style={styles.avatar} source={{ uri: worker.avt }} />
      </View>
      <Box style={styles.body}>
        <Center mt={70}>
          <Text style={styles.nameWorker}>{worker.workerName}</Text>
        </Center>
        <Flex direction="row" style={styles.ratingBar}>
          <Center size={24} margin={1}>
            <Text style={{ fontSize: 24 }}>350</Text>
            <Text>Lượt đặt</Text>
          </Center>
          <Center size={24} margin={1}>
            <Center style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 24, marginRight: 5 }}>4.85/5</Text>
              <AntDesign name="star" size={20} color="#02b2b9" />
            </Center>
            <Text>Đánh giá</Text>
          </Center>
          <Center size={24} margin={1}>
            <Text style={{ fontSize: 24 }}>50</Text>
            <Text>Lượt đánh giá</Text>
          </Center>
        </Flex>
      </Box>
    </VStack>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#02b2b9",
    height: 200,
    width: "100%",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#fff",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 130,
    flex: 1,
  },
  body: {
    alignItems: "center",
    width: screenWidth,
    height: screenHeight - 205,
    backgroundColor: "#fff",
  },
  avatarStyle: {
    zIndex: 1,
    position: "absolute",
  },
  nameWorker: {
    textTransform: "uppercase",
    fontSize: 30,
  },
  ratingBar: {
    marginHorizontal: 8,
  },
});
export default WorkerInformation;
