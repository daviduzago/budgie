import React from "react";
import {View, StyleSheet} from "react-native";
import Typography from "../../components/Typography";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Expand from "../../components/Expand"
import Button from "../../components/Button";
import colors from "../../utils/colors";

function ExpandableScreen() {
    const [open, setOpen] = React.useState(false)
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: '100%'}}>
                <Typography variant={"heading2"}>Expandable</Typography>
                <Spacer />
                <Button fullWidth title={open ? 'Collapse' : 'Expand'} onPress={() => setOpen(!open)} />
                <Spacer x={2} />
                <Typography normal variant='heading2'>Text on top the collapsable</Typography>
                <Spacer />
                <Expand open={open}>
                    <View style={style.collapsableBox}>
                        <Typography>Inside</Typography>
                    </View>
                </Expand>
                <Spacer />
                <Typography normal variant='heading2'>Text under the collapsable</Typography>
            </View >
        </Wrapper >
    );
}

export default ExpandableScreen;

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