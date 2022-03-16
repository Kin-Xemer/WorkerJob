import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { Button, IconButton, Spacer, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import LabelReason from "../components/LabelReason";
const ReasonScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
      <View style={{ marginTop: 8, paddingBottom: 24 }}>
        <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 25 }}>
          Huỷ lịch hẹn
        </Text>
      </View>
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
        <Spacer />
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
            Xác nhận và hủy lịch
          </Text>
        </Button>
      </VStack>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 18,
    flex: 1,
    backgroundColor: "white",
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
});
export default ReasonScreen;
