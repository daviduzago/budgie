/**
 * displays when the user logs in but already has account
 * @name BasicModal
 * @example <BasicModal />
 */

import React from 'react'
import {View, Pressable} from 'react-native'
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Typography from '../Typography'
import Spacer from '../../utils/Spacer'
import Icon from '../Icon/Index'
import Button from '../Button'
import colors from '../../utils/colors'

const RATIO = 1.11

const BasicModal = (props) => {
    const {
        onDismiss,
        button1Link,
        onPress1,
        button2Link,
        onPress2,
        minimal,
        imageKey,
        keyName,
        title,
        body,
        bodyComponent,
        button1Text,
        button2Text,
    } = props

    const insets = useSafeAreaInsets();

    const close = () => (onDismiss ? onDismiss() : console.warn('dismiss modal function unavailable'))

    const button1props = {}
    const button2props = {}

    if (button1Link?.indexOf('http') === 0) {
        button1props.href = button1Link
    } else {
        button1props.onPress = onPress1
            ? () => {
                onPress1({close})
            }
            : close
    }
    if (button2Link?.indexOf('http') === 0) {
        button2props.href = button2Link
    } else {
        button2props.onPress = onPress2
            ? () => {
                onPress2({close})
            }
            : close
    }
    const imageHeight = minimal ? (300) : null

    return (
        <View
            style={{
                flex: minimal ? null : 1,
                padding: 8 * 3,
                paddingTop: 8 * 6,
            }}
        >
            <View
                style={{
                    flex: minimal ? null : 1,
                    padding: 8 * 6,
                    paddingTop: 0,
                }}
            >
                <View
                    style={{
                        flexGrow: minimal ? null : 1,
                        flex: minimal ? null : 1,
                        height: imageHeight,
                        width: '100%',
                    }}
                >
                    {/* <WithLayout responsive style={{justifyContent: 'flex-end'}}>
                        {(layout) => {
                            let imageWidth, imageHeight
                            //whatever is smallest
                            if (minimal) {
                                imageHeight = 300
                                imageWidth = imageHeight * RATIO
                            } else {
                                const useWidth = layout.width * RATIO < layout.height
                                imageWidth = useWidth ? layout.width * RATIO : layout.height * RATIO
                                imageHeight = useWidth ? layout.width : layout.height
                            }

                            imageWidth = imageWidth > 300 ? 300 : imageWidth > 450 ? 450 : imageWidth

                            return (
                                <Image
                                    src={`/img/modals/${imageKey || keyName}.png`}
                                    style={{
                                        width: imageWidth,
                                        height: imageHeight,
                                        alignSelf: 'center',
                                    }}
                                />
                            )
                        }}
                    </WithLayout> */}
                </View>
                <View>
                    <View style={{maxWidth: 500}}>
                        {!!title && (
                            <>
                                <Typography variant="heading2" color={colors.black} style={{textAlign: 'center'}}>
                                    {title}
                                </Typography>
                                <Spacer x={3} />
                            </>
                        )}
                        {bodyComponent || <></>}
                    </View>
                    <Spacer x={3} />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        {button1Text ? <Button {...button1props} variant={button2Text ? 'outlined' : null} small title={button1Text} /> : <></>}
                        {!!(button1Text && button2Text) && <Spacer x={3} />}
                        {button2Text ? <Button {...button2props} small title={button2Text} /> : <></>}
                    </View>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    right: 8,
                    top: 8 + (minimal ? 0 : insets.top),
                    backgroundColor: colors.gray3,
                    borderRadius: 50,
                }}
            >
                <Pressable style={{padding: 8}} onPress={close}>
                    <Icon name="close" size={32} />
                </Pressable>
            </View>
        </View>
    )
}

export default BasicModal
