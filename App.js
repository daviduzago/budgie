import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {store} from "./store/index"
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import BudgieNotification from "./components/Notification";
import DevNavigator from "./navigation/DevNavigator";
import ModalHandler from "./components/modal/ModalHandler";
import React from "react";


SplashScreen.preventAutoHideAsync()

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
                    <DevNavigator />
                </NavigationContainer>
                <StatusBar style="auto" />
                <BudgieNotification isAdditional />
                <ModalHandler />
            </SafeAreaProvider>
        </Provider>
    );
}

