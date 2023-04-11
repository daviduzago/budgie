/**
 * Use this to show loading / processing
 * @name Loading
 * @param {number} percent if provided assumes the progress bar is determinant and shows a fill amount
 * @param {string} background the background color (name from theme accepted) falls back to theme.colors.background as default
 * @param {string} color the color of the circles falls back to theme.colors.primary500 as default
 * @param {number} size the height of the bar / size of the circles defaults to 24
 * @param {boolean} single show a single circle instead of 3
 * @param {boolean} timer show an animated timer of a fill bar progressing to a specified amount of time
 * @example <Loading />
 * @example <Loading single />
 * @example <Loading size={24} single/>
 * @example <Loading color="#F0FF8B" />
 * @example <Loading percent={45} />
 * @example <Loading percent={5} />
 * @example <Loading percent={95} size={24} />
 * @example <Loading percent={95} background="error300" color="success500" />
 * @example <Loading timer={60} background="gray800" color="success500" />
 * @example <Loading timer={60*3} background="error300" color="success500" />
 */

import React from 'react'
import {View, Animated, Platform, RefreshControl, Easing} from 'react-native'
import Svg, {Circle, Ellipse, Mask} from 'react-native-svg'
import colors from '../utils/colors'
import Icon from './Icon/Index'
const isWeb = Platform.OS === 'web'

function Circles({duration = 250, fill, size}) {
    const animW = React.useRef(new Animated.Value(0)).current
    const animX = React.useRef(new Animated.Value(0)).current
    const ref = React.useRef()

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(500),
                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: size,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 1,
                        duration: duration,
                    }),
                ]),
                Animated.delay(100),
                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: 0,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 1.5,
                        duration: duration,
                    }),
                ]),

                Animated.timing(animX, {
                    useNativeDriver: false,
                    toValue: size * 2,
                    duration: 0,
                }),

                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: size,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 3,
                        duration: duration,
                    }),
                ]),
                Animated.delay(100),
                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: 0,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 3.5,
                        duration: duration,
                    }),
                ]),

                Animated.timing(animX, {
                    useNativeDriver: false,
                    toValue: size * 4,
                    duration: 0,
                }),

                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: size,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 5,
                        duration: duration,
                    }),
                ]),
                Animated.delay(100),
                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: 0,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 5.5,
                        duration: duration,
                    }),
                ]),
                Animated.timing(animX, {
                    useNativeDriver: false,
                    toValue: 0,
                    duration: 0,
                }),
            ])
        ).start()
    })
    const AnimatedRect = Animated.createAnimatedComponent(Ellipse)
    return (
        <Svg viewBox={`0 0 ${size * 6} ${size}`} style={{width: size * 6, height: size}}>
            <Mask id={'mask1'}>
                <AnimatedRect cx={animX} cy={size * 0.5} rx={animW} ry={size * 0.5} fill="white" ref={ref} collapsable="false" />
            </Mask>
            <Circle cx={size * 1} cy={size * 0.5} r={size * 0.5} fill={fill} mask={`url(#mask1)`} />
            <Circle cx={size * 3} cy={size * 0.5} r={size * 0.5} fill={fill} mask={`url(#mask1)`} />
            <Circle cx={size * 5} cy={size * 0.5} r={size * 0.5} fill={fill} mask={`url(#mask1)`} />
        </Svg>
    )
}

function Spinner(props) {
    const {size = 24, color = colors.primary500, duration = 2000} = props
    const [spinValue, setSpinValue] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: duration,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View
            style={{
                transform: [{rotate: spin}],
                width: "auto",
                height: 'auto',
            }}
        >
            {/* TODO: We need to fix this spinner */}
            <Icon name="arrow-path" size={size} color={color} />
        </Animated.View >
    );
};

function OneCircle({duration = 250, fill, size}) {
    const animW = React.useRef(new Animated.Value(0)).current
    const animX = React.useRef(new Animated.Value(0)).current
    const ref = React.useRef()

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(500),
                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: size,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 0.5,
                        duration: duration,
                    }),
                ]),
                Animated.delay(100),
                Animated.parallel([
                    Animated.timing(animW, {
                        useNativeDriver: false,
                        toValue: 0,
                        duration: duration,
                    }),
                    Animated.timing(animX, {
                        useNativeDriver: false,
                        toValue: size * 1,
                        duration: duration,
                    }),
                ]),

                Animated.timing(animX, {
                    useNativeDriver: false,
                    toValue: 0,
                    duration: 0,
                }),
            ])
        ).start()
    })
    const AnimatedRect = Animated.createAnimatedComponent(Ellipse)
    return (
        <Svg viewBox={`0 0 ${size} ${size}`} style={{width: size, height: size}}>
            <Mask id={'mask2'}>
                <AnimatedRect cx={animX} cy={size * 0.5} rx={animW} ry={size * 0.5} fill="white" ref={ref} collapsable="false" />
            </Mask>
            <Circle cx={size * 0.5} cy={size * 0.5} r={size * 0.5} fill={fill} mask={`url(#mask2)`} />
        </Svg>
    )
}

function LoadingTimer({timer, height, fillColor, backgroundColor = colors.gray3}) {
    const animated = React.useRef(new Animated.Value(0)).current
    const animatedLoop = React.useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.timing(animated, {
            useNativeDriver: false,
            toValue: 1,
            duration: timer * 1000,
        }).start()

        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedLoop, {
                    useNativeDriver: false,
                    toValue: 1,
                    duration: 500,
                }),
                Animated.timing(animatedLoop, {
                    useNativeDriver: false,
                    toValue: 0,
                    duration: 500,
                }),
            ])
        ).start()
    }, [])

    return (
        <Animated.View
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['100%', '0%'],
                }),
                backgroundColor: fillColor,
                borderRadius: 8 * 0.5,
                opacity: animatedLoop.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                }),
            }}
        />
    )
}

function Loading(props) {
    const {percent, background, color, size, single, timer, spinner} = props
    const height = size ? size : 10
    const isDeterminant = percent || percent === 0
    const isTimer = timer
    const backgroundColor = background && colors[background] ? colors[background] : background ? background : null
    const fillColor = color && colors[color] ? colors[color] : color ? color : colors.gray4

    const circle = height

    return (
        <View
            style={{
                position: 'relative',
                height: height,
                width: isDeterminant || isTimer ? '100%' : single ? height : height * 5,
                overflow: 'hidden',
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: isDeterminant ? 8 * 0.5 : 0,
            }}
        >
            {isTimer ? (
                <LoadingTimer timer={timer} height={height} fillColor={fillColor} backgroundColor={backgroundColor} />
            ) : isDeterminant ? (
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: percent + '%',
                        backgroundColor: fillColor,
                        borderRadius: 8 * 0.5,
                    }}
                />
            ) : single ? (
                <OneCircle fill={fillColor} size={circle} duration={250} />
            ) : spinner ? (
                <Spinner color={fillColor} size={circle} />
            )
                : (
                    <Circles fill={fillColor} size={circle} duration={250} />
                )}
        </View>
    )
}

/**
 * Use this to get the right props to add pull to refresh to a view or
 * @name getPullToRefreshProps
 * @param {boolean} refreshing true or false if currently loading
 * @param {function} onRefresh what to execute when refreshing pull to refresh
 * @returns
 */
export function getPullToRefreshProps(props) {
    const {refreshing, onRefresh} = props

    return isWeb
        ? {}
        : {
            refreshControl: <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />,
        }
}

export default React.memo(Loading)