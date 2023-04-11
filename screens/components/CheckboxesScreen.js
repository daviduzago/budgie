import React from "react";
import {View, StyleSheet, Pressable} from "react-native";
import Typography from "../../components/Typography";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import colors from "../../utils/colors";
import Checkbox from "../../components/Checkbox";
import RadioButton from "../../components/RadioButton";

function CheckboxesScreen() {
    const [checked, setchecked] = React.useState(false)
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: '100%'}}>
                <Typography variant={"heading2"}>Checkboxes</Typography>
                <Spacer />
                <Pressable onPress={() => setchecked(!checked)}>
                    <Checkbox checked={checked} />
                </Pressable>
                <Spacer />
                <Pressable onPress={() => setchecked(!checked)}>
                    <RadioButton checked={checked} />
                </Pressable>
            </View >
        </Wrapper >
    );
}

export default CheckboxesScreen;

const style = StyleSheet.create({
    collapsableBox: {
        backgroundColor: colors.gray2,
        height: 200,
        borderRadius: 12,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});