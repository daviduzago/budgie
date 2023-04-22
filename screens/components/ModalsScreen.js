import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Select from "../../components/Select"
import Modal from "../../components/Modal";
import colors from "../../utils/colors";

function ModalsScreen() {
    const [modals, setModals] = React.useState({
        confirmation: false,
        dark: false,
    })
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Button title="Confirmation" onPress={() => setModals({...modals, confirmation: !modals.confirmation})} />
                <Modal
                    onRequestClose={() => setModals({...modals, confirmation: !modals.confirmation})}
                    visible={modals.confirmation}
                    confirmationModal={{
                        title: "Oops",
                        description: "Are you sure you want emtpy de cart?",
                        cancelText: "No",
                        confirmText: "Yes",
                        onCancel: () => {setModals({...modals, confirmation: !modals.confirmation})},
                        onConfirm: () => {console.log("Cart Emptied")},
                    }}
                />
                <Spacer x={2} />
                <Button title="Edit options" onPress={() => setModals({...modals, dark: !modals.dark})} />
                <Modal
                    variant="dark"
                    transparent
                    animationType="slide"
                    onRequestClose={() => setModals({...modals, dark: !modals.dark})}
                    visible={modals.dark} >
                    <View style={{alignItems: "center"}}>
                        <Typography color="white" variant="heading1">Edit your options</Typography>
                        <Spacer x={3} />
                        <Input icon={"currency-dollar"} placeholder={"$15.00"} variant="gray" />
                        <Spacer />
                        <Input icon={"users"} placeholder={"1 person"} variant="gray" />
                        <Spacer />
                        <Input icon={"map-pin"} placeholder={"Home"} variant="gray" />
                        <Spacer />
                        <View style={{width: 200}}>
                            <Button fullWidth title="Update" variant="secondary" />
                        </View>
                        <Spacer x={3} />
                        <Typography style={{textAlign: "center"}} variant="extraSmall" color="white">Delivery fees are included in the final price of each option. Available choices may be limited based on your location and budget. Thank you for your understanding!</Typography>
                    </View>
                </Modal>
            </View>
        </Wrapper>
    );
}

export default ModalsScreen;