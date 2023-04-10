/**
 * will animate the height to expand/collapse conent
 * @name Expand
 * @param {boolean} open set to true/false to toggle open close animation

 */

import React from 'react'
import {View, Animated} from 'react-native'

function ExpandKnowingHeight(props) {
    const {layout, open} = props

    const animated = React.useRef(new Animated.Value(open ? 1 : 0)).current
    React.useEffect(() => {
        Animated.timing(animated, {
            useNativeDriver: false,
            toValue: open ? 1 : 0,
            duration: 150,
        }).start()
    }, [open])

    return (
        <Animated.View
            style={{
                height: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, layout.height],
                }),
                overflow: 'hidden',
            }}
        >
            {props.children}
        </Animated.View>
    )
}

export default function Expand(props) {
    const {open} = props
    const [layout, setLayout] = React.useState({})

    return !open && layout.width ? (
        <ExpandKnowingHeight layout={layout} open={open}>
            {props.children}
        </ExpandKnowingHeight>
    ) : (
        <View style={{position: 'relative', height: open ? null : 0, overflow: 'hidden'}}>
            <View
                style={{position: open ? null : 'absolute', top: 0, left: 0, right: 0, opacity: open ? null : 0}}
                onLayout={(e) => setLayout(e.nativeEvent.layout)}
            >
                {props.children}
            </View>
        </View>
    )
}
