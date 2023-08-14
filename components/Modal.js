import React from 'react'
import {View, Modal, StyleSheet, Platform, Pressable} from 'react-native'
import Typography from './Typography'
import Button from './Button'
import Spacer from '../utils/Spacer'
import colors from '../utils/colors'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export default function ModalComponent(props) {
    const {
        children,
        animationType = 'fade',
        transparent = false,
        variant = 'light',
        confirmationModal
    } = props
    const insets = useSafeAreaInsets();
    return (
        <Modal
            animationType={animationType}
            transparent={true}
            {...props}>
            <View style={[style.container, {
                paddingBottom: insets.bottom + 20,
                backgroundColor: variant === 'light' ? colors.white : variant === "lightGray" ? colors.grayBg : colors.grayPrimary
            }]}>
                {!confirmationModal && children}
                {confirmationModal && (
                    <View style={{rowGap: 12}}>
                        <Typography variant="heading2">{confirmationModal.title}</Typography>
                        <View style={{width: "100%", borderBottomWidth: 1, borderColor: colors.gray2}}></View>
                        <Typography variant="body">{confirmationModal.description}</Typography>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 1}}>
                                <Button
                                    fullWidth
                                    title={confirmationModal.cancelText}
                                    variant="outlined-danger"
                                    onPress={confirmationModal.onCancel} />
                            </View>
                            <Spacer x={2} />
                            <View style={{flex: 1}}>
                                <Button
                                    fullWidth
                                    title={confirmationModal.confirmText}
                                    variant="primary"
                                    onPress={confirmationModal.onConfirm} />
                            </View>
                        </View>
                    </View>
                )}
            </View>
            <Pressable
                onPress={props.onRequestClose}
                style={[style.overlay, {backgroundColor: transparent ? 'transparent' : 'rgba(0, 0, 0, 0.5)'}]}
            />
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        paddingHorizontal: 20,
        paddingTop: 16,
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
    },
})