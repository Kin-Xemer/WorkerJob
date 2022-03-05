import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import BestServices from "../BestServices";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SearchResult = (props) => {
  const { searchValue } = props;
  const [bestService, setBestService] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 4.8,
      jobId: 2,
      serviceName: "Vệ sinh máy lạnh",
      ratingAmount: 8,
      price: 140000,
      avt: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
    },
    {
      id: 2,
      workerName: "Nguyễn Hoàng Nam",
      workerId: "nam123",
      rating: 5,
      jobId: 5,
      serviceName: "Sửa chữa đường ống nước",
      ratingAmount: 50,
      price: 135000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 5,
      jobId: 6,
      serviceName: "Dọn vệ sinh nhà cửa",
      ratingAmount: 25,
      price: 100000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154434.png",
    },
    {
      id: 4,
      workerName: "Trần Trung Hiếu",
      workerId: "hieu123",
      rating: 5,
      jobId: 2,
      serviceName: "Vệ sinh máy lạnh",
      ratingAmount: 20,
      price: 110000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154466.png",
    },
    {
      id: 5,
      workerName: "Nguyễn Đức Hoàng",
      workerId: "hoang123",
      rating: 5,
      jobId: 4,
      serviceName: "Chuyển nhà , đồ đạc",
      price: 240000,
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154468.png",
    },
    {
      id: 6,
      workerName: "Nguyễn Mạnh Kiên",
      workerId: "kien123",
      rating: 5,
      jobId: 8,
      serviceRole: "Sửa khóa, đánh khóa",
      serviceName: "Sửa máy nước nóng",
      price: 240000,
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154459.png",
    },
    {
      id: 7,
      workerName: "Nguyễn Minh Đạt",
      workerId: "dat123",
      rating: 5,
      jobId: 5,
      serviceName: "Thay đường ống",
      price: 240000,
      ratingAmount: 19,
      avt: "https://cdn-icons-png.flaticon.com/128/219/219970.png",
    },
    {
      id: 8,
      workerName: "Huỳnh Xuân Cường",
      workerId: "cuong123",
      rating: 5,
      jobId: 3,
      serviceName: "Lắp đặt camera",
      price: 240000,
      ratingAmount: 42,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154470.png",
    },
    {
      id: 9,
      workerName: "Huỳnh Thị Ngọc Thảo",
      workerId: "thao123",
      rating: 5,
      jobId: 9,
      serviceName: "Làm nail, make up",
      price: 240000,
      ratingAmount: 12,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154449.png",
    },
    {
      id: 10,
      workerName: "Nguyễn Thị Thùy Linh",
      workerId: "linh123",
      rating: 5,
      jobId: 6,
      serviceName: "Dọn bếp, dọn nhà",
      price: 95000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
    },
    {
      id: 11,
      workerName: "Nguyễn Đức Tài",
      workerId: "tai123",
      rating: 5,
      jobId: 3,
      serviceName: "Sửa điện thoại, laptop",
      price: 500000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154455.png",
    },
    {
      id: 12,
      workerName: "Nguyễn Anh Tú",
      workerId: "tu123",
      rating: 5,
      jobId: 7,
      serviceName: "Vá lốp, sửa xe",
      price: 500000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154469.png",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={bestService}
        renderItem={({ item }) => (
          <BestServices bestService={item} width={screenWidth * 0.9} />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SearchResult;
