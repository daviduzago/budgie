import React from "react";
import {View, StyleSheet, Pressable} from "react-native";
import Typography from "../../components/Typography";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Expand from "../../components/Expand"
import Button from "../../components/Button";
import colors from "../../utils/colors";
import Icon from "../../components/Icon/Index";
import ComboOptions from "../../components/ComboOptions";

const DRINKS = [
    {id: 1, name: 'Coke', price: 1.99},
    {id: 2, name: 'Pepsi', price: 1.99},
    {id: 3, name: 'Sprite', price: 1.99},
    {id: 4, name: 'Fanta', price: 1.99},
    {id: 5, name: 'Dr. Pepper', price: 1.99},
]

function ExpandableScreen() {
    const [open, setOpen] = React.useState(false)
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: '100%'}}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                    borderBottomColor: colors.gray2,
                    borderBottomWidth: 1,
                }}>
                    <Typography normal variant='heading2'>{"<Expand>"}</Typography>
                    <Pressable onPress={() => setOpen(!open)}>
                        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                    </Pressable>
                </View>
                <Spacer />
                <Expand open={open}>
                    <View style={style.collapsableBox}>
                        <Typography>This is the {"<Expand>"}</Typography>
                    </View>
                </Expand>
                <Spacer x={2} />
                <ComboOptions label="Drink" items={DRINKS} />
            </View >
        </Wrapper >
    );
}

export default ExpandableScreen;

const style = StyleSheet.create({
    collapsableBox: {
        backgroundColor: colors.gray2,
        height: 150,
        borderRadius: 12,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});