import {View} from "react-native";
import Input from "../../components/Input"
import InputAbs from "../../components/InputAbs"
import OtpInput from "../../components/otpInput";
import React from "react";
import Spacer from "../../utils/Spacer"
import Wrapper from "../../components/ui/wrapper";

function InputsScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Input placeholder={"Gray"} variant="gray" />
                <Spacer />
                <Input help icon={"bell"} placeholder={"Gray with Icons"} variant="gray" />
                <OtpInput otpCode={(value) => console.log(value)} />
                <Spacer x={2} />
                <Input help placeholder={"White"} variant="white" />
                <Spacer />
                <Input outlined help placeholder={"White Outlined"} variant="white" />
                <Spacer />
                <Input outlined placeholder={"No variant Outlined"} />
                <Spacer />
                <InputAbs disabled error="Error" placeholder="Filled (Disabled)" />
                <Spacer />
                <InputAbs error="Error" placeholder="Ex: This or that" />
            </View>
        </Wrapper>
    );
}

export default InputsScreen;
