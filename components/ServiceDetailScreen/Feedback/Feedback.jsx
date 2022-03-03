import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {
  Box,
  Heading,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Flex,
  Spacer,
} from "native-base";
import { useState, useEffect } from "react";
import { AirbnbRating } from "react-native-ratings";
import { convertStar } from "../../../Utils/convertStar";
import { AntDesign, Feather } from "@expo/vector-icons";
import OptionsMenu from "react-native-option-menu";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Feedback = (props) => {
  const { userName, rate, like, avatar, comment } = props;
  const [isLiked, setIsLiked] = useState(false);
  const toggleSwitch = () => {
    setIsLiked((previousState) => !previousState);
  };
  return (
    <Box alignItems="center">
      <Box
        style={styles.container}
        w={screenWidth - 16}
        rounded={30}
        borderColor="coolGray.300"
        borderWidth="1"
        overflow="hidden"
      >
        <Stack p="4" space={3}>
          <Flex direction="row">
            <Center>
              <Image
                size={10}
                resizeMode={"contain"}
                borderRadius={300}
                source={{
                  uri: avatar,
                }}
                alt="Alternate Text"
              />
            </Center>
            <Box marginTop={2} ml={3}>
              <Stack space={2}>
                <Heading size="xs">{userName}</Heading>
                <Box
                  style={{
                    alignItems: "flex-start",
                    marginTop: -7,
                    marginLeft: -4,
                  }}
                >
                  <AirbnbRating
                    isDisabled={true}
                    count={5}
                    defaultRating={convertStar(rate)}
                    size={12}
                    showRating={false}
                  />
                </Box>
              </Stack>
            </Box>
            <Spacer />
            <Flex direction="row">
              <Box
                style={{
                  marginRight: 8,
                  justifyContent: "center",
                  marginTop: 4,
                }}
              >
                <Text fontSize={14}>{like}</Text>
              </Box>
              <Center style={{ marginRight: 16 }}>
                <TouchableOpacity
                  onPress={() => {
                    toggleSwitch();
                  }}
                >
                  {isLiked ? (
                    <AntDesign name="like1" size={18} color="#02b2b9" />
                  ) : (
                    <AntDesign name="like2" size={18} color="black" />
                  )}
                </TouchableOpacity>
              </Center>
              <Center>
                <OptionsMenu
                  customButton={
                    <Feather name="more-vertical" size={25} color="black" />
                  }
                  buttonStyle={{
                    width: 32,
                    height: 8,
                    margin: 7.5,
                    resizeMode: "contain",
                  }}
                  destructiveIndex={1}
                  options={["Gắn cờ"]}
                  //   actions={[editPost, deletePost]}
                />
              </Center>
            </Flex>
          </Flex>
          <Text fontSize={15}>{comment}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.400" fontWeight="400">
                15/2/2022
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    flex: 1,
  },
});
export default Feedback;
