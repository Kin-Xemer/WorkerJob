import { Flex, Spacer, Box, Center, IconButton } from "native-base";
import { Text, StyleSheet, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/SearchScreen/Header";
import SearchResult from "../components/SearchScreen/SearchResult";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SearchScreen = (props) => {
  const checkResult = (a) => {
    console.log("this is log on parant" + a);
  };
  return (
    <View style={styles.container}>
      <Header />
      <SearchResult result={checkResult.bind(this)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: screenHeight + 50,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 32,
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
  },
});
export default SearchScreen;
