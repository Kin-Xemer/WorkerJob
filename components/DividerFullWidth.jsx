import { Divider } from "native-base";
import { Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const DividerFullWidth = (props) => {
  return (
    <Divider
      ml={-8}
      h={1}
      mt={2}
      w={screenWidth + 50}
      bg="#EFEFEF"
      orientation="horizontal"
      thickness="2"
    />
  );
};
export default DividerFullWidth;
