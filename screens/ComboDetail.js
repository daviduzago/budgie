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

    React.useEffect(() => {
        console.log(options)
    }, [options])

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={[styles.topNav, {top: insets.top}]}>
                <Pressable onPress={() => navigation.goBack()}
                    style={{
                        padding: 4,
                        borderRadius: 20,
                        backgroundColor: colors.grayBg,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon name="chevron-left" size={26} color="black" />
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
                        <Spacer />
                        {item.comboOptions.map((option, index) => (
                            <>
                                <ComboOptions
                                    defaultSelection={option.defaultSelection}
                                    label={option.title}
                                    items={option.options}
                                    onSelect={(id) => handleSelection(option.type, id)}
                                />
                                <Spacer x={2} />
                            </>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ComboDetails;

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
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
        padding: 10,
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        left: 0,
        right: 0,
        zIndex: 100,
    }
})