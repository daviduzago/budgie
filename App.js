import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useFonts} from "expo-font"

import * as SplashScreen from "expo-splash-screen"

import Home from "./screens/Home";
import TypographyScreen from "./screens/components/TypographyScreen";
import ButtonsScreen from "./screens/components/ButtonsScreen";
import {StatusBar} from "expo-status-bar";

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
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}

