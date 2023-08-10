import {View, StyleSheet, Image} from "react-native";

import colors from "../utils/colors";
import ROUTES from "../utils/ROUTES";
import Spacer from "../utils/Spacer";
import Typography from "../components/Typography";
import Wrapper from "../components/ui/wrapper";
import Button from "../components/Button";
import React from "react";
import Icon from "../components/Icon/Index";
import {useSelector} from "react-redux";

function Home({navigation}) {
    const counter = useSelector(state => state.counter.value);
    return (
        <Wrapper hasTopNav>
            <View style={styles.body}>
                <View style={{width: "100%"}}>
                    <Spacer />
                    <Button
                        variant={"outlined"}
                        title="Components"
                        onPress={() => navigation.navigate(ROUTES.COMPONENTS)}
                    />
                    <Spacer />
                    <Button
                        variant={"outlined"}
                        title="Screens"
                        onPress={() => navigation.navigate(ROUTES.SCREENS)}
                    />
                </View>
            </View>
            <Spacer x={2} />
            <Typography>Cart items: {counter}</Typography>
        </Wrapper>
    );
}

export default Home;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: colors.grayPrimary,
        alignItems: "center",
        justifyContent: "center",
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
