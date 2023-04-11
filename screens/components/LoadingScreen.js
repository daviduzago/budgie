import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Input from "../../components/Input"
import InputAbs from "../../components/InputAbs"
import Loading from "../../components/Loading";
import colors from "../../utils/colors";
import Typography from "../../components/Typography";

function LoadingScreen() {
    const [percent, setPercent] = React.useState(0);
    // increment percent from 0 to 100 in 5 seconds and then restart
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (percent < 100) {
                setPercent(percent + 1);
            } else {
                setPercent(0);
            }
        }, 1);
        return () => clearInterval(interval);
    }, [percent]);
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Typography normal variant="heading2">Bar Progress Loading</Typography>
                <Spacer />
                <Loading percent={percent} color={colors.grayPrimary} />
                <Spacer />
                <Typography normal variant="heading2">Spinner Loading</Typography>
                <Spacer />
                <Loading spinner size={40} color={colors.grayPrimary} />
            </View>
        </Wrapper>
    );
}

export default LoadingScreen;