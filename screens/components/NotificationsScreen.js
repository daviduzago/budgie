import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Button from "../../components/Button";
import {showNotification} from "../../components/Notification";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Select from "../../components/Select"
import icons from "../../components/Icon/iconArray"

function NotificationScreen() {
    const [notifications, setNotifications] = React.useState({})
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20, width: "100%"}}>
                <Select
                    variant="light"
                    selected={notifications.type}
                    title="Type"
                    options={["warning", "error", "success"]}
                    onChange={(value) => setNotifications({...notifications, type: value})} />
                <Spacer x={2} />
                <Input
                    variant="white"
                    placeholder="Title"
                    value={notifications.title}
                    onChangeText={(text) => setNotifications({...notifications, title: text})}
                />
                <Input
                    variant="white"
                    placeholder="Message"
                    value={notifications.message}
                    onChangeText={(text) => setNotifications({...notifications, message: text})}
                />
                <Typography style={{padding: 8}} variant="small">Icon. Ex: x-mark, bell, question-mark-circle, etc.</Typography>
                <Select
                    variant="light"
                    selected={notifications.icon}
                    title="Icon"
                    options={icons}
                    onChange={(value) => setNotifications({...notifications, icon: value})} />
                <Spacer x={2} />
                <Button fullWidth title="Push Notification" onPress={() => {
                    if (!notifications.title && !notifications.message) {
                        return showNotification({
                            type: "error",
                            title: "Error",
                            message: "Please enter a title and message",
                            icon: "x-mark"
                        })
                    }
                    if (notifications.title && notifications.message) {
                        showNotification({
                            type: notifications.type,
                            title: notifications.title,
                            message: notifications.message,
                            icon: notifications.icon
                        })
                    }
                }}
                />
                <Spacer x={2} />
                <Button variant="outlined-danger" fullWidth title="Clear" onPress={() => setNotifications({})} />
            </View>
        </Wrapper>
    );
}

export default NotificationScreen;