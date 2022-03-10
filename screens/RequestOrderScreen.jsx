import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Flex, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const RequestOrderScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backIconButton}>
        <IconButton
          onPress={() => navigation.goBack()}
          icon={
            <Ionicons
              name="chevron-back-circle-outline"
              color={"black"}
              size={23}
            />
          }
        />
      </View>
      <View>
        <Text>Request order screen</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "red",
  },
  backIconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height: 40,
    width: 40,
    marginTop: 12,
  },
});
export default RequestOrderScreen;
