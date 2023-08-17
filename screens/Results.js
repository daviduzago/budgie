import React from 'react';
import {StyleSheet, ScrollView, ActivityIndicator, View, Image, Pressable, FlatList} from 'react-native';
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


function Results({navigation}) {
    // HOOKS
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();

    // STATE
    const [checkoutButton, setCheckoutButton] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [paginationLoading, setPaginationLoading] = React.useState(false);
    const [topNavHeight, setTopNavHeight] = React.useState(0);

    // STORE
    const cartProducts = useSelector(state => state.cart.products);
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);

    const renderedData = loading ? new Array(3).fill(FAKE_DATA[0]) : data;

    // FUNCTIONS

    const actionButtonOnPressText = (product) => {
        const cartProduct = getProduct(product.id);
        if (cartProduct && cartProduct.quantity > 0) {
            return
        } else {
            dispatch(addProductToCart(product));
        }
    }

    const getProduct = (productId) => {
        return cartProducts.find((p) => p.id === productId);
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
        console.log("Total Amount: $", cartTotalAmount);
        console.log("Total Quantity: ", cartTotalQuantity);
    }, [cartProducts]);

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