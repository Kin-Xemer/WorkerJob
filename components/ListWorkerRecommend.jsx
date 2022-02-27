import { useState, useEffect, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Dimensions, StyleSheet } from "react-native";
import WorkerRecommend from "./WorkerRecommend";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ListWorkerRecommend = (props) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const carousel = useRef();
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
      avt: "https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1645553516~hmac=bade330b13f542f9ad8122bbda8527c6",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706830.png?token=exp=1645553516~hmac=bb87476a18db476154fb8aba8e5820d7",
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
      avt: "https://cdn-icons.flaticon.com/png/128/4140/premium/4140048.png?token=exp=1645553516~hmac=3699219c52d5900e8c5c736a1907be87",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706821.png?token=exp=1645553516~hmac=6a9a20665e58ba1bb512979e4d18f0dc",
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
      avt: "https://cdn-icons.flaticon.com/png/128/4140/premium/4140051.png?token=exp=1645556158~hmac=31d9c9bf6949e3d3cbc9c1ecfcea2e45",
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
      avt: "https://cdn-icons.flaticon.com/png/512/706/premium/706835.png?token=exp=1645556272~hmac=f591464279158611b864bffe99e5bfb5",
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
      avt: "https://cdn-icons.flaticon.com/png/128/706/premium/706799.png?token=exp=1645556272~hmac=4388edebd4c0bc7447bcf7e1e3c6c040",
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
      avt: "https://cdn-icons.flaticon.com/png/128/4140/premium/4140046.png?token=exp=1645559670~hmac=0ac41214cd69659cbcbea8a403a49aa2",
      minPrice: 45000,
    },
  ]);
  var slides = [];

  const getAmountServices = (listServices) => {
    var count = 0;
    for (var i = 0; i < listServices.length; i++) {
      count++;
    }
    return count;
  };
  const entriesSplitter = () => {
    let size = 2;
    while (listWorker.length > 0) {
      slides.push(listWorker.splice(0, size));
    }
  };
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {item.map((item) => {
          return (
            <View key={item.id} style={styles.container}>
              <WorkerRecommend worker={item} />
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View>
      {entriesSplitter()}
      <Carousel
        activeAnimationType="spring"
        ref={carousel}
        data={slides}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        sliderHeight={screenHeight}
        itemWidth={screenWidth}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    marginHorizontal: 4,
    maxWidth: "100%",
  },
});
export default ListWorkerRecommend;
