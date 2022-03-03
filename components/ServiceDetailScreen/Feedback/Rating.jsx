import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Feedback from "./Feedback";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import { useState, useEffect } from "react";
const Rating = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Đánh giá</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text>
          <Feedback
            avatar="https://i.pinimg.com/474x/b8/51/c7/b851c7faae38111e025c757c34959f63.jpg"
            userName="Nguyễn Mạnh Kiên"
            rate={5}
            comment="Vui vẻ nhiệt tình hoạt bát"
            like={4}
          />
          <Feedback
            avatar="https://i.pinimg.com/564x/00/a8/79/00a8797ffbb12f53c4827086a0f6dde5.jpg"
            userName="Nguyễn Hoàng Nam"
            rate={5}
            comment="Sửa nhanh, nhiệt tình, nói chuyện dễ thương"
            like={2}
          />
          <Feedback
            avatar="https://i.pinimg.com/474x/b0/86/1e/b0861e61d7f872e983429ce37ea27ba5.jpg"
            userName="Trần Trung Hiếu"
            rate={5}
            comment="hoạt bát, làm việc gọn gàng"
            like={1}
          />
          <Feedback
            avatar="https://i.pinimg.com/474x/8b/5f/c3/8b5fc3b2ca040e0fc20f1c8a19f6c282.jpg"
            userName="Cao Văn Diện"
            rate={5}
            comment="Giá cả phải chăng"
            like={2}
          />
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    paddingTop: 8,
    marginRight: "auto",
    width: screenWidth,
    height: screenHeight * 0.6,
    paddingLeft: 8,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Rating;
