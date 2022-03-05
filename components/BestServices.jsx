import { View, StyleSheet, Dimensions } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { convertStar } from "../Utils/convertStar";
import { Pressable, Box, Button, Text, Flex, Spacer } from "native-base";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const BestServices = (props) => {
  const { bestService, width } = props;
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Pressable
      width={width}
      style={styles.container}
      onPress={() => {
        navigation.navigate("ServiceDetailScreen", {
          bestService: bestService,
        });
      }}
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            maxW={screenWidth}
            borderWidth="0.7"
            borderColor="coolGray.300"
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.100"
            }
            pt={3}
            pb={3}
            pl={3}
            pr={3}
            rounded="12"
            style={{
              backgroundColor: "white",
            }}
          >
            <Text color="coolGray.800" mt="1" fontWeight="bold" fontSize="xl">
              {bestService.serviceName}
            </Text>
            <Text bold mt="2" mb={1} fontSize={12} color="coolGray.400">
              {bestService.workerName}
            </Text>
            {bestService.ratingAmount === 0 ? (
              <Text mt="2" fontSize="sm" color="coolGray.600">
                Chưa có đánh giá
              </Text>
            ) : (
              <View style={{ alignItems: "flex-start", marginLeft: -5 }}>
                <AirbnbRating
                  selectedColor="gold"
                  isDisabled={true}
                  count={5}
                  defaultRating={convertStar(bestService.rating)}
                  size={18}
                  showRating={false}
                />
              </View>
            )}
            <Flex direction="row">
              <Text
                mt="2"
                pr="8"
                fontSize={20}
                fontWeight="bold"
                color="#FF6347"
              >
                {bestService.price / 1000} K
              </Text>
              <Spacer />
              <Button colorScheme="rgb(2, 178, 185)" size="xs">
                <Text fontWeight="thin" pr={8} pl={8} color="#fff">
                  LẤY BÁO GIÁ
                </Text>
              </Button>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
export default BestServices;
