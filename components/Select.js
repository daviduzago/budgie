/**
 * @name Select
 * @param {string} selected the selected value
 * @param {array} options an array of options with {title: '', value:''}
 * @param {boolean} multi if multi is enabled the "value" will be a comma delimited list of selected values will accept and emit a string
 * @param {string} textVariant the font variant
 * @param {string} saveTitle title for the button when select menu is multi
 * @param {function} onChange the function to execute when the value changes
 * @param {number} minWidth the minimum width to render the OPEN state of the select menu
 * @param {number} minHeight the minimum height to render the OPEN state of the select menu
 * @param {number} maxHeight the maximum height to render the OPEN state of the select menu
 * @param {number} selectHeight the height for the select menu in case you need to force its height with another component
 * @param {string} title the title for the button when the menu is NOT open
 * @param {object} component the component to render instead of the title/selected item
 * @param {number} limit limit the number of selectable items when using multi
 * @param {string} limitLabel the label that will apper next to the indicator of "items picked / items allowed"
 * @example <Typography>Select with options</Typography>
 * @example <Select selected="option2" options={['option1', 'option2', 'option3']} />
 * @example <Typography>Multi Select with no limit</Typography>
 * @example <Select selected="option1,option2" options={['option1', 'option2', 'option3']} multi saveTitle="Save me" onChange={() => {}}/>
 * @example <Typography>Multi Select with limit and no limit label</Typography>
 * @example <Select selected="option1,option2" options={['option1', 'option2', 'option3']} multi limit={2} saveTitle="Save me" onChange={() => {}}/>
 * @example <Typography>Multi Select with limit and limit label</Typography>
 * @example <Select selected="option1,option2" options={['option1', 'option2', 'option3']} multi limit={2} limitLabel={'options'} saveTitle="Save me" onChange={() => {}}/>
 * @example <Typography>Select with labels for sections</Typography>
 * @example <Select selected="option1" options={[{title: 'section', type: 'label'}, 'option1', 'option2', {title: 'section 2', type: 'label'}, 'option 3', 'option 4']}  onChange={() => {}}/>
 */

import React from 'react'
import {Modal, View, TouchableWithoutFeedback, Platform, ScrollView, Dimensions, Pressable} from 'react-native'
import Typography from './Typography'
import Icon from './Icon/Index'
import Spacer from '../utils/Spacer'
import Checkbox from './Checkbox'
import Button from './Button'
import colors from '../utils/colors'

const isWeb = Platform.OS === 'web'

export default function Select(props) {
    let {
        minWidth = 150,
        minHeight = 50,
        onChange,
        selected,
        options,
        maxHeight,
        multi = false,
        limit,
        limitLabel,
        textVariant = 'body',
        selectHeight,
        component,
        title,
        saveTitle,
        variant = "none"
    } = props
    const [showing, setShowing] = React.useState(false)
    const [layout, setLayout] = React.useState()
    const layoutRef = React.useRef()
    const buttonRef = React.useRef()
    const [multiSelected, setMultiSelected] = React.useState(typeof selected === 'string' ? (selected || '').split(',') : [])

    React.useEffect(() => {
        setMultiSelected(typeof selected === 'string' ? (selected || '').split(',') : [])
    }, [selected])

    selected = (selected || '') + ''

    let _selected = []
    const _options = (options || [])
        .map((option, i) => {
            return typeof option === 'object'
                ? option
                : {
                    title: option,
                    value: option,
                }
        })
        .map((option, i) => {
            option.value = (option.value || '') + '' // cast to string
            if (multiSelected.indexOf(option.value) > -1) {
                _selected.push(option.value)
            }
            return option
        })

    return (
        <View
            onLayout={(e) => {
                layoutRef.current = e.nativeEvent.layout
            }}
            style={props.style || {minWidth}}
        >
            <Pressable
                android_ripple={Platform.OS === 'android' ? {
                    color: variant === "white" ? colors.gray2
                        : variant === "gray" ? colors.white : colors.gray4
                } : null}
                onPress={(e) => {
                    buttonRef.current.measure((fx, fy, w, h, px, py) => {
                        let {width, height} = Dimensions.get('window')
                        let estHeight = 38 * options.length + 16 + (multi ? 40 : 0)
                        if (estHeight > height) {
                            estHeight = height
                        }
                        let x = px,
                            y = py
                        let maxWidth = null
                        let maxHeight = null
                        if (x + minWidth > width) {
                            x = width - minWidth
                            maxWidth = minWidth
                        }
                        if (y + estHeight > height) {
                            maxHeight = estHeight
                            y = height - estHeight
                        } else {
                            maxHeight = height
                        }
                        setLayout({x: x, y: y, height: maxHeight, minWidth: layoutRef.current.width, width: maxWidth})
                        setShowing((prev) => !prev)
                    })
                }}
                style={{flex: 1}}
            >
                <View
                    ref={buttonRef}
                    style={[
                        {
                            borderRadius: 8,
                            padding: 8,
                            borderWidth: 1,
                            borderColor: variant === "light" || variant === "none" || variant === null ? colors.gray3
                                : variant === "dark" ? "transparent" : null,
                            backgroundColor: variant === "light" ? colors.white
                                : variant === "dark" ? colors.grayPrimary
                                    : variant === "none" || variant === null ? colors.grayBg : null,
                        },
                        selectHeight ? {justifyContent: 'center', height: selectHeight} : null,
                    ]}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Typography
                            variant={textVariant}
                            color={(_selected.length && (variant === "light" || variant === "none" || variant === null)) ? colors.grayPrimary
                                : variant === "light" || variant === "none" || variant === null ? colors.gray3
                                    : _selected.length && variant === "dark" ? colors.white
                                        : !_selected.length ? colors.gray3 : null}
                            nowrap
                            style={{
                                flex: 1,
                            }}
                        >
                            {component
                                ? component
                                : _selected.length
                                    ? _options
                                        .filter((option) => _selected.indexOf(option.value) > -1)
                                        .map((option) => option.title)
                                        .join(', ')
                                    : title
                                        ? title
                                        : 'Nothing selected'}
                        </Typography>
                        <Spacer />
                        <Icon name={showing ? "chevron-up" : "chevron-down"} color={variant === "light" || variant === "none" || variant === null ? colors.gray3
                            : variant === "dark" ? colors.white : null}
                        />
                    </View>
                </View>
            </Pressable >
            {showing && (
                <Modal animationType="none" visible={showing} transparent={true} style={{borderRadius: 8, padding: 8}}>
                    <TouchableWithoutFeedback onPress={() => setShowing(false)}>
                        <View style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}} />
                    </TouchableWithoutFeedback>
                    <ScrollView
                        style={{
                            position: 'absolute',
                            left: layout.x,
                            top: layout.y + (Platform.OS === "ios" ? layoutRef.current.height + 8 : 0),
                            backgroundColor: variant === "light" ? colors.white
                                : variant === "dark" ? colors.grayPrimary
                                    : variant === "none" || variant === null ? colors.grayBg : null,
                            paddingVertical: 8,
                            borderWidth: 1,
                            borderColor: variant === "light" || variant === "none" || variant === null ? colors.gray3
                                : variant === "dark" ? colors.gray3 : null,
                            paddingHorizontal: 16,
                            width: layout.width,
                            minWidth: layoutRef.current.width,
                            maxHeight: maxHeight || layout.height,
                            borderRadius: 8,
                        }}
                    >
                        {_options.map((option, i) =>
                            option.type === 'label' ? (
                                <View
                                    key={'option' + i + option.value}
                                    style={{flexDirection: 'row', alignItems: 'center', padding: 8, paddingLeft: 0}}
                                >
                                    <Typography bold color={variant === "dark" ? colors.accent : colors.yellow}>{option.title}</Typography>
                                </View>
                            ) : (
                                <Pressable
                                    key={'option' + i + option.value}
                                    onPress={() => {
                                        if (option.disabled) {
                                            return true
                                        }
                                        if (!multi) {
                                            setShowing(false)
                                            if (onChange) {
                                                onChange(option.value)
                                            }
                                        } else {
                                            let index = multiSelected.indexOf(option.value)
                                            // console.log('multi click index', index, option)
                                            if (index > -1) {
                                                multiSelected.splice(index, 1)
                                            } else {
                                                multiSelected.push(option.value)
                                            }
                                            setMultiSelected([...multiSelected.slice(-limit)])
                                            // console.log('new value', multiSelected)
                                        }
                                    }}
                                    style={{flexDirection: 'row', alignItems: 'center'}}
                                >
                                    {multi && (
                                        <>
                                            <Checkbox variant={variant === "dark" ? null : "light"} key={'option-check-' + i + option.value} checked={multiSelected.indexOf(option.value) > -1} />
                                        </>
                                    )}

                                    <Typography
                                        bold={option.type != "label" && selected === option.value}
                                        color={option.disabled ? "gray2"
                                            : variant === "light" || variant === "none" || variant === null ? colors.gray4
                                                : variant === "dark" ? colors.white : null
                                        }
                                        style={{padding: 8, paddingLeft: multi ? 8 : 0}}
                                    >
                                        {option.title}
                                    </Typography>
                                </Pressable>
                            )
                        )}
                        {multi && (
                            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 8}}>
                                <Button
                                    small
                                    textVariant="body"
                                    variant={variant === "light" || variant === "none" || variant === null ? "primary" : "secondary"}
                                    title={saveTitle || 'Save'}
                                    onPress={() => {
                                        if (onChange) {
                                            setShowing(false)
                                            onChange(multiSelected.join(','))
                                        }
                                    }}
                                />
                                {limit && (
                                    <>
                                        {multiSelected.length > 0 && (
                                            <Typography style={{paddingLeft: 16}}
                                                color={variant === "light" || variant === "none" || variant === null ? colors.gray4
                                                    : variant === "dark" ? colors.white : null
                                                }
                                            >
                                                {multiSelected.length} of {limit}
                                                {limitLabel ? ' ' + limitLabel : ''}
                                            </Typography>
                                        )}
                                    </>
                                )}
                            </View>
                        )}
                    </ScrollView>
                </Modal>
            )
            }
        </View >
    )
}
