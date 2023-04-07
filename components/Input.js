import React from "react";
import {TextInput, View} from "react-native";
import colors from "../utils/colors";
import Icon from "../components/Icon/Index"
import Spacer from "../utils/Spacer";
import Typography from "../components/Typography";

export default function Input(props) {
    const {variant, icon, help, error, disabled, autoFocus, style, outlined} = props;
    const ref = React.useRef();
    const useRef = props.passRef || ref;

    let color = props.color || colors.gray3

    let setProps = {...props}

    let addStyles = {...style}

    switch (variant) {
        case "gray":
            addStyles = {
                backgroundColor: colors.gray4,
                color: colors.gray3,
            }
            color = colors.gray3
            break
        case "white":
            addStyles = {
                backgroundColor: colors.white,
                color: colors.gray4,
            }
            color = colors.gray4
            break
        default:
            break
    }

    function handleTextChange(text) {
        if (props.onChangeText) props.onChangeText(text)
        if (props.setValue) props.setValue(text)
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
            <View style={[addStyles, {
                width: "100%",
                borderRadius: 12,
                paddingVertical: 16,
                paddingHorizontal: 24,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: (outlined || error) ? 1 : 0,
                borderColor: error ? colors.danger : outlined ? color : "transparent",
            }]}>
                {icon && <><Icon name={icon} color={color || colors.gray3} /><Spacer /></>}
                <TextInput
                    {...setProps}
                    ref={useRef}
                    placeholderTextColor={props.placeholderTextColor || color || colors.gray3}
                    onChangeText={handleTextChange}
                    style={{
                        color: color || colors.gray3,
                        fontSize: 17,
                        fontFamily: "Lato Regular",
                        flex: 1,
                    }}
                />
                {help && <Icon name={"bell"} color={color || colors.gray3} />}
            </View>
            <Spacer />
            <Typography style={{marginLeft: 8}} error variant="small">{error || " "}</Typography>
        </View>
    )
}
