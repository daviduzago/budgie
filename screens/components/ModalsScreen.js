import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Button from "../../components/Button";
import {queueDisplayModal} from "../../utils/ModalUtils"
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Select from "../../components/Select"

function ModalsScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Button title="Default Modal" onPress={e => {
                    queueDisplayModal({
                        modal: 'ConfirmModal',
                        title: 'Confirm Modal',
                        body: 'Body',
                        onConfirm: ({close}) => {
                            close();
                        }
                    })
                }} />
            </View>
        </Wrapper>
    );
}

export default ModalsScreen;