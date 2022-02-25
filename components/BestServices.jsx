import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { convertStar } from "../Utils/convertStar";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Input,
  Icon,
  Pressable,
  Box,
  HStack,
  Button,
  Text,
  Flex,
  Spacer,
} from "native-base";
const BestServices = (props) => {
  const { bestService } = props;
  return (
    <Pressable style={styles.container}>
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
            pt={5}
            pb={5}
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
            <HStack alignItems="center"></HStack>
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
