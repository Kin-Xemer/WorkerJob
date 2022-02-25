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
  return (
    <View style={styles.container}>
      <View>
        <HeaderSearch />
        <View style={{ maxHeight: 50, marginStart: -12, marginTop: -12 }}>
          <DividerBar dividerName={job.jobName} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LabelRecommend recommendText="Worker Job giới thiệu" />
        <View style={{ maxHeight: 220 }}>
          <ListWorkerRecommend />
        </View>
        <LabelRecommend recommendText="Đánh giá cao" />
        <View style={{ maxHeight: 220 }}>
          <ListWorkerRecommend />
        </View>
        <LabelRecommend recommendText="Giá tốt nhất" />
        <View style={{ maxHeight: 220 }}>
          <ListWorkerRecommend />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
});
export default ServicesRecommend;
