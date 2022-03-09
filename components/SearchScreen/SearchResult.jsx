import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import BestServices from "../BestServices";
import ButtonToggleGroup from "react-native-button-toggle-group";
import DividerFullWidth from "../DividerFullWidth";
import ButtonGroup from "../ButtonGroup";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SearchResult = (props) => {
  const [valueButton, setValueButton] = useState("Liên quan");
  const { searchValue } = props;
  var [listResultSearch, setListResultSearch] = useState([]);
  const [bestService, setBestService] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 4.86,
      jobId: 2,
      serviceName: "Vệ sinh máy lạnh",
      ratingAmount: 8,
      price: 140000,
      avt: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
      description: "Dọn dẹp máy lạnh vệ sinh máy lạnh",
    },
    {
      id: 2,
      workerName: "Nguyễn Hoàng Nam",
      workerId: "nam123",
      rating: 4.88,
      jobId: 5,
      serviceName: "Sửa chữa đường ống nước",
      ratingAmount: 50,
      price: 135000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
      description: "Thay ống nước, sửa ống cấp",
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 4.6,
      jobId: 6,
      serviceName: "Dọn vệ sinh nhà cửa",
      ratingAmount: 25,
      price: 100000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154434.png",
      description: "Quét dọn, lau nhà, làm vườn",
    },
    {
      id: 4,
      workerName: "Trần Trung Hiếu",
      workerId: "hieu123",
      rating: 4.68,
      jobId: 2,
      serviceName: "Vệ sinh máy lạnh",
      ratingAmount: 20,
      price: 110000,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154466.png",
      description: "Thay máy lạnh, vệ sinh máy lạnh",
    },
    {
      id: 5,
      workerName: "Nguyễn Đức Hoàng",
      workerId: "hoang123",
      rating: 4.75,
      jobId: 4,
      serviceName: "Chuyển nhà , đồ đạc",
      price: 0,
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154468.png",
      description: "Nhận dịch vụ chuyển trọ, chuyển nhà cửa",
    },
    {
      id: 6,
      workerName: "Nguyễn Mạnh Kiên",
      workerId: "kien123",
      rating: 4.96,
      jobId: 8,
      serviceName: "Sửa khóa, đánh khóa",
      price: 0,
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154459.png",
      description: "Sủa khóa, làm chìa, phá khóa nhà cửa",
    },
    {
      id: 7,
      workerName: "Nguyễn Minh Đạt",
      workerId: "dat123",
      rating: 4.88,
      jobId: 5,
      serviceName: "Thay đường ống",
      price: 240000,
      ratingAmount: 19,
      avt: "https://cdn-icons-png.flaticon.com/128/219/219970.png",
      description: "Thay ống nước, sửa điện nước",
    },
    {
      id: 8,
      workerName: "Huỳnh Xuân Cường",
      workerId: "cuong123",
      rating: 4.76,
      jobId: 3,
      serviceName: "Lắp đặt camera",
      price: 0,
      ratingAmount: 42,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154470.png",
      description: "Lắp đặt cấu hình modem, camera",
    },
    {
      id: 9,
      workerName: "Huỳnh Thị Ngọc Thảo",
      workerId: "thao123",
      rating: 4.87,
      jobId: 9,
      serviceName: "Làm móng tay, trang điểm",
      price: 240000,
      ratingAmount: 12,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154449.png",
      description:
        "Nhận trang điểm cô dâu, trang điểm đi ăn đám cưới, làm móng gội đầu",
    },
    {
      id: 10,
      workerName: "Nguyễn Thị Thùy Linh",
      workerId: "linh123",
      rating: 4.69,
      jobId: 6,
      serviceName: "Dọn bếp, dọn nhà",
      price: 95000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
      description: "Quét dọn lau chùi nhà cửa",
    },
    {
      id: 11,
      workerName: "Nguyễn Đức Tài",
      workerId: "tai123",
      rating: 4.85,
      jobId: 3,
      serviceName: "Sửa điện thoại, laptop",
      price: 0,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154455.png",
      description: "Thay pin, thay màn hình, sửa nguồn, sửa main",
    },
    {
      id: 12,
      workerName: "Nguyễn Anh Tú",
      workerId: "tu123",
      rating: 4.95,
      jobId: 7,
      serviceName: "Vá lốp, sửa xe",
      price: 500000,
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154469.png",
      description: "sửa xe, vá xe",
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
  useEffect(() => {
    listResultSearchValue(searchValue);
  }, [searchValue]);

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
  const checkButton = (value) => {
    console.log(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewGroupButton}>
        <View>
          <DividerFullWidth />
        </View>
        <ButtonGroup
          highlightBackgroundColor={"transparent"}
          highlightTextColor={"#02b2b9"}
          inactiveBackgroundColor={"transparent"}
          inactiveTextColor={"grey"}
          textStyle={{ fontSize: 15 }}
          values={["Liên quan", "Gần nhất", "Giá", "Đánh giá"]}
          value={valueButton}
          onSelect={(val) => {
            checkButton(val);
            setValueButton(val);
          }}
        />
      </View>
      <View style={{ marginTop: 8, height: screenHeight * 0.73 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={listResultSearch}
          renderItem={({ item }) => (
            <BestServices bestService={item} width={screenWidth * 0.94} />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  viewGroupButton: {
    justifyContent: "center",
    height: 64,
    width: screenWidth,
  },
});
export default SearchResult;
