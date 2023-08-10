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
    {
        name: "Icons",
        route: ROUTES.ICONS,
    },
    {
        name: "Auth",
        route: ROUTES.AUTH,
    },
]

function Screens({navigation}) {
    const counter = useSelector(state => state.counter.value);
    return (
        <Wrapper hasTopNav>
            <View style={styles.body}>
                <View style={{width: "100%"}}>
                    <Typography variant={"heading1"}>Screens</Typography>
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
            <Spacer x={2} />
            <Typography>Cart items: {counter}</Typography>
        </Wrapper>
    );
}

export default Screens;

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
