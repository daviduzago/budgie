import {BackHandler, StyleSheet, View} from 'react-native';
import colors from '../utils/colors';
import LottieView from 'lottie-react-native';
import React from 'react';
import Spacer from "../utils/Spacer"
import Typography from '../components/Typography';

function PreparingOrder({navigation}) {
    const animation = React.useRef(null);

    React.useEffect(() => {
        const backAction = () => {
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                }}
                source={require("../assets/lottie-files/cooking.json")}
            />
            <Typography color="white" variant="heading1">Just a moment...</Typography>
            <Spacer />
            <Typography light color="white" variant="body">Preparing your perfect meal!</Typography>
        </View>
    )
}

export default PreparingOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayPrimary,
        justifyContent: "center",
        alignItems: "center"
    }
})