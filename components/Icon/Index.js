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
import IconFromPath from "./IconFromPath"
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
    "chevron-down": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            />
        </SvgIcon>
    ),
    "chevron-up": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
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
    "question-mark-circle": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
            />
        </SvgIcon>
    ),
    "x-mark": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            />
        </SvgIcon>
    ),
    "arrow-path": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
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
