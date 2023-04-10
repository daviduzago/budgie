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
                <Button variant={"outlined"} title={"Typography"} onPress={() => navigation.navigate(ROUTES.TYPOGRAPHY)} />
                <Button variant={"outlined"} title={"Buttons"} onPress={() => navigation.navigate(ROUTES.BUTTONS)} />
                <Button variant={"outlined"} title={"Inputs"} onPress={() => navigation.navigate(ROUTES.INPUTS)} />
                <Button variant={"outlined"} title={"Notifications"} onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS)} />
                <Button variant={"outlined"} title={"Select"} onPress={() => navigation.navigate(ROUTES.SELECT)} />
                <Button variant={"outlined"} title={"Expand"} onPress={() => navigation.navigate(ROUTES.EXPAND)} />
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
    }
});
