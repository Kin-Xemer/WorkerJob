import {
  Box,
  Heading,
  Image,
  Text,
  Center,
  Stack,
  Pressable,
  HStack,
  Button,
  Flex,
  Spacer,
} from "native-base";
import {
  View,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Rating, AirbnbRating } from "react-native-ratings";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const WorkerRecommend = (props) => {
  const navigation = useNavigation();
  const { worker } = props;
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("WorkerInformation", {
          workerId: worker.id,
          worker: worker,
        })
      }
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            bg={"white"}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.99 : 1,
                },
              ],
            }}
            h={screenHeight / 4 - 3}
            w={screenWidth / 2 - 16}
            maxW={screenWidth}
            rounded={25}
            overflow="hidden"
            borderColor="coolGray.300"
            borderWidth="1"
            mb={-1}
          >
            <Stack
              pr="8"
              pl="8"
              pt="8"
              pb="8"
              space={3}
              direction="row"
              maxHeight="100%"
            >
              <Center>
                <Stack space={3}>
                  <Box alignItems="center">
                    <Image
                      size={82}
                      borderRadius={25}
                      source={{
                        uri: worker.avt,
                      }}
                      alt="Alternate Text"
                    />
                  </Box>
                  <Box alignItems="center">
                    <Heading size="xs">{worker.workerName}</Heading>
                  </Box>
                  <Stack space={2} alignItems="center">
                    {worker.ratingAmount === 0 ? (
                      <Box alignItems="center" mb={2} mt={1}>
                        <Text fontSize={12}>Chưa có đánh giá</Text>
                      </Box>
                    ) : (
                      <View
                        style={{ alignItems: "center", marginRight: "auto" }}
                      >
                        <AirbnbRating
                          count={5}
                          defaultRating={worker.rating}
                          size={20}
                          showRating={false}
                        />
                      </View>
                    )}
                    <Text fontWeight="bold" marginBottom={2}>
                      <Text fontWeight="normal">Giá từ: </Text>
                      {worker.minPrice / 1000} K
                    </Text>
                  </Stack>
                </Stack>
              </Center>
            </Stack>
          </Box>
        );
      }}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginVertical: 8,
    marginHorizontal: 8,
    maxWidth: "100%",
  },
});
export default WorkerRecommend;
