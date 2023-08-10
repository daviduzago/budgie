import {View, StyleSheet} from "react-native";
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
    {
        name: "Icons",
        route: ROUTES.ICONS,
    },
    {
        name: "Auth",
        route: ROUTES.AUTH,
    },
]

function Components({navigation}) {
    return (
        <Wrapper hasTopNav>
            <View style={styles.body}>
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

export default Components;

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
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
    }
});
