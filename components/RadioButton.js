/**
 * @name RadioButton
 * @param {boolean} value set as true or false to determine if checked
 * @param {boolean} checked an alias for value/checked i may have to change this, undecided.
 * @example <RadioButton />
 * @example <RadioButton checked />
 * @example <RadioButton value={true} />
 * @example <RadioButton value={true} disabled />
 * @example <RadioButton disabled />
 */
import IconFromPath from './Icon/IconFromPath'
import React from 'react'
import {View} from 'react-native'
import colors from '../utils/colors'

export default function RadioButton(props) {
    const {value, variant = "light", size = 24} = props
    const checked = props.checked || value ? true : false

    return (
        <View
            style={{
                width: size,
                height: size,
                padding: 4,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: variant === "light" ? colors.grayPrimary : colors.white,
                margin: 4,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {checked && (
                <View style={{
                    width: size - 6,
                    height: size - 6,
                    borderRadius: 100,
                    backgroundColor: variant === "light" ? colors.grayPrimary : colors.white,
                }}>
                </View>
            )}
        </View>
    )
}