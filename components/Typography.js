/**
 * Typography
 * @name Typography
 * @property {string} variant - Typography variant.
 * @property {string} color - Color to override from theme default. Can use any valid css color or a named color from the theme
 * @property {boolean} bold - make the font weight 600 and Lato Bold
 * @property {boolean} medium - make the font weight 500 and Lato Bold
 * @property {boolean} normal - make the font weight 400 and Lato Regular
 * @property {boolean} light - make the font weight 300 and Lato Light
 * @property {boolean} error - use the error text color.
 * @property {boolean} nowrap - forces one line with ellipsis
 * @property {boolean} adjustsFontSizeToFit - auto fit the text into one line by shrinking the size <Text/> prop 
*/

import React from 'react'
import {Text} from 'react-native'
import colors from "../utils/colors"

const variants = [
    "display",
    "heading1",
    "heading2",
    "medium",
    "body",
    "small",
    "extraSmall"
]

const styles = {
    display: {
        fontSize: 48,
        fontWeight: "500",
        letterSpacing: -0.5,
        fontFamily: "Lato Bold",
    },
    heading1: {
        fontSize: 32,
        fontWeight: "500",
        letterSpacing: -0.5,
        fontFamily: "Lato Bold",
    },
    heading2: {
        fontSize: 24,
        fontWeight: "500",
        letterSpacing: -0.5,
        fontFamily: "Lato Bold",
    },
    medium: {
        fontSize: 20,
        fontWeight: "500",
        letterSpacing: -0.5,
        fontFamily: "Lato Regular",
    },
    body: {
        fontSize: 17,
        fontWeight: "400",
        letterSpacing: -0.5,
        fontFamily: "Lato Regular",
    },
    small: {
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: -0.5,
        fontFamily: "Lato Regular",
    },
    extraSmall: {
        fontSize: 12,
        fontWeight: "300",
        letterSpacing: -0.5,
        fontFamily: "Lato Regular",
    },
}

function Typography(props) {
    let {variant = 'body', loading} = props
    let addProps = {}

    let index = variants.indexOf(variant)

    if (index < 0) {
        if (variant) {
            console.warn('invalid variant supplied to <Typography />', '*', variant, '*')
        }
        variant = 'body'
    }

    if (index > -1 && index < 4) {
        addProps.accessibilityRole = 'header'
        addProps['area-level'] = index + 1
    }

    let addStyles = {...props.style}

    if (colors[props.color]) {
        addStyles.color = colors[props.color]
    } else {
        addStyles.color = props.color
    }

    if (props.bold) {
        addStyles.fontWeight = '600'
        addStyles.fontFamily = "Lato Bold"
    }
    if (props.medium) {
        addStyles.fontWeight = '500'
        addStyles.fontFamily = "Lato Bold"
    }
    if (props.normal) {
        addStyles.fontWeight = '400'
        addStyles.fontFamily = "Lato Regular"
    }
    if (props.light) {
        addStyles.fontWeight = '300'
        addStyles.fontFamily = "Lato Light"
    }
    if (props.underlined) {
        addStyles.textDecorationLine = 'underline'
    }

    if (props.error) {
        addStyles.color = colors.danger
    }
    if (props.numberOfLines || props.nowrap) {
        addProps.numberOfLines = props.numberOfLines || 1
    }
    if (props.ellipsizeMode || props.nowrap) {
        addProps.ellipsizeMode = props.ellipsizeMode || 'tail'
    }
    if (props.adjustsFontSizeToFit) {
        addProps.numberOfLines = props.numberOfLines || 1
        addProps.adjustsFontSizeToFit = true
    }

    if (addStyles.fontSize > 17 && !addStyles.letterSpacing) {
        addStyles.letterSpacing = -0.5
    }

    let useStyle = [styles[variant], addStyles]

    return (
        <Text style={useStyle} {...addProps}>
            {!loading ? props.children : '\u00A0'}
        </Text>
    )
}

export default React.memo(Typography)