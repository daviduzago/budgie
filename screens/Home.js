import React from 'react';
import Wrapper from '../components/ui/wrapper';
import {Dimensions, ImageBackground, StyleSheet, Image, KeyboardAvoidingView, Platform} from 'react-native';
import Swiper from '../components/Swiper';
import {View} from 'react-native';
import Typography from '../components/Typography';
import colors from '../utils/colors';
import Spacer from '../utils/Spacer';
import Input from '../components/Input';
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SWIPER_DATA = [
    {
        title: "20% Discount",
        subtitle: "Refer and earn 20% discount on your next purchase",
        buttonText: "Refer a friend",
        image: "https://picsum.photos/100",
        fullImage: "https://picsum.photos/300/120",
    },
    {
        title: "20% Discount",
        subtitle: "Refer and earn 20% discount on your next purchase",
        buttonText: "Refer a friend",
        image: "https://picsum.photos/100",
        fullImage: "https://picsum.photos/300/120",
    },
    {
        title: "20% Discount",
        subtitle: "Refer and earn 20% discount on your next purchase",
        buttonText: "Refer a friend",
        image: "https://picsum.photos/100",
        fullImage: "https://picsum.photos/300/120",
    },
];


function Home() {
    const insets = useSafeAreaInsets();
    return (
        /* TODO: Remove wrapper here */
        <Wrapper hasTopNav>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null} style={{flex: 1}}>
                <ImageBackground
                    imageStyle={{resizeMode: "cover", height: Dimensions.get("window").width, position: 'absolute', top: 0, opacity: 0.8}}
                    source={require('../assets/map-background.png')}
                    style={styles.container}>
                    <View style={styles.header}>
                        <Image source={{uri: "https://i.pravatar.cc/60"}} style={{width: 60, height: 60, borderRadius: 30}} />
                        <View style={{paddingLeft: 10, justifyContent: "center"}}>
                            <Typography normal variant="medium">Hi, John</Typography>
                            <Typography color="gray3">Lets get your order ready!</Typography>
                        </View>
                    </View>
                    <View style={{width: "100%", paddingLeft: 20}}>
                        <Swiper data={SWIPER_DATA} loading={false} />
                    </View>
                    <View style={[styles.order, {paddingBottom: insets.bottom + 20}]}>
                        <View style={{alignItems: "center"}}>
                            <Typography color="white" variant="heading1">Start your order</Typography>
                            <Spacer x={2} />
                            <Typography body light color="white">Welcome! Let's get your feast started. Choose your budget, number of people, and location to find the perfect meal for your appetite and wallet. Bon appétit!</Typography>
                            <Spacer x={2} />
                            <Input icon={"currency-dollar"} placeholder={"$15.00"} variant="gray" />
                            <Input icon={"users"} placeholder={"1 person"} variant="gray" />
                            <Input icon={"map-pin"} placeholder={"Home"} variant="gray" />
                            <View style={{width: 200}}>
                                <Button fullWidth title="Search" variant="secondary" />
                            </View>
                            <Spacer />
                            <Typography style={{textAlign: "center"}} variant="extraSmall" color="white">Delivery fees are included in the final price of each option. Available choices may be limited based on your location and budget. Thank you for your understanding!</Typography>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </Wrapper>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-evenly"
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    order: {
        flex: 1,
        backgroundColor: colors.grayPrimary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    }
})