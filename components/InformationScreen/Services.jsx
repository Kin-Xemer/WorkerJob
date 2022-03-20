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
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Services = (props) => {
  const { avt, serviceName, serviceAmount } = props;
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Flex direction="row">
          <View style={{ width: 48, height: 48 }}>
            <Image
              size={10}
              resizeMode={"contain"}
              borderRadius={20}
              source={{
                uri: avt,
              }}
              alt="Alternate Text"
            />
          </View>
          <View style={{ marginLeft: 8, paddingTop: 6 }}>
            <Text style={{ fontFamily: "OpenSans-Bold" }}>{serviceName}</Text>
            <Text style={{ fontFamily: "OpenSans-Regular" }}>
              {serviceAmount}
            </Text>
          </View>
        </Flex>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 40,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginLeft: 12,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 15,
    backgroundColor: "#02b2b9",
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
export default Services;
