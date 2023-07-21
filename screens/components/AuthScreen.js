import React from "react";
import {Pressable, View} from "react-native";
import {showNotification} from "../../components/Notification";
import Typography from "../../components/Typography";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Button from "../../components/Button"
import Input from "../../components/Input"
import colors from "../../utils/colors";
import OtpInput from "../../components/otpInput"

import {createUserWithEmailAndPassword} from "firebase/auth";
import {FIREBASE_AUTH} from "../../firebase";

function AuthScreen() {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [confirmation, setConfirmation] = React.useState(null);
    const [registered, setRegistered] = React.useState(true);
    const [disabled, setDisabled] = React.useState(true);
    const [newUser, setNewUser] = React.useState({});
    const [code, setCode] = React.useState('');

    React.useEffect(() => {
        if (registered) {
            if (phoneNumber.length === 13) {
                setDisabled(false);
            }
        }
        if (!registered) {
            if (newUser.email && newUser.phoneNumber) {
                setDisabled(false);
            }
        }
    }, [newUser, phoneNumber, registered]);

    const auth = FIREBASE_AUTH;

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, newUser.email, newUser.phoneNumber)
            .then((userCredential) => {
                // User created
                showNotification({
                    type: "success",
                    title: "Hurrah!",
                    message: "User created successfully",
                    icon: "success",
                    hasCloseButton: false
                })
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    // Sign in existing user
                    showNotification({
                        type: "error",
                        title: "Whoopsie!",
                        message: "User already exists",
                        icon: "error",
                        hasCloseButton: false
                    })
                } else {
                    alert(error.message);
                }
            });
    }

    return (
        <Wrapper hasTopNav>
            {confirmation ? (
                <View style={{flex: 1, padding: 20, width: "100%", alignItems: "center"}}>
                    <Typography variant={"heading2"}>Enter Code</Typography>
                    <Spacer x={2} />
                    <Typography variant={"body"}>{phoneNumber}</Typography>
                    <Spacer x={2} />
                    <OtpInput otpCode={(code) => setCode(code)} />
                    <Spacer x={2} />
                    <Button fullWidth variant="primary" title="Verify" />
                    <Spacer x={3} />
                    <View style={{flexDirection: "row"}}>
                        <Typography variant={"body"} color={colors.gray3}>This is not your phone number?</Typography>
                        <Spacer />
                        <Pressable onPress={() => setConfirmation(null)}>
                            <Typography variant={"body"} color={colors.grayPrimary}>Change number</Typography>
                        </Pressable>
                    </View>
                </View>
            ) : registered ? (
                /* REGISTERED */
                <View style={{flex: 1, padding: 20, width: '100%', alignItems: "center"}}>
                    <Typography variant={"heading2"}>Auth</Typography>
                    <Spacer />
                    <View style={{width: 250}}>
                            <Button fullWidth variant="primary" title="Goggle" iconLeft="google" onPress={() => { }} />
                    </View>
                    <Spacer />
                    <View style={{width: 250}}>
                        <Button fullWidth variant="primary" title="Facebook" iconLeft="facebook" />
                    </View>
                    <Spacer />
                    <View style={{width: 250}}>
                        <Button fullWidth variant="primary" title="Apple" iconLeft="apple" />
                    </View>
                    <Spacer />
                    <Typography variant={"medium"}>or</Typography>
                    <Spacer />
                    <Input
                        //keyboardType='numeric'
                        variant="white"
                        placeholder="Enter your phone number"
                        icon="colombia-flag"
                        onChangeText={(phNum) => setPhoneNumber(phNum)}
                    />
                    <Spacer />
                    <View style={{flexDirection: "row"}}>
                        <View style={{flex: 1}}>
                                <Button fullWidth disabled={disabled} variant="primary" title="Whatsapp" />
                        </View>
                        <Spacer />
                            <Pressable id="sign-in-button" style={{flex: 1}}>
                                <Button fullWidth disabled={disabled} variant="primary" title="SMS" />
                            </Pressable>
                    </View>
                    <Spacer />
                    <View style={{flexDirection: "row"}}>
                        <Typography variant={"body"} color={colors.gray3}>You haven't registered yet?</Typography>
                        <Spacer />
                        <Pressable onPress={() => setRegistered(!registered)}>
                            <Typography variant={"body"} color={colors.grayPrimary}>Register here.</Typography>
                        </Pressable>
                    </View>
                </View >
            ) : (
                /* NOT REGISTERED */
                <View style={{flex: 1, padding: 20, width: '100%', alignItems: "center"}}>
                    <Typography variant={"heading2"}>Auth</Typography>
                    <Spacer />
                    <View style={{width: 250}}>
                        <Button fullWidth variant="primary" title="Goggle" iconLeft="google" />
                    </View>
                    <Spacer />
                    <View style={{width: 250}}>
                        <Button fullWidth variant="primary" title="Facebook" iconLeft="facebook" />
                    </View>
                    <Spacer />
                    <View style={{width: 250}}>
                        <Button fullWidth variant="primary" title="Apple" iconLeft="apple" />
                    </View>
                    <Spacer />
                    <Typography variant={"medium"}>or</Typography>
                    <Spacer />
                    <Input
                        variant="white"
                        placeholder="First name"
                        onChangeText={(firstName) => setNewUser({...newUser, firstName: firstName})}
                    />
                    <Input
                        variant="white"
                        placeholder="Last name"
                        onChangeText={(lastName) => setNewUser({...newUser, lastName: lastName})}
                    />
                    <Input
                        variant="white"
                        placeholder="Email"
                        onChangeText={(email) => setNewUser({...newUser, email: email})}
                    />
                    <Input
                        variant="white"
                        placeholder="Enter your phone number"
                        icon="colombia-flag"
                        onChangeText={(phNum) => setNewUser({...newUser, phoneNumber: phNum})}
                    />
                    <Spacer />
                    <View style={{flexDirection: "row"}}>
                        <View style={{flex: 1}}>
                                    <Button onPress={handleRegister} fullWidth disabled={disabled} variant="primary" title="Whatsapp" />
                        </View>
                        <Spacer />
                        <View style={{flex: 1}}>
                            <Button fullWidth disabled={disabled} variant="primary" title="SMS" />
                        </View>
                    </View>
                    <Spacer />
                    <View style={{flexDirection: "row"}}>
                        <Typography variant={"body"} color={colors.gray3}>Already have an account?</Typography>
                        <Spacer />
                        <Pressable onPress={() => setRegistered(!registered)}>
                            <Typography variant={"body"} color={colors.grayPrimary}>Login here.</Typography>
                        </Pressable>
                    </View>
                    <Spacer x={4} />
                    <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "center", width: "100%"}}>
                        <Typography variant={"body"} color={colors.gray3}>By signing up you are accepting our</Typography>
                        <Spacer />
                        <Pressable onPress={() => console.log("Terms")}>
                            <Typography variant={"body"} color={colors.grayPrimary}>Terms and Conditions and Privacy Policies</Typography>
                        </Pressable>
                    </View>
                </View >
            )}
        </Wrapper >
    );
}

export default AuthScreen;