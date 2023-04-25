import React from "react";
import * as SplashScreen from "expo-splash-screen"

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {store} from "./store/index"
import {useFonts} from "expo-font"


import BudgieNotification from "./components/Notification";
import ModalHandler from "./components/modal/ModalHandler";


import AuthScreen from "./screens/components/AuthScreen"
import ButtonsScreen from "./screens/components/ButtonsScreen";
import CardsScreen from "./screens/components/CardsScreen";
import CartIconScreen from "./screens/components/CartIconScreen";
import CheckboxesScreen from "./screens/components/CheckboxesScreen";
import ExpandScreen from "./screens/components/ExpandScreen";
import Home from "./screens/Home";
import IconScreen from "./screens/components/IconScreen";
import InputsScreen from "./screens/components/InputsScreen";
import LoadingScreen from "./screens/components/LoadingScreen"
import ModalsScreen from "./screens/components/ModalsScreen"
import NotificationsScreen from "./screens/components/NotificationsScreen";
import SelectScreen from "./screens/components/SelectScreen"
import TypographyScreen from "./screens/components/TypographyScreen";

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Lato Regular": require("./assets/fonts/Lato-Regular.ttf"),
        "Lato Bold": require("./assets/fonts/Lato-Bold.ttf"),
        "Lato Light": require("./assets/fonts/Lato-Light.ttf"),
    })

    const onLayoutRootView = React.useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen name="Typography" component={TypographyScreen} />
                        <Stack.Screen name="Buttons" component={ButtonsScreen} />
                        <Stack.Screen name="Inputs" component={InputsScreen} />
                        <Stack.Screen name="Notifications" component={NotificationsScreen} />
                        <Stack.Screen name="Select" component={SelectScreen} />
                        <Stack.Screen name="Expand" component={ExpandScreen} />
                        <Stack.Screen name="Modals" component={ModalsScreen} />
                        <Stack.Screen name="Loading" component={LoadingScreen} />
                        <Stack.Screen name="Checkboxes" component={CheckboxesScreen} />
                        <Stack.Screen name="Cards" component={CardsScreen} />
                        <Stack.Screen name="CartIcon" component={CartIconScreen} />
                        <Stack.Screen name="Icons" component={IconScreen} />
                        <Stack.Screen name="Auth" component={AuthScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" />
                <BudgieNotification isAdditional />
                <ModalHandler />
            </SafeAreaProvider>
        </Provider>
    );
}

