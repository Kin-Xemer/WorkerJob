import { useRoute, useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchField from "../components/SearchField";
import Servies from "../components/Services";
import DividerBar from "../components/DividerBar";
import ListBestServies from "../components/ListBestServies";
const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <SearchField />
        <DividerBar dividerName="Dịch vụ" />
        <Servies />
        <DividerBar dividerName="Dịch vụ nổi bật" />
        <ListBestServies />
        <DividerBar dividerName="Mã giảm giá" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "white",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
