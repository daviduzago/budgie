import {View, StyleSheet, Image} from "react-native";

import colors from "../utils/colors";
import ROUTES from "../utils/ROUTES";
import Spacer from "../utils/Spacer";
import Typography from "../components/Typography";
import Wrapper from "../components/ui/wrapper";
import Button from "../components/Button";
import React from "react";

const COMPONENTS = [
    {
        name: "Typography",
        route: ROUTES.TYPOGRAPHY,
    },
    {
        name: "Buttons",
        route: ROUTES.BUTTONS,
    },
    {
        name: "Inputs",
        route: ROUTES.INPUTS,
    },
    {
        name: "Notifications",
        route: ROUTES.NOTIFICATIONS,
    },
    {
        name: "Select",
        route: ROUTES.SELECT,
    },
    {
        name: "Expandables",
        route: ROUTES.EXPAND,
    },
    {
        name: "Modals",
        route: ROUTES.MODALS,
    },
    {
        name: "Loading",
        route: ROUTES.LOADING,
    },
    {
        name: "Checkboxes",
        route: ROUTES.CHECKBOXES,
    },
    {
        name: "Cards",
        route: ROUTES.CARDS,
    },
    {
        name: "Cart Icon",
        route: ROUTES.CARTICON,
    },
]

function Home({navigation}) {
    return (
        <Wrapper hasTopNav={false}>
            <View style={styles.header}>
                <Image style={{width: 80, height: 80}} source={require("../assets/logo-300.png")} />
            </View>
            <Spacer x={2} />
            <View style={styles.body}>
                <View style={{width: "100%"}}>
                    <Typography variant={"heading1"}>Components</Typography>
                    <Spacer />
                </View>
                {COMPONENTS.map((component, index) => (
                    <Button
                        variant={"outlined"}
                        key={index}
                        title={component.name}
                        onPress={() => navigation.navigate(component.route)}
                    />))}
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
        justifyContent: "center",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: "row",
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
