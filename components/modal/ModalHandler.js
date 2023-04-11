/**
 * Displays a configurable modal that can be visible or dismissed for any screen over any nav state
 * @name ModalHandler
 * @example <View><Button title="Default Modal" onPress={e => {queueDisplayModal({modal: 'BasicModal'})}}  /></View>
 * @example <View><Button title="Welcome Modal"
 *              onPress={e => {queueDisplayModal({
 *                  modal: 'BasicModal',
 *                  keyName: 'welcomeNewUser',
 *                  email: 'yolo@yolo.com'
 *              })}}  /></View>
 * @example <View><Button title="Alert Add Modal"
 *              onPress={e => {queueDisplayModal({
 *                  modal: 'BasicModal',
 *                  keyName: 'alertsAdd',
 *                  minimal: true,
 *              })}}  /></View>
 * @example <View><Button title="Delete Alert"
 *              onPress={e => {queueDisplayModal({
 *                  modal: 'BasicModal',
 *                  keyName: 'alertsDelete',
 *                  minimal: true,
 *                  onPress2: ({close}) => {alert('hi2'); close()},
 *              })}}  /></View>
 * @example <View><Button title="1st Alert Modal"
 *              onPress={e => {queueDisplayModal({
 *                  modal: 'BasicModal',
 *                  keyName: 'alert1stTime',
 *              })}}  /></View>

 */

import React from 'react'
import {View, Modal, TouchableWithoutFeedback} from 'react-native'
import * as Modals from './Index'
import Typography from '../Typography'
import {useModal} from '../../utils/ModalUtils'
import Button from '../Button'

function FallbackModal(props) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Typography>Error finding modal.</Typography>
            <Button onPress={props.onDismiss} title="Close" />
        </View>
    )
}

export default function ModalHandler(props) {
    const {isMobile} = props
    const [stack, stackPop, setOpen] = useModal()

    if (stack && stack.length) {
        let config = stack[stack.length - 1]

        const CustomModal = Modals[config.modal + 'Modal'] || Modals[config.modal] || FallbackModal
        //console.log('render modal config', config, 'modal func', config.modal, Modal, Modals[config.modal])

        const onDismiss = (data) => {

            console.log(typeof config.onDismiss)
            setOpen(false)
            stackPop()

            if (props.onDismiss) {
                props.onDismiss(data)
            }
        }

        return (
            <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                    elevation: 3,
                    padding: 8,
                }}
            >
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={props.isOpen}
                    hardwareAccelerated={true}
                    presentationStyle="overFullScreen"
                    onDismiss={props.onDismiss}
                    onRequestClose={props.onDismiss}
                    statusBarTranslucent
                    style={{
                        borderWidth: 0,
                        flex: props.minimal ? null : 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifySelf: 'center',
                        width: props.minimal ? null : '100%',
                        maxWidth: props.maxWidth || 500,
                        zIndex: 4,
                        elevation: 4,
                    }}
                >
                    <View style={{position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.9)'}} />
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: props.margin}}>
                        <TouchableWithoutFeedback onPress={onDismiss}>
                            <View style={{position: 'absolute', left: 0, top: 0, bottom: 0, right: 0}} />
                        </TouchableWithoutFeedback>
                        <View
                            style={{
                                flex: 1,
                                width: '100%',
                                maxWidth: props.maxWidth ? props.maxWidth : isMobile ? null : props.modal === 'VideoModal' && !isMobile ? 820 : 600,
                                maxHeight: props.maxHeight ? props.maxHeight : isMobile ? null : props.modal === 'VideoModal' ? (isMobile ? 200 : 585) : 448,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: props.minimal ? 16 : null,
                                paddingRight: props.minimal ? 16 : null,
                            }}
                            nativeID="modal-content-container"
                        >
                            <CustomModal {...props} onDismiss={onDismiss} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    } else {
        return <React.Fragment />
    }
}
