import React from 'react';
import {View, ScrollView, Pressable, StyleSheet} from 'react-native';
import Typography from '../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '../utils/Spacer';
import Icon from "../components/Icon/Index"
import colors from '../utils/colors';
import Button from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart, addProductToCart, removeProductFromCart} from '../slices/cart-slice';
import ModalComponent from '../components/Modal';

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
            </ScrollView>
            {/* BOTNAV */}
            <View
                style={[styles.bottomNav, {bottom: 0, paddingBottom: insets.bottom + 24}]}
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
