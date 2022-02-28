import { View, StyleSheet, Alert } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { convertStar } from "../Utils/convertStar";
import { Pressable, Box, Button, Text, Flex, Spacer } from "native-base";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const BestServices = (props) => {
  const { bestService } = props;
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Pressable
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
            maxW="96"
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
              transform: [
                {
                  scale: isPressed ? 0.98 : 1,
                },
              ],
            }}
          >
            <Text color="coolGray.800" mt="1" fontWeight="bold" fontSize="xl">
              {bestService.serviceName}
            </Text>
            <Text mt="2" fontSize={10} color="coolGray.400">
              {bestService.workerName}
            </Text>
            {bestService.ratingAmount === 0 ? (
              <Text mt="2" fontSize="sm" color="coolGray.600">
                Chưa có đánh giá
              </Text>
            ) : (
              <View style={{ alignItems: "flex-start", marginRight: "auto" }}>
                <AirbnbRating
                  isDisabled={true}
                  count={5}
                  defaultRating={convertStar(bestService.rating)}
                  size={20}
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
                <Text fontWeight="thin" pr={8} pl={8}>
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
    maxWidth: "100%",
  },
});
export default BestServices;
