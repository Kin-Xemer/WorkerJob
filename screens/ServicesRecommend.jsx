import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { ScrollView } from "native-base";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import HeaderSearch from "../components/HeaderSearch";
import DividerBar from "../components/DividerBar";
import Servies from "../components/Services";
import ListWorkerRecommend from "../components/ListWorkerRecommend";
import ListBestServies from "../components/ListBestServies";
import LabelRecommend from "../components/LabelRecommend";
const ServicesRecommend = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [job, setJob] = useState(route.params.job);
  const [listWorker, setListWorker] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 0,
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
      minPrice: 0,
    },
    {
      id: 2,
      workerName: "Nguyễn Hoàng Nam",
      workerId: "nam123",
      rating: 4.68,
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
      ratingAmount: 13,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
      minPrice: 150000,
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 4.58,
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
      rating: 4.75,
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
      minPrice: 0,
    },
    {
      id: 5,
      workerName: "Nguyễn Đức Hoàng",
      workerId: "hoang123",
      rating: 4.69,
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
      rating: 4.88,
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
      minPrice: 0,
    },
    {
      id: 7,
      workerName: "Nguyễn Minh Đạt",
      workerId: "dat123",
      rating: 4.68,
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
      rating: 4.77,
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
      minPrice: 0,
    },
    {
      id: 9,
      workerName: "Huỳnh Thị Ngọc Thảo",
      workerId: "thao123",
      rating: 4.73,
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
      rating: 4.82,
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
      rating: 4.89,
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
      rating: 4.87,
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

  const [listBestRate, setListBestRate] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 0,
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
      minPrice: 0,
    },
    {
      id: 2,
      workerName: "Nguyễn Hoàng Nam",
      workerId: "nam123",
      rating: 4.68,
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
      ratingAmount: 13,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
      minPrice: 150000,
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 4.58,
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
      rating: 4.75,
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
      minPrice: 0,
    },
    {
      id: 5,
      workerName: "Nguyễn Đức Hoàng",
      workerId: "hoang123",
      rating: 4.69,
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
      rating: 4.88,
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
      minPrice: 0,
    },
    {
      id: 7,
      workerName: "Nguyễn Minh Đạt",
      workerId: "dat123",
      rating: 4.68,
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
      rating: 4.77,
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
      minPrice: 0,
    },
    {
      id: 9,
      workerName: "Huỳnh Thị Ngọc Thảo",
      workerId: "thao123",
      rating: 4.73,
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
      rating: 4.82,
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
      rating: 4.89,
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
      rating: 4.87,
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
  const [listBestPrice, setListBestPrice] = useState([
    {
      id: 1,
      workerName: "Nguyễn Duy Khang",
      workerId: "khang123",
      rating: 0,
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
      rating: 4.68,
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
      ratingAmount: 13,
      avt: "https://cdn-icons-png.flaticon.com/512/1154/1154461.png",
      minPrice: 150000,
    },
    {
      id: 3,
      workerName: "Lương Nhật Minh",
      workerId: "minh123",
      rating: 4.58,
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
      rating: 4.75,
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
      rating: 4.69,
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
      rating: 4.88,
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
      rating: 4.68,
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
      rating: 4.77,
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
      rating: 4.73,
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
      rating: 4.82,
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
      rating: 4.89,
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
      rating: 4.87,
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

  function compare(a, b) {
    var typeA = a.rating;
    var typeB = b.rating;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison * -1;
  }
  function comparePrice(a, b) {
    var typeA = a.minPrice;
    var typeB = b.minPrice;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison;
  }
  const getListBestRate = () => {
    listBestRate.sort(compare);
  };
  const getListBestPrice = () => {
    listBestPrice.sort(comparePrice);
  };
  return (
    <View style={styles.container}>
      {getListBestRate()}
      {getListBestPrice()}
      <View>
        <HeaderSearch />
        <View style={{ maxHeight: 50, marginStart: -12, marginTop: -12 }}>
          <DividerBar dividerName={job.jobName} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LabelRecommend recommendText="Worker Job giới thiệu" />
        <View style={{ maxHeight: 220 }}>
          <ListWorkerRecommend listWorker={listWorker} />
        </View>
        <LabelRecommend recommendText="Đánh giá cao" />
        <View style={{ maxHeight: 220 }}>
          <ListWorkerRecommend listWorker={listBestRate} />
        </View>
        <LabelRecommend recommendText="Giá tốt nhất" />
        <View style={{ maxHeight: 220 }}>
          <ListWorkerRecommend listWorker={listBestPrice} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "flex-start",
  },
});
export default ServicesRecommend;
