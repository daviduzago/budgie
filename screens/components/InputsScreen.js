import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Input from "../../components/Input"
import InputAbs from "../../components/InputAbs"
import OtpInput from "../../components/OtpInput";

function InputsScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Input placeholder={"Gray"} variant="gray" />
                <Spacer />
                <Input help icon={"bell"} placeholder={"Gray with Icons"} variant="gray" />
                <Spacer />
                <Input help placeholder={"White"} variant="white" />
                <Spacer />
                <Input outlined help placeholder={"White Outlined"} variant="white" />
                <Spacer />
                <Input outlined placeholder={"No variant Outlined"} />
                <Spacer />
                <InputAbs disabled error="Error" placeholder="Filled (Disabled)" />
                <Spacer />
                <InputAbs error="Error" placeholder="Ex: This or that" />
                <Spacer />
                <OtpInput />
            </View>
        </Wrapper>
    );
}

export default InputsScreen;
