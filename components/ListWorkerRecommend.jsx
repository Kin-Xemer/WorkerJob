import { useState, useEffect, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Dimensions, StyleSheet } from "react-native";
import WorkerRecommend from "./WorkerRecommend";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ListWorkerRecommend = (props) => {
  const { listWorker } = props;
  const [activeSlide, setActiveSlide] = useState(1);
  const carousel = useRef();
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
        enableSnap={true}
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
    maxWidth: "100%",
  },
});
export default ListWorkerRecommend;
