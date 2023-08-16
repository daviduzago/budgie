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
import Clock from './color-icons/clock'
import AppleLogo from './color-icons/apple-logo'
import ApplePay from './color-icons/apple-pay'
import BalancedDiet from './color-icons/balanced-diet'
import BrazilFlag from './color-icons/brazil-flag'
import ColombiaFlag from './color-icons/colombia-flag'
import Cooking from './color-icons/cooking'
import Coupon from './color-icons/coupon'
import Delivery from './color-icons/delivery'
import Diet from './color-icons/diet'
import EmptyCart from './color-icons/empty-cart'
import Error from './color-icons/error'
import Facebook from './color-icons/facebook'
import Google from './color-icons/google'
import Healthy from './color-icons/healthy'
import Instagram from './color-icons/instagram'
import MapIcon from './color-icons/map'
import Smartphone from './color-icons/smartphone'
import PaymentMethod from './color-icons/payment-method'
import Order from './color-icons/order'
import PiggyBank from './color-icons/piggy-bank'
import BudgieLogo from './color-icons/budgie-logo'
import Pin from './color-icons/pin'
import RestaurantHouse from './color-icons/restaurant-house'
import Restaurant from './color-icons/restaurant'
import Salad from './color-icons/salad'
import Success from './color-icons/success'
import Tip from './color-icons/tip'
import Twitter from './color-icons/twitter'
import UnitedStatesFlag from './color-icons/united-state'
import Warning from './color-icons/warning'
import Whatsapp from './color-icons/whatsapp'

const ourIcons = {
    "apple": (props) => <AppleLogo {...props} />,
    "apple-pay": (props) => <ApplePay {...props} />,
    "arrow-path": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
        </SvgIcon>
    ),
    "balanced-diet": (props) => <BalancedDiet {...props} />,
    "bell": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 25" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4a5.6 5.6 0 0 0-5.6 5.6v3.506l-.358.178a2.247 2.247 0 0 0-1.242 2.01V16a2.4 2.4 0 0 0 2.4 2.4h2.536a2.401 2.401 0 0 0 4.527 0H16.8a2.4 2.4 0 0 0 2.4-2.4v-.706c0-.85-.481-1.629-1.242-2.01l-.358-.178V9.6A5.6 5.6 0 0 0 12 4ZM8 9.6a4 4 0 1 1 8 0v3.779c0 .438.247.84.64 1.035l.602.301c.22.11.358.334.358.58V16a.8.8 0 0 1-.8.8H7.2a.8.8 0 0 1-.8-.8v-.706c0-.245.138-.469.358-.579l.602-.3c.392-.197.64-.598.64-1.036v-3.78Z"
            />
        </SvgIcon>
    ),
    "brazil-flag": (props) => (<BrazilFlag {...props} />),
    "budgie-logo": (props) => (<BudgieLogo {...props} />),
    "cart": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path

                strokeLinecap='round'
                strokeLinejoin='round'
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
        </SvgIcon>
    ),
    "coupon": (props) => (<Coupon {...props} />),
    "currency-dollar": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </SvgIcon>
    ),
    "delivery": (props) => (<Delivery {...props} />),
    "diet": (props) => (<Diet {...props} />),
    "color-clock": (props) => <Clock {...props} />,
    "clock": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </SvgIcon>
    ),
    "cooking": (props) => (<Cooking {...props} />),
    "colombia-flag": (props) => (<ColombiaFlag {...props} />),
    "chevron-down": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            />
        </SvgIcon>
    ),
    "chevron-left": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            />
        </SvgIcon>
    ),
    "chevron-right": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
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
    "empty-cart": (props) => (<EmptyCart {...props} />),
    "error": (props) => (<Error {...props} />),
    "eye": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </SvgIcon>
    ),
    "facebook": (props) => (<Facebook {...props} />),
    "google": (props) => (<Google {...props} />),
    "healthy": (props) => (<Healthy {...props} />),
    "instagram": (props) => (<Instagram {...props} />),
    "map-pin": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
        </SvgIcon>
    ),
    "map": (props) => (<MapIcon {...props} />),
    "order": (props) => (<Order {...props} />),
    "payment-method": (props) => (<PaymentMethod {...props} />),
    "pencil-square": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
        </SvgIcon>
    ),
    "piggy-bank": (props) => (<PiggyBank {...props} />),
    "pin": (props) => (<Pin {...props} />),
    "plus": (props) => (
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
    "restaurant-house": (props) => (<RestaurantHouse {...props} />),
    "restaurant": (props) => (<Restaurant {...props} />),
    "salad": (props) => (<Salad {...props} />),
    "shopping-cart": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
        </SvgIcon>
    ),
    "smartphone": (props) => (<Smartphone {...props} />),
    "star-outlined": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
        </SvgIcon>
    ),
    "star-solid": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            />
        </SvgIcon>
    ),
    "success": (props) => (<Success {...props} />),
    "tip": (props) => (<Tip {...props} />),
    "trash": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </SvgIcon>
    ),
    "twitter": (props) => (<Twitter {...props} />),
    "united-states-flag": (props) => (<UnitedStatesFlag {...props} />),
    "users": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" strokeWidth={props.strokeWidth || 1.5} stroke={props.color}>
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
        </SvgIcon>
    ),
    "warning": (props) => (<Warning {...props} />),
    "whatsapp": (props) => (<Whatsapp {...props} />),
    "x-mark": (props) => (
        <SvgIcon {...props} viewBox="0 0 24 24" fill={props.color}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
        return ourIcons['question-mark-circle'](props)
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
            <RenderIcon {...props} strokeWidth={props.strokeWidth} name={props.name} color={color} size={size} style={[{width: size, height: size}, {...(props.style || {})}]} />
    )
}
