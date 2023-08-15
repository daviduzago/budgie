
import {View, StyleSheet} from "react-native";
import Button from "../components/Button";
import colors from "../utils/colors";
import React from "react";
import ROUTES from "../utils/ROUTES";
import Wrapper from "../components/ui/wrapper";

const SCREENS = [
    {
        name: "Home",
        route: ROUTES.HOME,
    },
    {
        name: "Search Address",
        route: ROUTES.SEARCH_ADDRESS,
    },
    {
        name: "Address Confirmation",
        route: ROUTES.ADDRESS_CONFIRMATION,
    },
]

function Screens({navigation}) {
    return (
        <Wrapper hasTopNav>
            <View style={styles.body}>
                {SCREENS.map((component, index) => (
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
    }
});
