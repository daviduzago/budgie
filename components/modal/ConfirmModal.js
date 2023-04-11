/**
 * Use to confirm a delete action or other yes/no items
 * @name ConfirmModal
 * @param {string} title the title text
 * @param {string} body The body text
 * @param {string} confirmText The text of the confirm button. Defaults to 'Confirm'
 * @param {string} cancelText The text of the cancel button. Defaults to 'Cancel'
 * @example <ConfirmModal title="Are you sure?" body="This will do something" />
 * @example <ConfirmModal title="Confirm" body="You agree to something" />
 * @example <ConfirmModal confirmText="Continue" title="Save and Continue?" body="This will make an update" />
 */

import React from 'react'
import {View, ScrollView} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Typography from '../Typography'
import Spacer from '../../utils/Spacer'
import Button from '../Button'
import colors from '../../utils/colors'

const ConfirmModal = (props) => {
    const {title = "Title", body = "body", confirmText = 'Confirm', cancelText = 'Cancel', onDismiss} = props

    const close = () => (onDismiss ? onDismiss() : console.warn('dismiss modal function unavailable'))

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8 * 3,
            }}
        >
            <View
                style={{
                    borderRadius: 8 * 0.5,
                    maxWidth: 500,
                    minWidth: 280,
                    maxHeight: '100%',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.white,
                        borderBottomLeftRadius: 8 * 0.5,
                        borderBottomRightRadius: 8 * 0.5,
                        padding: 20,
                    }}
                >
                    <ScrollView style={{maxHeight: 500}}>
                        <Spacer />
                        <Typography variant="heading2" style={{textAlign: 'center'}}>
                            {title || ''}
                        </Typography>
                        <Spacer x={5} />
                        {typeof body === 'string' ? (
                            <Typography variant="body" style={{textAlign: 'center'}}>
                                {body || ''}
                            </Typography>
                        ) : (
                            body
                        )}
                    </ScrollView>

                    <Spacer x={4} />
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button small variant="outlined" title={cancelText} onPress={() => onDismiss()} />
                        <Spacer />
                        <Button
                            small
                            title={confirmText}
                            onPress={() => {
                                props.onConfirm
                                close()
                            }}
                        />
                    </View>
                    <Spacer />
                </View>
            </View>
        </View>
    )
}

export default ConfirmModal