import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image, Pressable} from 'react-native';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Icon from '../components/Icon/Index';
import Spacer from '../utils/Spacer';
import Card from '../components/Cards';
import colors from '../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Results({navigation}) {
    const insets = useSafeAreaInsets();
    const [topNavHeight, setTopNavHeight] = React.useState(0);
    const [checkoutButton, setCheckoutButton] = React.useState(false);

    return (
        <View
            style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}
        >
            <View
                style={[styles.topNav, {top: insets.top}]}
                onLayout={(event) => {
                    const height = event.nativeEvent.layout.height;
                    setTopNavHeight(height);
                }}>
                {/*  TOPNAV */}
                <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 6}}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={40} color={colors.white} />
                    </Pressable>
                    <Spacer />
                    <Image source={{uri: "https://i.pravatar.cc/60"}} style={{width: 60, height: 60, borderRadius: 30, backgroundColor: colors.gray2}} />
                    <View style={{flex: 1, paddingLeft: 10}}>
                        <Typography color="white" variant="medium">Hi, Eduardo</Typography>
                        <Spacer x={0.5} />
                        <Typography color="gray3">You're almost finished</Typography>
                    </View>
                    <Pressable onPress={() => setCheckoutButton(prev => !prev)}>
                        <Icon name="cart" size={30} color={colors.white} />
                    </Pressable>
                    <Spacer />
                </View>
                <Spacer x={0.5} />
                <View style={{borderBottomWidth: 1, borderColor: colors.gray3, }}></View>
                <Spacer x={0.5} />
                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: 6}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="currency-dollar" size={24} color={colors.gray2} />
                        <Spacer x={0.5} />
                        <Typography color="gray2" variant="medium">$20.00</Typography>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="users" size={24} color={colors.gray2} />
                        <Spacer x={0.5} />
                        <Typography color="gray2" variant="medium">1</Typography>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="map-pin" size={24} color={colors.gray2} />
                        <Spacer x={0.5} />
                        <Typography color="gray2" variant="medium">Home</Typography>
                    </View>
                    <Button small title="Edit" textVariant="body" iconLeft="pencil-square" iconSize={20} variant="secondary" />
                </View>
            </View>
            {/* BODY */}
            <ScrollView style={[styles.body, {paddingTop: topNavHeight}]}>
                <Typography variant="heading1">Body</Typography>
            </ScrollView>
            {checkoutButton && <Pressable style={[styles.checkoutButtonContainer, {bottom: insets.bottom}]}>
                <View style={styles.checkoutButton}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Icon name="shopping-cart" size={24} color={colors.white} />
                        <Spacer x={0.5} />
                        <Typography variant="heading2" color="white">Checkout</Typography>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Typography variant="heading2" light color="gray2">Total:</Typography>
                        <Spacer x={0.5} />
                        <Typography variant="heading2" color="white">$20.00</Typography>
                    </View>
                </View>
            </Pressable>}
        </View>
    )
}

export default Results;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayBg
    },
    topNav: {
        backgroundColor: colors.grayPrimary,
        position: "absolute",
        padding: 10,
        left: 0,
        right: 0,
        zIndex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    body: {
        flex: 1,
        padding: 10,
    },
    checkoutButtonContainer: {
        padding: 20,
        position: "absolute",
        left: 0,
        right: 0,
    },
    checkoutButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: colors.grayPrimary,
        borderRadius: 15,
        padding: 10,
    }
})