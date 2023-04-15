import React from "react";
import {View, StyleSheet, Pressable} from "react-native";
import Typography from "../../components/Typography";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import colors from "../../utils/colors";
import icons from "../../components/Icon/iconArray"
import Icon from "../../components/Icon/Index";

function IconScreen() {
    const [name, setName] = React.useState("No icon selected");
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: '100%', }}>
                <View style={{flexWrap: "wrap", flexDirection: "row", gap: 24}}>
                    {icons.map((icon, index) => {
                        return <Pressable
                            key={icon + "-" + index}
                            onPress={() => setName(icon)}>
                            <Icon key={index} name={icon} size={30} color={colors.grayPrimary} />
                        </Pressable>
                    })}
                </View >
                <Spacer x={2} />
                <Typography style={{flex: 1}} normal variant={"heading2"}>Icon name: {name}</Typography>
                <View style={{flex: 1, width: "100%", alignItems: "center"}}>
                    <Icon name={name} size={300} color={colors.grayPrimary} />
                </View>
            </View>

        </Wrapper >
    );
}

export default IconScreen;