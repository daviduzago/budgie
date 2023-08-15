import React from "react";
import {Pressable, TextInput, View} from "react-native";
import colors from "../utils/colors";
import Icon from "./Icon/Index"
import Spacer from "../utils/Spacer";
import Typography from "./Typography";

export default function InputAbs(props) {
    const {error, disabled, autoFocus, style, label, value} = props;
    const [clearButton, setClearButton] = React.useState(false);
    const ref = React.useRef();
    const useRef = props.passRef || ref;

    let color = props.color || colors.gray3

    let setProps = {...props}

    let addStyles = {...style}

    function handleTextChange(text) {
        if (props.onChangeText) props.onChangeText(text)
        if (props.setValue) props.setValue(text)

        if (text.length > 0) setClearButton(true)
        if (text.length === 0) setClearButton(false)
    }

    function clearInput() {
        useRef.current.blur()
        if (props.setValue) props.setValue("")
        if (props.onChangeText) props.onChangeText("")
        if (useRef.current) useRef.current.clear()
        setClearButton(false)
    }

    React.useEffect(() => {
        if (autoFocus && useRef.current) {
            useRef.current.focus();
            if (props.onFocus) props.onFocus()
        }
    }, [])

    return (
        <View style={{
            flex: props.style?.flex || null,
        }}>
            <Typography color={disabled ? colors.gray3 : colors.black} variant={"body"} normal medium>{label}</Typography>
            <View style={[addStyles, {
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 4,
                borderBottomWidth: 1,
                borderColor: disabled ? colors.gray3 : error ? colors.danger : color,
                backgroundColor: "transparent",
            }]}>
                <TextInput
                    {...setProps}
                    ref={useRef}
                    value={value}
                    editable={!disabled}
                    placeholderTextColor={props.placeholderTextColor || color || colors.gray3}
                    onChangeText={handleTextChange}
                    style={{
                        color: disabled ? colors.gray3 : colors.black,
                        fontSize: 20,
                        fontFamily: "Lato Regular",
                        flex: 1,
                    }}
                />
                {clearButton && !disabled && <Pressable onPress={clearInput}><Icon name={"x-mark"} color={color || colors.gray2} size={20} /></Pressable>}
            </View>
            <Spacer />
            <Typography error variant="small">{disabled ? " " : error || " "}</Typography>
        </View>
    )
}
