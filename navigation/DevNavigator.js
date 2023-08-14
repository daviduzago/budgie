
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import AuthScreen from "../screens/components/AuthScreen";
import ButtonsScreen from "../screens/components/ButtonsScreen";
import CardsScreen from "../screens/components/CardsScreen";
import CartIconScreen from "../screens/components/CartIconScreen";
import CheckboxesScreen from "../screens/components/CheckboxesScreen";
import Components from "../screens/Components";
import ExpandableScreen from "../screens/components/ExpandScreen";
import DevHome from "../screens/DevHome";
import Icon from "../components/Icon/Index";
import IconScreen from "../screens/components/IconScreen";
import InputsScreen from "../screens/components/InputsScreen";
import LoadingScreen from "../screens/components/LoadingScreen";
import ModalsScreen from "../screens/components/ModalsScreen";
import NotificationScreen from "../screens/components/NotificationsScreen";
import React from "react";
import SelectScreen from "../screens/components/SelectScreen";
import TypographyScreen from "../screens/components/TypographyScreen";
import Screens from "../screens/Screens";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function DevNavigator() {
    return (
        <Stack.Navigator initialRouteName="DevHome" screenOptions={{
        }}>
            <Stack.Screen
                name="DevHome"
                component={DevHome}
                options={{
                    headerTitle: () => {
                        return (
                            <View style={{flex: 1, justifyContent: "center", alignItems: "flex-start"}}>
                                <Icon name="budgie-logo" size={50} />
                            </View>

                        )
                    }
                }}
            />
            <Stack.Screen name="Components" component={Components} />
            <Stack.Screen name="Screens" component={Screens} />

            <Stack.Screen name="Typography" component={TypographyScreen} />
            <Stack.Screen name="Buttons" component={ButtonsScreen} />
            <Stack.Screen name="Inputs" component={InputsScreen} />
            <Stack.Screen name="Notifications" component={NotificationScreen} />
            <Stack.Screen name="Select" component={SelectScreen} />
            <Stack.Screen name="Expand" component={ExpandableScreen} />
            <Stack.Screen name="Modals" component={ModalsScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Checkboxes" component={CheckboxesScreen} />
            <Stack.Screen name="Cards" component={CardsScreen} />
            <Stack.Screen name="CartIcon" component={CartIconScreen} />
            <Stack.Screen name="Icons" component={IconScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />

            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}