import { View, StyleSheet, Dimensions, Alert } from "react-native";
import { Flex, IconButton, Text, Divider } from "native-base";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DividerFullWidth from "../DividerFullWidth";
import { useState, useEffect } from "react";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Header = (props) => {
  const [listWorker, setListWorker] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 4.6,
      listService: [
        {
          serviceId: 1,
          jobId: 2,
          serviceName: "Vệ sinh máy lạnh",
          rating: 4.2,
          ratingAmount: 5,
          price: 200000,
        },
        {
          serviceId: 2,
          jobId: 5,
          serviceName: "Sửa chữa đường ống nước",
          rating: 4.89,
          ratingAmount: 8,
          price: 150000,
        },
      ],
      ratingAmount: 0,
      avt: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
      minPrice: 150000,
    },
    {
      id: 2,
      workerName: "Nguyễn Hoàng Nam",
      workerId: "nam123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 5,
          serviceName: "Thay ống nước, cấp nước",
          rating: 4.2,
          ratingAmount: 5,
          price: 150000,
        },
        {
          serviceId: 2,
          jobId: 5,
          serviceName: "Sửa chữa đường ống nước",
          rating: 4.89,
          ratingAmount: 8,
          price: 150000,
        },
      ],
      ratingAmount: 50,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
      minPrice: 150000,
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 6,
          serviceName: "Dọn dẹp nhà cửa",
          rating: 4.2,
          ratingAmount: 5,
          price: 90000,
        },
        {
          serviceId: 2,
          jobId: 9,
          serviceName: "Làm đẹp, trang điểm cô dâu ",
          rating: 4.89,
          ratingAmount: 8,
          price: 350000,
        },
      ],
      ratingAmount: 25,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154434.png",
      minPrice: 90000,
    },
    {
      id: 4,
      workerName: "Trần Trung Hiếu",
      workerId: "hieu123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 5,
          serviceName: "Thay máy lạnh",
          rating: 4.2,
          ratingAmount: 5,
          price: 1000000,
        },
        {
          serviceId: 2,
          jobId: 8,
          serviceName: "Sửa khóa, phá khóa",
          rating: 4.89,
          ratingAmount: 8,
          price: 150000,
        },
      ],
      ratingAmount: 20,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154466.png",
      minPrice: 150000,
    },
    {
      id: 5,
      workerName: "Nguyễn Đức Hoàng",
      workerId: "hoang123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 4,
          serviceName: "Chuyển nhà, chuyển trọ",
          rating: 4.2,
          ratingAmount: 5,
          price: 200000,
        },
        {
          serviceId: 2,
          jobId: 7,
          serviceName: "Sửa xe chuyên dụng",
          rating: 4.89,
          ratingAmount: 8,
          price: 50000,
        },
      ],
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/128/3011/3011270.png",
      minPrice: 50000,
    },
    {
      id: 6,
      workerName: "Nguyễn Mạnh Kiên",
      workerId: "kien123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 2,
          serviceName: "Sửa, thay máy nước nóng",
          rating: 4.2,
          ratingAmount: 5,
          price: 600000,
        },
        {
          serviceId: 2,
          jobId: 5,
          serviceName: "Sửa chữa đường ống nước",
          rating: 4.89,
          ratingAmount: 8,
          price: 150000,
        },
        {
          serviceId: 3,
          jobId: 5,
          serviceName: "Sửa chữa, sơn nhà cửa",
          rating: 4.89,
          ratingAmount: 8,
          price: 300000,
        },
      ],
      ratingAmount: 16,
      avt: "https://cdn-icons-png.flaticon.com/128/206/206856.png",
      minPrice: 150000,
    },
    {
      id: 7,
      workerName: "Nguyễn Minh Đạt",
      workerId: "dat123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 7,
          serviceName: "Vá xe, thay lốp",
          rating: 4.2,
          ratingAmount: 5,
          price: 50000,
        },
        {
          serviceId: 2,
          jobId: 3,
          serviceName: "Sửa máy tính, laptop",
          rating: 4.89,
          ratingAmount: 8,
          price: 150000,
        },
      ],
      ratingAmount: 19,
      avt: "https://cdn-icons-png.flaticon.com/128/219/219970.png",
      minPrice: 50000,
    },
    {
      id: 8,
      workerName: "Huỳnh Xuân Cường",
      workerId: "cuong123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 1,
          serviceName: "Thay la phông, trần thạch cao",
          rating: 4.2,
          ratingAmount: 5,
          price: 500000,
        },
        {
          serviceId: 2,
          jobId: 3,
          serviceName: "Sửa đồ điện tử",
          rating: 4.89,
          ratingAmount: 8,
          price: 300000,
        },
      ],
      ratingAmount: 42,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154470.png",
      minPrice: 300000,
    },
    {
      id: 9,
      workerName: "Huỳnh Thị Ngọc Thảo",
      workerId: "thao123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 9,
          serviceName: "Làm tóc, làm nail",
          rating: 4.2,
          ratingAmount: 5,
          price: 200000,
        },
        {
          serviceId: 2,
          jobId: 9,
          serviceName: "Làm đẹp, trang điểm",
          rating: 4.89,
          ratingAmount: 8,
          price: 400000,
        },
      ],
      ratingAmount: 12,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154449.png",
      minPrice: 200000,
    },
    {
      id: 10,
      workerName: "Nguyễn Thị Thùy Linh",
      workerId: "linh123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 6,
          serviceName: "Dọn vệ sinh",
          rating: 4.2,
          ratingAmount: 5,
          price: 100000,
        },
        {
          serviceId: 2,
          jobId: 6,
          serviceName: "Lau nhà quét nhà",
          rating: 4.89,
          ratingAmount: 8,
          price: 90000,
        },
      ],
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
      minPrice: 90000,
    },
    {
      id: 11,
      workerName: "Nguyễn Đức Tài",
      workerId: "tai123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 3,
          serviceName: "Sửa điện thoại laptop",
          rating: 4.2,
          ratingAmount: 5,
          price: 250000,
        },
        {
          serviceId: 2,
          jobId: 5,
          serviceName: "Sửa chữa đường ống nước",
          rating: 4.89,
          ratingAmount: 8,
          price: 250000,
        },
      ],
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154455.png",
      minPrice: 250000,
    },
    {
      id: 12,
      workerName: "Nguyễn Anh Tú",
      workerId: "tu123",
      rating: 5,
      listService: [
        {
          serviceId: 1,
          jobId: 7,
          serviceName: "Vá lốp , sửa xe",
          rating: 4.2,
          ratingAmount: 5,
          price: 45000,
        },
        {
          serviceId: 2,
          jobId: 2,
          serviceName: "Sửa điều hòa",
          rating: 4.89,
          ratingAmount: 8,
          price: 200000,
        },
      ],
      ratingAmount: 15,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154469.png",
      minPrice: 45000,
    },
  ]);
  const { bestService } = props;
  const navigation = useNavigation();
  var getWorkerById = () => {
    for (let i = 0; i < listWorker.length; i++) {
      if (listWorker[i].workerId === bestService.workerId) {
        return listWorker[i];
      }
    }
  };
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
      <View>
        <Text style={styles.textStyle}>{bestService.serviceName}</Text>
      </View>
      <Flex direction="row" paddingTop={2}>
        <Text
          color="gray.600"
          fontWeight="400"
          onPress={() => {
            navigation.push("WorkerInformation", {
              worker: getWorkerById(),
            });
          }}
        >
          {bestService.workerName}
        </Text>
        <View style={{ paddingTop: 1 }}>
          <MaterialIcons name="navigate-next" size={20} color="gray" />
        </View>
      </Flex>
      <Flex direction="row" paddingTop={1}>
        <Text
          width={screenWidth / 2.5}
          color="black"
          fontWeight="bold"
          fontSize="24"
        >
          {bestService.price / 1000}.000 VNĐ
        </Text>
        <Divider
          mt={1}
          h={6}
          bg="coolGray.400"
          orientation="vertical"
          mx="3"
          thickness="2"
        />
        <Flex direction="row">
          <Text mt={1} fontSize={18} width={screenWidth / 4}>
            {" "}
            <AntDesign name="star" size={18} color="#02b2b9" />{" "}
            {bestService.rating}/5
          </Text>
          <View style={styles.heartStyle}>
            <AntDesign
              styles={{ alignItems: "flex-end" }}
              name="hearto"
              size={18}
              color="black"
            />
          </View>
        </Flex>
      </Flex>
      <DividerFullWidth />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: "auto",
    width: screenWidth,
    paddingLeft: 8,
    paddingTop: 25,
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    height: 40,
    width: 40,
    marginTop: 8,
  },
  textStyle: {
    paddingTop: 12,
    fontWeight: "800",
    fontSize: 24,
  },
  heartStyle: {
    width: screenWidth / 4,
    marginTop: 7,
    paddingLeft: 8,
    alignItems: "flex-end",
  },
});
export default Header;
