import React from "react"
import {View, TextInput, StyleSheet} from "react-native"
import colors from "../utils/colors";

export default function OtpInput(props) {
    const [digit1, setDigit1] = React.useState('');
    const [digit2, setDigit2] = React.useState('');
    const [digit3, setDigit3] = React.useState('');
    const [digit4, setDigit4] = React.useState('');
    const digit1Ref = React.useRef(null)
    const digit2Ref = React.useRef(null)
    const digit3Ref = React.useRef(null)
    const digit4Ref = React.useRef(null)

    const handleDigit1Change = (value) => {
        setDigit1(value);
    };

    const handleDigit2Change = (value) => {
        if (digit1 === 0 && nativeEvent.key == 'Backspace') {
            digit1Ref.current.focus();
        } else {
            setDigit2(value);
        }
    };

    const handleDigit3Change = (value) => {
        setDigit3(value);
    };

    const handleDigit4Change = (value) => {
        setDigit4(value);
    };

    React.useEffect(() => {
        if (digit1.length > 0) digit2Ref.current.focus();
        if (digit2.length > 0) digit3Ref.current.focus();
        if (digit3.length > 0) digit4Ref.current.focus();
        if (digit4.length > 0) {
            digit4Ref.current.blur()
            props.otpCode(digit1 + digit2 + digit3 + digit4);
        }
    }, [digit1, digit2, digit3, digit4]);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {digit1.length === 0 && <View style={styles.emptyDot} />}
                <TextInput
                    ref={digit1Ref}
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={digit1}
                    onChangeText={handleDigit1Change}
                />
            </View>
            <View style={styles.inputContainer}>
                {digit2.length === 0 && <View style={styles.emptyDot} />}
                <TextInput
                    ref={digit2Ref}
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={digit2}
                    onKeyPress={(e) => {
                        if (e.nativeEvent.key == 'Backspace') digit1Ref.current.focus();
                    }}
                    onChangeText={handleDigit2Change}
                />
            </View>
            <View style={styles.inputContainer}>
                {digit3.length === 0 && <View style={styles.emptyDot} />}
                <TextInput
                    ref={digit3Ref}
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={digit3}
                    onKeyPress={(e) => {
                        if (e.nativeEvent.key == 'Backspace') digit2Ref.current.focus();
                    }}
                    onChangeText={handleDigit3Change}
                />
            </View>
            <View style={styles.inputContainer}>
                {digit4.length === 0 && <View style={styles.emptyDot} />}
                <TextInput
                    ref={digit4Ref}
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={digit4}
                    onKeyPress={(e) => {
                        if (e.nativeEvent.key == 'Backspace') digit3Ref.current.focus();
                    }}
                    onChangeText={handleDigit4Change}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    emptyDot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: colors.grayPrimary,
        position: 'absolute',
        top: 25,
        left: 20,
        zIndex: 5
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: colors.grayPrimary,
        backgroundColor: colors.gray2,
        width: 45,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 32,
        fontWeight: "500",
        letterSpacing: -0.5,
        fontFamily: "Lato Regular",
    },
});