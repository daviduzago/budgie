import React from 'react'
import {StyleSheet, View} from 'react-native'
import Button from './Button'
import Typography from './Typography'
import Icon from './Icon/Index'
import colors from '../utils/colors'
import Expandable from './Expand'
import Spacer from '../utils/Spacer'
import {Pressable} from 'react-native'

export default function CheckoutCard(props) {
    const {icon, title, rightLabel, expandable, buttonTitle, children} = props
    const [expanded, setExpanded] = React.useState(false)
    return (
        <View style={style.container}>
            <View style={[style.header, {borderBottomWidth: !!children ? 1 : 0}]}>
                {!!icon && <Icon name={icon} size={24} color={colors.grayPrimary} />}
                <Spacer />
                <Typography variant="medium">{title}</Typography>
                <View style={{flex: 1}}></View>
                {rightLabel && <>
                    <Typography color="gray3" variant="small">{rightLabel}</Typography>
                    <Spacer />
                </>}
                {!!buttonTitle && <Button small shape="round" variant="primary" textVariant="small" title={buttonTitle} />}
                {expandable && <Pressable onPress={() => setExpanded(!expanded)} style={{width: 24, height: 24, justifyContent: 'center', alignItems: "center", backgroundColor: colors.gray3, borderRadius: 50}}>
                    <Icon name={expanded ? 'chevron-up' : 'chevron-down'} strokeWidth={2} size={20} color="white" />
                </Pressable>}
            </View>
            {!!children && !expandable && <View style={style.body}>
                {children}
            </View>}
            {!!children && expandable && expanded && <View style={style.body}>
                <Expandable open={expanded}>
                    {children}
                </Expandable>
            </View>}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray2,
    },
    header: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        borderBottomColor: colors.gray2
    },
    body: {
        padding: 12
    }
})