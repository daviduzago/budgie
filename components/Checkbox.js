/**
 * This Checkbox component was built because there is no <CheckBox/> for iOS!!!
 * @name Checkbox
 * @param {boolean} value set as true or false to determine if checked
 * @param {boolean} checked an alias for value/checked i may have to change this, undecided.
 * @example <Checkbox />
 * @example <Checkbox checked />
 * @example <Checkbox value={true} />
 * @example <Checkbox value={true} disabled />
 * @example <Checkbox disabled />
 */
import IconFromPath from './Icon/IconFromPath'
import React from 'react'
import {View} from 'react-native'
import colors from '../utils/colors'

export default function Checkbox(props) {
    const {value, variant = "light"} = props
    const checked = props.checked || value ? true : false

    return (
        <View
            style={{
                width: 20,
                height: 20,
                padding: 2,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: variant === "light" ? colors.grayPrimary : colors.white,
                margin: 2,
            }}
        >
            {checked && (
                <View style={{width: 14, height: 14, borderRadius: 3, paddingLeft: 1, backgroundColor: variant === "light" ? colors.grayPrimary : colors.white}}>
                    <IconFromPath
                        stroke={variant === "light" ? colors.white : colors.grayPrimary}
                        viewBox="0 0 12 9"
                        svgWidth={12}
                        svgHeight={9}
                        path={'M1.333 4.292 4.25 7.208 10.667.792'}
                        strokeWidth={2}
                    />
                </View>
            )}
        </View>
    )
}