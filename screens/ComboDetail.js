import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView} from 'react-native';
import Icon from "../components/Icon/Index"
import colors from '../utils/colors';
import Button from "../components/Button"
import Typography from '../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '../utils/Spacer';
import MOCKED_DATA from "../assets/ITEMS"
import ComboOptions from '../components/ComboOptions';

function ComboDetails({route, navigation}) {
    const [options, setOptions] = React.useState({});
    const insets = useSafeAreaInsets();
    const item = MOCKED_DATA[0];

    //TODOS:
    // Add or remove button should be displayed only if the item is already in the cart

    // This will be a reducer
    const handleSelection = (optionType, selectedId) => {
        const selectedOption = item.comboOptions.find(opt => opt.type === optionType).options.find(o => o.id === selectedId);

        if (selectedOption) {
            setOptions(prevOptions => ({
                ...prevOptions,
                [optionType]: selectedOption.name
            }));
        }
    };

    React.useEffect(() => {
        let newOptions = {};
        item.comboOptions.forEach(option => {
            if (option.defaultSelection != null) {
                const selectedOption = option.options.find(item => item.id === option.defaultSelection);
                if (selectedOption) {
                    newOptions[option.type] = selectedOption.name;
                }
            }
        });
        setOptions(prevOptions => ({...prevOptions, ...newOptions}));
    }, []);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            {/* TOPNAV */}
            <View style={[styles.topNav, {top: insets.top}]}>
                <Pressable onPress={() => navigation.goBack()}
                    style={{
                        padding: 4,
                        borderRadius: 20,
                        backgroundColor: colors.grayPrimary,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon name="chevron-left" size={26} color="white" />
                </Pressable>
                <Spacer />
                {/* <Typography color="black" variant="medium">{item.comboTitle}</Typography> */}
            </View>
            <ScrollView bounces={false} style={{flex: 1, width: "100%"}} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.body}>
                    <Image source={{uri: item.image}} style={styles.image} />
                    <View style={styles.info}>
                        <Typography variant="heading2">{item.comboTitle}</Typography>
                        <Spacer />
                        <Typography variant="body">{item.comboDescription}</Typography>
                        <Spacer />
                        <Typography bold variant="medium">${item.price}</Typography>
                        <Spacer x={3} />
                        {item.comboOptions.map((option, index) => (
                            <React.Fragment key={"combo-option-" + index}>
                                <ComboOptions
                                    defaultSelection={option.defaultSelection}
                                    label={option.title}
                                    items={option.options}
                                    onSelect={(id) => handleSelection(option.type, id)}
                                />
                                <Spacer x={2} />
                            </React.Fragment>
                        ))}
                    </View>
                </View>
            </ScrollView>
            {/* BOTNAV */}
            <View style={[styles.bottomNav, {bottom: 0, paddingBottom: insets.bottom + 20}]}>
                {/*  TODO: We should fix the button to make it look like the design */}
                <View style={styles.customButton}>
                    <Pressable onPress={() => console.log("pressed")}>
                        <Icon name="trash" size={26} color="black" />
                    </Pressable>
                    <Spacer x={2} />
                    <Typography variant="medium">1</Typography>
                    <Spacer x={2} />
                    <Pressable onPress={() => console.log("pressed")}>
                        <Icon name="plus" size={26} color="black" />
                    </Pressable>
                </View>
                <Spacer x={2} />
                <View style={{flex: 1}}>
                    <Button fullWidth variant="primary" title={`Add $${item.price}`} />
                </View>
            </View>
        </View>
    )
}

export default ComboDetails;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingBottom: 200
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    customButton: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: "row",
        borderColor: "black",
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "space-evenly"
    },
    info: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    image: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    topNav: {
        padding: 20,
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        left: 0,
        right: 0,
        zIndex: 100,
    },
    bottomNav: {
        padding: 10,
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: colors.grayBg
    }
})