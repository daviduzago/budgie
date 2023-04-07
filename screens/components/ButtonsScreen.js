import {View} from "react-native";
import React from "react";
import Button from "../../components/Button";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"

function ButtonsScreen() {
    const [disabled, setDisabled] = React.useState(false);
    return (
        <Wrapper hasTopNav>
            <View style={{width: "100%", padding: 20}}>
                <Button title={disabled ? "Enable" : "Disable"} onPress={() => setDisabled(!disabled)} />
                <Spacer />
                <Button disabled={disabled} fullWidth title={"Primary"} />
                <Spacer />
                <Button disabled={disabled} variant={"outlined"} iconLeft={"bell"} iconRight={"plus"} fullWidth title={"Outlined"} />
                <Spacer />
                <Button disabled={disabled} variant={"secondary"} iconRight={"plus"} title={"Secondary"} />
                <Spacer />
                <Button disabled={disabled} variant={"outlined-danger"} iconLeft={"plus"} title={"Outlined Danger"} />
                <Spacer />
                <Button disabled={disabled} variant={"text"} title={"Text"} />
                <Spacer />
                <Button disabled={disabled} shape={"circle"} iconLeft={"bell"} />
            </View>
        </Wrapper>
    );
}

export default ButtonsScreen;
