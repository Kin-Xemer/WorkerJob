import { useState, useEffect } from "react";
import { Flex, Spacer, Box, Center, IconButton } from "native-base";
import { Text, StyleSheet, Dimensions, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/SearchScreen/Header";
import Finder from "../assets/Finder.png";
import SearchResult from "../components/SearchScreen/SearchResult";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SearchScreen = (props) => {
  const [searchResult, setSearchResult] = useState("");
  return (
    <View style={styles.container}>
      <Header resultProps={searchResult} setSearchResult={setSearchResult} />

      {searchResult ? (
        <SearchResult searchValue={searchResult} />
      ) : (
        <View
          style={{
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={Finder} style={{ width: 128, height: 128 }} />
          <Text style={{ marginTop: 16, fontSize: 16, color: "gray" }}>
            Nhập một vài từ để tìm kiếm WorkerJob nhé.{" "}
          </Text>
        </View>
      )}
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
