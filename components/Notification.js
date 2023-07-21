/**
 * @name Notification
 * @example <Button title="Show Error" onPress={e => {showNotification({ type: 'error',icon: "x-mark", title: "Oops!" message: 'Something went wrong.' })}}  />
 */

/**
 * use this to queue a message to display
 * @name showNotification
 * @param {object} config  the config of the message to show e.g. {type : 'error', message: 'we messed up'}
 */

import Icon from './Icon/Index'
import React from 'react'
import {useEffect} from 'react'
import {View, Animated} from 'react-native'
import Spacer from '../utils/Spacer'
import Typography from './Typography'
import colors from '../utils/colors'
import {useSafeAreaInsets} from "react-native-safe-area-context";

let queue = {}
const listeners = new Set()

export function showNotification({type, title, message, icon, timeout = 2500, hasCloseButton = true}) {
    listeners.forEach((listener) => {
        listener({
            type,
            title,
            message,
            icon,
            timeout,
            hasCloseButton
        })
    })
    return true
}

function NotificationCard(item) {
    const animate = React.useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(animate, {
            useNativeDriver: true,
            toValue: 1,
            duration: 500,
        }).start(() => {
            setTimeout(() => {
                Animated.timing(animate, {
                    useNativeDriver: true,
                    toValue: 0,
                    duration: 200,
                }).start(() => {
                    delete queue[item.cur]
                    listeners.forEach((listener) => {
                        listener()
                    })
                })
            }, item.timeout)
        })
    }, [])


    return (
        <Animated.View
            style={{
                opacity: animate,
            }}
        >
            {typeof item.message === 'string' ? (
                <View
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                        backgroundColor: colors.white,
                        width: "100%",
                        borderWidth: 1,
                        borderColor: colors.gray3
                    }}>
                    {/*  TODO: Add functionality to close the notification */}
                    <View style={{position: "absolute", right: 8, top: 8}}>
                        {item.hasCloseButton && <Icon color="gray3" name="x-mark" />}
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            size={40}
                            color={
                                item.type === "warning" ? "yellow" :
                                    item.type === "error" ? "danger" :
                                        item.type === "success" ? "success" : "gray3"}
                            name={item.icon || "question-mark-circle"} />
                        <Spacer />
                        <View style={{flex: 1}}>
                            <Typography variant="body">
                                {item.title}
                            </Typography>
                            <Spacer x={0.5} />
                            <Typography color="gray3">
                                {item.message}
                            </Typography>
                        </View>

                    </View>
                </View>
            ) : (
                item.message
            )}
        </Animated.View>
    )
}

export default function BudgieNotification(props) {
    const {isAdditional} = props
    const [state, setState] = React.useState({cur: 0, num: 0})
    const [bump, setBump] = React.useState(0)

    const insets = useSafeAreaInsets()

    React.useEffect(() => {
        queue = {}
        const listener = (item) => {
            if (!item || !isAdditional) {
                setBump((prev) => prev + 1)
            } else {
                setState((prev) => {
                    let cur = prev.cur + 1
                    queue[cur] = item
                    item.cur = cur
                    return {
                        cur: cur,
                        num: Object.keys(queue).length,
                    }
                })
            }
        }
        listeners.add(listener)
        return () => {
            listeners.delete(listener)
        }
    }, [])

    return (
        <View
            style={{
                position: 'absolute',
                bottom: insets.bottom + 8,
                left: 8,
                right: 8,
            }}
        >
            {Object.keys(queue)
                .reverse()
                .map((key) => (
                    <React.Fragment key={'notice' + key}>
                        <NotificationCard {...queue[key]} />
                        <Spacer />
                    </React.Fragment>
                ))}
        </View>
    )
}
