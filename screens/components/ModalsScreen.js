import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Select from "../../components/Select"
import Modal from "../../components/Modal";

function ModalsScreen() {
    const [visible, setVisible] = React.useState(false)
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Button title="Default Modal" onPress={() => setVisible(!visible)} />
                <Modal onRequestClose={() => setVisible(!visible)} visible={visible}>
                    <Button title="Close Modal" onPress={() => setVisible(!visible)} />
                </Modal>
            </View>
        </Wrapper>
    );
}

export default ModalsScreen;