import {View, StyleSheet} from "react-native";

import colors from "../utils/colors";
import ROUTES from "../utils/ROUTES";
import Spacer from "../utils/Spacer";
import Typography from "../components/Typography";
import Wrapper from "../components/ui/wrapper";
import Button from "../components/Button";

function Home({navigation}) {
    return (
        <Wrapper hasTopNav={false}>
            <View style={styles.header}>
                <Typography color={"white"} variant={"heading1"}>Components</Typography>
            </View>
            <Spacer x={2} />
            <View style={styles.body}>
                <Button title={"Typography"} onPress={() => navigation.navigate(ROUTES.TYPOGRAPHY)} />
                <Button title={"Buttons"} onPress={() => navigation.navigate(ROUTES.BUTTONS)} />
                <Button title={"Inputs"} onPress={() => navigation.navigate(ROUTES.INPUTS)} />
            </View>
        </Wrapper>
    );
}

export default Home;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: colors.grayPrimary,
        alignItems: "center",
        paddingVertical: 16,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    }
});
