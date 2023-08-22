import React from 'react';
import {StyleSheet, ActivityIndicator, View, Image, Pressable, FlatList, Platform, KeyboardAvoidingView, Keyboard} from 'react-native';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Icon from '../components/Icon/Index';
import Spacer from '../utils/Spacer';
import Card from '../components/Cards';
import colors from '../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FAKE_DATA from '../assets/ITEMS'
import {useSelector, useDispatch} from 'react-redux';
import {addProductToCart, removeProductFromCart} from '../slices/cart-slice';
import CartIcon from '../components/CartIcon';
import Modal from '../components/Modal';
import Input from '../components/Input';
import {Picker} from '@react-native-picker/picker';

function Results({navigation}) {
    // HOOKS
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();

    // STATE
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [paginationLoading, setPaginationLoading] = React.useState(false);
    const [topNavHeight, setTopNavHeight] = React.useState(0);
    const [updateModal, setUpdateModal] = React.useState(false);
    const [pickerVisible, setPickerVisible] = React.useState(false);
    const pickerRef = React.useRef();
    const [people, setPeople] = React.useState(1);
    const [locationModalVisible, setLocationModalVisible] = React.useState(false);

    // STORE
    const cartProducts = useSelector(state => state.cart.products);
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);

    const renderedData = loading ? new Array(3).fill(FAKE_DATA[0]) : data;

    // FUNCTIONS
    const getProduct = (productId) => {
        return cartProducts.find((p) => p.id === productId);
    }

    const actionButtonOnPressText = (product) => {
        const cartProduct = getProduct(product.id);
        if (cartProduct && cartProduct.quantity > 0) {
            return
        } else {
            dispatch(addProductToCart(product));
        }
    }

    const actionButtonDetails = (product) => {
        const cartProduct = getProduct(product.id);

        if (!cartProduct) {
            return {
                title: "Add to cart",
                iconRight: null,
                iconLeft: null,
            };
        }

        return {
            title: cartProduct.quantity,
            iconRight: cartProduct.quantity > 0 ? "plus" : null,
            iconLeft: cartProduct.quantity > 0 ? "trash" : null,
        };
    }

    React.useEffect(() => {
        if (page > 1 && page < 3) {
            setPaginationLoading(true);
            setTimeout(() => {
                setData(prevData => [...prevData, ...FAKE_DATA.slice(8, 10)]);
                setPaginationLoading(false);
            }, 1500);
        }
    }, [page]);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(prevData => [...prevData, ...FAKE_DATA.slice(0, 8)]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <View
            style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}
        >
            {/*  TOPNAV */}
            <View
                style={[styles.topNav, {top: insets.top}]}
                onLayout={(event) => {
                    const height = event.nativeEvent.layout.height;
                    setTopNavHeight(height);
                }}>

                <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingRight: 10}}>
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
                    <Pressable onPress={() => { }}>
                        <CartIcon items={cartTotalQuantity} />
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
                    <Button disabled={loading} onPress={() => setUpdateModal(true)} small title="Edit" textVariant="body" iconLeft="pencil-square" iconSize={20} variant="secondary" />
                </View>
            </View>
            {/* RESULTS */}
            <View style={[styles.body, {paddingTop: topNavHeight}]}>
                <FlatList
                    data={renderedData}
                    renderItem={({item, index}) => {
                        const {title, iconRight, iconLeft} = actionButtonDetails(item);
                        return (<>
                            {index === 0 && <Spacer />}
                            <Card
                                option
                                loading={loading}
                                item={item}
                                actionButtonTitle={title}
                                actionButtonIconRight={iconRight}
                                actionButtonIconLeft={iconLeft}
                                actionButtonOnPressText={() => actionButtonOnPressText(item)}
                                actionButtonOnPressLeft={() => dispatch(removeProductFromCart(item.id))}
                                actionButtonOnPressRight={() => dispatch(addProductToCart(item))}
                            />
                        </>)
                    }
                    }
                    keyExtractor={(item, index) => String(index)}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <Spacer x={2} />}
                    ListFooterComponentStyle={{paddingBottom: 100}}
                    onEndReached={() => {
                        if (page < 3) setPage(prev => prev + 1)
                    }}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => paginationLoading && data ? (<View>
                        <Spacer />
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>) : null}
                />
            </View>
            {/* CHECKOUT BUTTON */}
            {cartTotalQuantity > 0 && <Pressable
                style={[styles.checkoutButtonContainer, {bottom: insets.bottom}]}
            >
                <View style={styles.checkoutButton} >
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Icon name="shopping-cart" size={24} color={colors.white} />
                        <Spacer x={0.5} />
                        <Typography variant="heading2" color="white">Checkout</Typography>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <Typography variant="heading2" light color="gray2">Total:</Typography>
                        <Spacer x={0.5} />
                        <Typography variant="heading2" color="white">${(Math.round(cartTotalAmount * 100) / 100).toFixed(2)}</Typography>
                    </View>
                </View>
            </Pressable>}
            {/* Dark Modal */}
            <Modal
                variant="dark"
                transparent
                animationType="slide"
                onRequestClose={() => setUpdateModal(false)}
                visible={updateModal}
            >
                <Pressable onPress={() => {
                    if (pickerRef.current) pickerRef.current.blur()
                    setPickerVisible(false)
                    setLocationModalVisible(false)
                    Keyboard.dismiss()
                }}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null} style={{flex: 1}}>
                        <View style={{alignItems: "center", paddingVertical: 16, paddingHorizontal: 20}}>
                            <Typography color="white" variant="heading1">Edit your options</Typography>
                            <Spacer x={2} />
                            <Input
                                value={"20"}
                                onChangeText={() => { }}
                                keyboardType={"number-pad"}
                                icon={"currency-dollar"}
                                placeholder={"Your budget"}
                                variant="gray" />
                            <Button
                                fullWidth
                                variant="inputGray"
                                iconRight={"users"}
                                title={`${people} ${people > 1 ? "People" : "Person"}`}
                                onPress={() => {
                                    setPickerVisible(true)
                                    if (pickerRef.current) pickerRef.current.focus()
                                }} />
                            <Button
                                fullWidth
                                variant="inputGray"
                                iconRight={"map-pin"}
                                title={"Your location"}
                                onPress={() => {
                                    setLocationModalVisible(true)
                                }} />
                            <View style={{width: 200}}>
                                <Button onPress={() => { }} fullWidth title="Update" variant="secondary" />
                            </View>
                            <Spacer x={2} />
                            <Typography style={{textAlign: "center"}} variant="extraSmall" color="white">Delivery fees are included in the final price of each option. Available choices may be limited based on your location and budget. Thank you for your understanding!</Typography>
                        </View>
                        {/* Location Modal */}
                        <Modal
                            transparent
                            variant="lightGray"
                            animationType="slide"
                            visible={locationModalVisible}
                            onRequestClose={() => setLocationModalVisible(false)}
                        >
                            <View style={{rowGap: 8, paddingVertical: 16, paddingHorizontal: 20}}>
                                <Typography style={{textAlign: "center"}} variant="heading2">Choose a new address</Typography>
                                <Button noErrorLabel variant="inputWhite" iconRight={"map"} title={"Enter your address"} onPress={() => setLocationModalVisible(false)} />
                                <Button noErrorLabel variant="inputBackground" iconRight={"pin"} title={"Current location"} />
                            </View>
                        </Modal>
                        {/* Picker */}

                    </KeyboardAvoidingView>
                </Pressable>
                {pickerVisible && <Picker
                    ref={pickerRef}
                    style={styles.picker}
                    selectedValue={people}
                    onValueChange={itemValue => setPeople(itemValue)} >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                </Picker>}
            </Modal>

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
    },
    picker: {
        backgroundColor: colors.grayBg,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        opacity: Platform.OS === "android" ? 0 : 1,
    }
})