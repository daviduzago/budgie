/**
 * Icon
 * @name Icon
 * @property {string} name - name of the icon
 * @property {string} color - Color to override from theme default.
 * @property {string} size - Size in pixels for the icon.
 */

import React from 'react'
import {View} from 'react-native'
import colors from "../../utils/colors"
import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'

const ourIcons = {
    /* Example: (props) => <Example {...props} />, */
    bell: (props) => (
        <SvgIcon {...props} viewBox="0 0 24 25" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4a5.6 5.6 0 0 0-5.6 5.6v3.506l-.358.178a2.247 2.247 0 0 0-1.242 2.01V16a2.4 2.4 0 0 0 2.4 2.4h2.536a2.401 2.401 0 0 0 4.527 0H16.8a2.4 2.4 0 0 0 2.4-2.4v-.706c0-.85-.481-1.629-1.242-2.01l-.358-.178V9.6A5.6 5.6 0 0 0 12 4ZM8 9.6a4 4 0 1 1 8 0v3.779c0 .438.247.84.64 1.035l.602.301c.22.11.358.334.358.58V16a.8.8 0 0 1-.8.8H7.2a.8.8 0 0 1-.8-.8v-.706c0-.245.138-.469.358-.579l.602-.3c.392-.197.64-.598.64-1.036v-3.78Z"
            />
        </SvgIcon>
    ),
    plus: (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            />
        </SvgIcon>
    ),
}

function SvgIcon(props) {
    const {size = 24, svgWidth = 24, svgHeight = 24} = props
    const ratio = svgWidth / svgHeight
    let autoColor =
        props.fill === 'currentColor' || props.fill === 'currentColor'
            ? null
            : props.color && colors[props.fill]
                ? colors[props.fill]
                : props.fill
                    ? props.fill
                    : null

    return (
        <Svg width={size} height={size * ratio} fill={autoColor} xmlns="http://www.w3.org/2000/svg" {...props}>
            {props.children}
        </Svg>
    )
}

function RenderIcon(props) {
    if (ourIcons[props.name]) {
        return ourIcons[props.name](props)
    } else {
        console.warn('missing icon', props.name || 'props.name not set')
        return <></>
    }
}

export function IconWrapped(props) {
    let variant = props.variant || null
    let borderColor = props.borderColor || null
    let size = props.size || props.width || 24
    let color = props.color && colors[props.color] ? colors[props.color] : props.color || colors.body
    let backgroundColor = props.background && colors[props.background] ? colors[props.background] : props.background || colors.gray900
    const {innerSize = 0.8, ...passProps} = props
    let iconSize = size * innerSize

    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size * 0.5,
                backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: variant === 'outlined' ? 1 : null,
                borderColor: borderColor ? colors[borderColor] : null,
            }}
        >
            <RenderIcon
                {...passProps}
                name={props.name}
                color={color}
                size={iconSize}
                style={[{width: iconSize, height: iconSize}, {...(props.style || {})}]}
            />
        </View>
    )
}

export default function Icon(props) {
    let size = props.size || 24
    let color = props.color && colors[props.color] ? colors[props.color] : props.color

    return props.wrapped ? (
        <IconWrapped {...props} />
    ) : (
        <RenderIcon {...props} name={props.name} color={color} size={size} style={[{width: size, height: size}, {...(props.style || {})}]} />
    )
}
