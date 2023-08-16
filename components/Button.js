/**
 * Button
 * @name Button
 * @property {string} title - button text
 * @property {function} onPress - function to execute instead of link/href.
 * @property {string} variant - the display variant one of default, secondary (dark background), outlined, or text
 * @property {string} borderColor - the color for the border to override
 * @property {string} textVariant - the font/text variant
 * @property {string} shape - use circle for icons and round for the very rounded borders
 * @property {boolean} fullWidth - fills the width of the container
 * @property {boolean} disabled - disabled the button, apply disabled colors, do not allow onPress/link to work
 * @property {string|object} iconRight either just a string of the name of the icon or all of the config propers that can go into an icon
 * @property {string|object} iconLeft either just a string of the name of the icon or all of the config propers that can go into an icon
*/

import React from 'react'
import {View, Pressable, ActivityIndicator} from 'react-native'
import Spacer from '../utils/Spacer'
import Typography from './Typography'
import colors from '../utils/colors'
import Icon from "./Icon/Index"

function ButtonActual(props) {
    const {variant, error, noErrorLabel, small, textVariant, borderColor, onPress, shape, fullWidth = false, loading = false} = props

    let title = props.title || ''
    let background = props.background || colors.grayPrimary
    let color = props.color || colors.white
    let border = borderColor || background
    let lrPadding = small ? 12 : 24
    let tbPadding = small ? 8 : 16
    let iconSize = props.iconSize || 24

    if (props.style && props.style.padding === 0) {
        tbPadding = 0
        lrPadding = 0
    }

    if (variant === 'secondary') {
        background = props.background || colors.accent
        color = colors.grayPrimary
        border = 'transparent'
    }
    if (variant === 'outlined') {
        background = 'transparent'
        color = colors.grayPrimary
        border = borderColor || colors.grayPrimary
    }
    if (variant === 'outlined-danger') {
        background = 'transparent'
        color = colors.danger
        border = borderColor || colors.danger
    }
    if (variant === 'text') {
        background = 'transparent'
        border = background
        color = colors.grayPrimary
        lrPadding = 0
    }
    if (variant === "inputGray") {
        background = colors.gray4
        color = colors.gray3
        border = 'transparent'
    }
    if (variant === "inputWhite") {
        background = colors.white
        color = colors.gray3
        border = "transparent"
    }
    if (variant === "inputBackground") {
        background = colors.grayBg
        color = colors.gray3
        border = "transparent"
    }
    if (shape === 'circle') {
        lrPadding = 8
        tbPadding = 8
    }

    if (shape === 'circle') {
        title = ''
    }

    if (props.color) {
        color = props.color
    }
    if (props.disabled) {
        if (variant !== 'text' && variant !== 'outlined') {
            background = colors.gray2
        }
        color = colors.grayPrimary
        if (border) {
            border = colors.gray2
        }
        if (variant === 'text') {
            border = ''
        }
    }

    return (
        <Pressable
            {...props}
            onPress={onPress}
            style={fullWidth ? {width: '100%'} : {}}
        >
            {["inputGray", "inputWhite", "inputBackground"].includes(variant) ?
                <View style={{
                    flex: props.style?.flex || null,
                }}>
                    <View style={{
                        backgroundColor: background,
                        color: color,
                        width: "100%",
                        borderRadius: 12,
                        paddingVertical: 16,
                        paddingHorizontal: 24,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: error ? 1 : border ? 1 : 0,
                        borderColor: error ? colors.danger : border ? border : "transparent",
                    }}>
                        {props.iconRight && <><Icon name={props.iconRight} color={colors.gray3} /><Spacer /></>}
                        <Typography color="gray3" style={{
                            fontSize: 17,
                            fontFamily: "Lato Regular",
                            flex: 1,
                        }}>
                            {title}
                        </Typography>
                    </View>
                    {!noErrorLabel &&
                        <>
                        <Typography style={{marginLeft: 8}} error variant="small">{error || " "}</Typography>
                        <Spacer x={0.5} />
                        </>
                    }
                </View>
                : <View
                    style={[
                        {
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, {
                            opacity: props.disabled ? 0.5 : 1,
                            backgroundColor: background,
                            paddingTop: tbPadding,
                            paddingBottom: tbPadding,
                            paddingLeft: lrPadding,
                            paddingRight: lrPadding,
                            borderWidth: border ? 1 : null,
                            borderColor: border ? border : null,
                            borderRadius: shape === 'round' ? 8 * 2 + 17 : shape === 'circle' ? iconSize + 8 * 2 : 12,
                        },
                        fullWidth
                            ? {
                                flexGrow: 1,
                                flexDirection: 'row',
                            }
                            : {
                                alignSelf: 'flex-start',
                                flexDirection: 'row',
                            },
                    ]}
                >
                    {!!props.iconLeft && !loading && (
                        <>
                            <Icon
                                {...(typeof props.iconLeft === 'string'
                                    ? {name: props.iconLeft, color: color || colors.black, size: iconSize}
                                    : {...{color: color || colors.black, size: iconSize}, ...props.iconLeft})}
                            />
                            {!!title && <Spacer />}
                        </>
                    )}

                    {!!title && !loading && (
                        <Typography variant={textVariant || 'heading2'} color={color} style={{...(props.textStyle || {})}}>
                            {title}
                        </Typography>
                    )}

                    {loading && (
                        <ActivityIndicator size={iconSize} color={color} />
                    )}

                    {!!props.iconRight && !loading && (
                        <>
                            {!!title && <Spacer />}
                            <Icon
                                {...(typeof props.iconRight === 'string'
                                    ? {name: props.iconRight, color: color || colors.black, size: iconSize}
                                    : {...{color: color || colors.black, size: iconSize}, ...props.iconRight})}
                            />
                        </>
                    )}
                </View>}
        </Pressable>
    )
}

export default React.memo(ButtonActual)