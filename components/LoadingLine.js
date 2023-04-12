import {View} from "react-native";
import colors from "../utils/colors";

const LoadingLine = (props) => {
    const {width, height = 12} = props;

    return (
        <View style={{height: height, width: `${width}%`, backgroundColor: colors.gray2, borderRadius: 100}}></View>
    )
}

export default LoadingLine