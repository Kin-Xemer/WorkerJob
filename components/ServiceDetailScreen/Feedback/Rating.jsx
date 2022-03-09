import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Feedback from "./Feedback";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import { useState, useEffect } from "react";
const Rating = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(0);
  useEffect(() => {});
  const [listFeedback, setListFeedback] = useState([
    {
      id: 1,
      isLiked: false,
      avatar:
        "https://i.pinimg.com/474x/b8/51/c7/b851c7faae38111e025c757c34959f63.jpg",
      userName: "Nguyễn Mạnh Kiên",
      rate: 5,
      comment: "Vui vẻ nhiệt tình hoạt bát",
      likeComment: 4,
    },
    {
      id: 2,
      isLiked: false,
      avatar:
        "https://i.pinimg.com/564x/00/a8/79/00a8797ffbb12f53c4827086a0f6dde5.jpg",
      userName: "Nguyễn Hoàng Nam",
      rate: 5,
      comment: "Sửa nhanh, nhiệt tình, nói chuyện dễ thương",
      likeComment: 2,
    },
    {
      id: 3,
      isLiked: false,
      avatar:
        "https://i.pinimg.com/474x/b0/86/1e/b0861e61d7f872e983429ce37ea27ba5.jpg",
      userName: "Trần Trung Hiếu",
      rate: 5,
      comment: "hoạt bát, làm việc gọn gàng",
      likeComment: 1,
    },
    {
      id: 4,
      isLiked: false,
      avatar:
        "https://i.pinimg.com/474x/8b/5f/c3/8b5fc3b2ca040e0fc20f1c8a19f6c282.jpg",
      userName: "Cao Văn Diện",
      rate: 5,
      comment: "Sạch sẽ, gọn gàng, hoạt bát , giá rẻ",
      likeComment: 1,
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Đánh giá</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text>
          {listFeedback.map((item) => (
            <Feedback
              id={item.id}
              key={item.id}
              avatar={item.avatar}
              userName={item.userName}
              rate={item.rate}
              comment={item.comment}
              like={item.likeComment}
            />
          ))}
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingTop: 8,
    marginRight: "auto",
    width: screenWidth,
    height: screenHeight * 0.635,
    paddingLeft: 8,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Rating;
