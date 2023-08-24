import React from 'react';
import {View, ScrollView, Pressable, StyleSheet, Platform} from 'react-native';
import Typography from '../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '../utils/Spacer';
import Icon from "../components/Icon/Index"
import colors from '../utils/colors';
import Button from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart, addProductToCart, removeProductFromCart} from '../slices/cart-slice';
import ModalComponent from '../components/Modal';
import Card from '../components/Cards';

function Checkout({navigation}) {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const [bottomNavHeight, setBottomNavHeight] = React.useState(0);
    const [confirmEmptyModal, setConfirmEmptyModal] = React.useState(false);
    const cartProducts = useSelector(state => state.cart.products);
    const totalCartQuantity = useSelector(state => state.cart.totalQuantity);
    const totalCartAmount = useSelector(state => state.cart.totalAmount);

    return (
        <View style={[styles.container, {paddingBottom: bottomNavHeight}]}>
            <ScrollView bounces={false} style={styles.body}>
                <Typography variant="heading1">Your order</Typography>
                <Spacer />
                <View style={{rowGap: 16}}>
                    <Card
                        checkout
                        loading={false}
                        icon="map"
                        title="Delivery Address"
                        buttonTitle="Change"
                    >
                        <Typography variant="small">No address added</Typography>
                    </Card>
                    <Card
                        checkout
                        expandable
                        loading={false}
                        icon="order"
                        rightLabel="1 product"
                        title="Papa Jhons"
                    >
                        <Typography variant="small">Your Order</Typography>
                    </Card>
                    <Card
                        checkout
                        loading={false}
                        icon="payment-method"
                        title="Payment Method"
                        buttonTitle="Change"
                    >
                        <Typography variant="small">No payment added</Typography>
                    </Card>
                    <Card
                        checkout
                        loading={false}
                        icon="coupon"
                        title="Coupon"
                        buttonTitle="Add Coupon"
                    />
                    <Card
                        checkout
                        loading={false}
                        icon="tip"
                        title="Courier Tip"
                        buttonTitle="Add $1.80"
                    >
                        <Typography variant="small">If you would like to add the difference between your budget and the final value as a tip, please feel free to do so.</Typography>
                        <Spacer x={2} />
                        <Typography variant="small" color="gray3">100% of your tip goes to your courier!</Typography>
                    </Card>
                    <Card
                        checkout
                        loading={false}
                        title="Order details"
                    >
                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                            <Typography variant="small" >Products</Typography>
                            <Typography variant="small" >${(Math.round(totalCartAmount * 100) / 100).toFixed(2)}</Typography>
                        </View>
                        <Spacer x={2} />
                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                            <Typography variant="small" >Delivery</Typography>
                            <Typography variant="small" >${(Math.round(totalCartAmount * 100) / 100).toFixed(2)}</Typography>
                        </View>
                        <Spacer x={2} />
                        <Typography underlined variant="small" >Learn more about our fees</Typography>
                        <Spacer x={2} />
                        <Typography variant="small" color="gray3" >We are going to make an initial charge to your payment method. If any modifications, we will adjust it when your order is delivered.</Typography>
                    </Card>
                </View>
                <Spacer x={10} />
            </ScrollView>
            {/* BOTNAV */}
            <View
                style={[styles.bottomNav, {bottom: 0, paddingBottom: insets.bottom + (Platform.OS === 'ios' ? 10 : 20)}]}
                onLayout={(event) => {
                    const height = event.nativeEvent.layout.height;
                    setBottomNavHeight(height);
                }}
            >
                <View style={{alignItems: 'center'}}>
                    <Typography variant="body" color="white">Total</Typography>
                    <Typography variant="heading2" color="white">${(Math.round(totalCartAmount * 100) / 100).toFixed(2)}</Typography>
                </View>
                <Button onPress={() => console.log("Set up navigation: Checkout.js")} variant="secondary" title="Place Order" />
            </View>
            <ModalComponent
                onRequestClose={() => setConfirmEmptyModal(false)}
                visible={confirmEmptyModal}
                confirmationModal={{
                    title: "Oops",
                    description: "Are you sure you want emtpy de cart?",
                    cancelText: "No",
                    confirmText: "Yes",
                    onCancel: () => {setConfirmEmptyModal(false)},
                    onConfirm: () => { },
                }}
            />
        </View>
    );
}

export default Checkout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.grayBg,
    },
    body: {
        flex: 1,
        width: "100%",
        padding: 20
    },
    bottomNav: {
        padding: 24,
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: colors.grayPrimary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "space-between",
    }
});
