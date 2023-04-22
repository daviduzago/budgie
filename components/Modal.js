import React from 'react'
import {View, Modal, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import Typography from './Typography'
import Button from './Button'
import Spacer from '../utils/Spacer'
import colors from '../utils/colors'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export default function ModalComponent(props) {
    const {
        children,
        animationType = 'fade',
        transparent = true,
        variant = 'light',
        onClose
    } = props
    const insets = useSafeAreaInsets();
    return (
        <Modal
            animationType={animationType}
            transparent={transparent}
            {...props}>
            <View style={[style.container, {
                paddingBottom: insets.bottom,
                backgroundColor: variant === 'light' ? colors.white : colors.grayPrimary
            }]}>
                {Platform.OS === "ios" && <View style={style.closingBar}></View>}
                {children}
            </View>
            <TouchableOpacity
                onPress={props.onRequestClose}
                style={style.overlay}
            />
        </Modal>
    )
}

const style = StyleSheet.create({
    closingBar: {
        width: 50,
        height: 6,
        backgroundColor: colors.gray3,
        borderRadius: 50,
        marginBottom: 8
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        paddingHorizontal: 12,
        paddingTop: 12,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})