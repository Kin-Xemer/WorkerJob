import { React, createContext } from "react";
import { Flex, Spacer, Box, Center, IconButton } from "native-base";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { useState, useEffect, useRef } from "react";
import { Input, Icon } from "native-base";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Context = createContext();
const Header = (props) => {
  let { resultProps, setSearchResult } = props;
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    resultProps = searchValue;
    console.log(resultProps);
  }, [searchValue]);
  const inputRef = useRef(false);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <View style={styles.backIconButton}>
          <IconButton
            disabled={true}
            icon={
              <Ionicons name="arrow-back-outline" color={"black"} size={30} />
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.textHeader}>
        <Text style={styles.textStyleHeader}>Bạn muốn sửa gì ?</Text>
      </View>
      <View style={styles.textInput}>
        <Input
          ref={inputRef}
          mt={0.5}
          size="xl"
          borderWidth={0}
          onChangeText={(text) => {
            setSearchResult(text);
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="search" />}
              size={8}
              ml="2"
              color="coolGray.300"
            />
          }
          placeholder="Tìm từ khóa"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    marginTop: 12,
    height: 45,
    borderRadius: 30,
    width: screenWidth * 0.94,
    backgroundColor: "#f0f0f0",
  },
  container: {
    backgroundColor: "white",
  },
  backIconButton: {
    zIndex: 1,
    position: "absolute",
    height: 45,
    width: 45,
    marginLeft: -8,
  },
  textHeader: {
    marginTop: 12,
    width: screenWidth * 0.9,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyleHeader: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default Header;
