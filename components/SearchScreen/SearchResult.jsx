import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import BestServices from "../BestServices";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SearchResult = (props) => {
  const { searchValue } = props;
  useEffect(() => {
    listResultSearchValue(searchValue);
  }, [searchValue]);
  useEffect(() => {}, [searchValue]);
  var [listResultSearch, setListResultSearch] = useState([]);
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
  const formatVN = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.toLowerCase();
    return str;
  };
  var listResult = [];
  const listResultSearchValue = () => {
    for (let i = 0; i < bestService.length; i++) {
      if (
        formatVN(bestService[i].serviceName).includes(formatVN(searchValue))
      ) {
        listResult.push(bestService[i]);
      }
    }
    setListResultSearch(listResult);
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listResultSearch}
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
