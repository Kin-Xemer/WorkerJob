import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import { List, ListItem } from "native-base";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import BestServices from "./BestServices";
const ListBestServies = (props) => {
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
      avt: "https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1645553516~hmac=bade330b13f542f9ad8122bbda8527c6",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706830.png?token=exp=1645553516~hmac=bb87476a18db476154fb8aba8e5820d7",
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
      avt: "https://cdn-icons.flaticon.com/png/128/4140/premium/4140048.png?token=exp=1645553516~hmac=3699219c52d5900e8c5c736a1907be87",
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
      avt: "https://cdn-icons-png.flaticon.com/128/3011/3011270.png",
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
      avt: "https://cdn-icons.flaticon.com/png/128/4140/premium/4140061.png?token=exp=1645553516~hmac=60a3d841184e5b4e7417648edafb9199",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706821.png?token=exp=1645553516~hmac=6a9a20665e58ba1bb512979e4d18f0dc",
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
      avt: "https://cdn-icons.flaticon.com/png/128/4140/premium/4140051.png?token=exp=1645556158~hmac=31d9c9bf6949e3d3cbc9c1ecfcea2e45",
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
      avt: "https://cdn-icons.flaticon.com/png/512/706/premium/706835.png?token=exp=1645556272~hmac=f591464279158611b864bffe99e5bfb5",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706799.png?token=exp=1645556272~hmac=4388edebd4c0bc7447bcf7e1e3c6c040",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706799.png?token=exp=1645556272~hmac=4388edebd4c0bc7447bcf7e1e3c6c040",
    },
  ]);
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        snapToInterval={1}
        decelerationRate="fast"
        snapToAlignment="center"
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "transparent",
        }}
      >
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          numColumns={Math.ceil(bestService.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={bestService}
          renderItem={({ item }) => <BestServices bestService={item} />}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 3, paddingRight: "auto" }}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 10,
    marginRight: "auto",
    maxWidth: "100%",
  },
});
export default ListBestServies;
