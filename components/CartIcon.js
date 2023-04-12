import React from "react";
import {StyleSheet, View} from "react-native";
import Icon from "./Icon/Index";
import colors from "../utils/colors";
import Typography from "./Typography";
import {Animated} from "react-native";


export default function CartIcon(props) {
    const {items = 0} = props
    const [shouldShake, setShouldShake] = React.useState(false);
    const shakeAnimation = React.useRef(new Animated.Value(0)).current;
    const prevItemsRef = React.useRef(items);

    React.useEffect(() => {
        if (items === 1 && prevItemsRef.current === 0) {
            setShouldShake(true);
            Animated.sequence([
                Animated.timing(shakeAnimation, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(shakeAnimation, {
                    toValue: -1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(shakeAnimation, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]).start(() => setShouldShake(false));
        }
        prevItemsRef.current = items;
    }, [items]);

    const animatedStyle = shouldShake
        ? {
            transform: [
                {
                    rotate: shakeAnimation.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ["-10deg", "10deg"],
                    }),
                },
            ],
        }
        : {};

    return (
        <>
            <Animated.View style={animatedStyle}>
                <Icon name="cart" size={25} color={colors.white} />
            </Animated.View>
            {items > 0 && <View style={style.badge}>
                <Typography bold variant="extraSmall" color={colors.grayPrimary}>{items}</Typography>
            </View>}
        </>
    );
}

const style = StyleSheet.create({
    badge: {
        position: "absolute",
        top: -12,
        right: -12,
        width: 24,
        height: 24,
        padding: 4,
        backgroundColor: colors.accent,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});