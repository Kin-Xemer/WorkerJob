import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Servies = (props) => {
  const [job, setJob] = useState([
    {
      id: 1,
      jobName: "Nhà cửa",
      iconImage: "https://cdn-icons-png.flaticon.com/512/2942/2942587.png",
    },
    {
      id: 2,
      jobName: "Điện gia dụng",
      iconImage: "https://cdn-icons-png.flaticon.com/512/6265/6265638.png",
    },
    {
      id: 3,
      jobName: "Đồ điện tử",
      iconImage: "https://cdn-icons-png.flaticon.com/512/4982/4982324.png",
    },
    {
      id: 4,
      jobName: "Vận chuyển",
      iconImage:
        "https://cdn-icons.flaticon.com/png/512/3061/premium/3061160.png?token=exp=1645089405~hmac=83c86674ed8b26ccb8760920a0e31649",
    },

    {
      id: 5,
      jobName: "Điện nước",
      iconImage: "https://cdn-icons-png.flaticon.com/512/5188/5188554.png",
    },
    {
      id: 6,
      jobName: "Dọn vệ sinh",
      iconImage:
        "https://cdn-icons.flaticon.com/png/512/4506/premium/4506495.png?token=exp=1645089597~hmac=8bd453523c4f2f2a2e915089d36d010c",
    },
    {
      id: 7,
      jobName: "Sửa xe",
      iconImage: "https://cdn-icons-png.flaticon.com/512/6331/6331739.png",
    },
    {
      id: 8,
      jobName: "Sửa khóa",
      iconImage: "https://cdn-icons-png.flaticon.com/512/2631/2631572.png",
    },
    {
      id: 9,
      jobName: "Làm đẹp",
      iconImage: "https://cdn-icons-png.flaticon.com/512/1940/1940993.png",
    },
  ]);
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        decelerationRate={0}
        snapToInterval={windowWidth}
        snapToAlignment="center"
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={job}
        contentContainerStyle={{
          backgroundColor: "transparent",
        }}
      >
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          numColumns={Math.ceil(job.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={job}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("ServicesRecommend", {
                  jobName: item.jobName,
                  job: item,
                })
              }
            >
              <View style={styles.imageStyle}>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={{ uri: item.iconImage }}
                />
                <View style={styles.jobTitle}>
                  <Text>{item.jobName}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 10, paddingRight: "auto" }}
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
  imageStyle: {
    flex: 1,
    paddingVertical: 8,
    paddingRight: 35,
    marginVertical: 8,
    backgroundColor: "transparent",
  },
  jobTitle: {
    maxWidth: 68,
  },
});
export default Servies;
