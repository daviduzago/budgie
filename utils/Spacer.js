import React from 'react'
import {View} from 'react-native'

export default function Spacer(props) {
    const spacing = props.x ? 8 * props.x : 8
    return <View style={{...(props.style || {}), width: spacing, height: spacing}}></View>
}