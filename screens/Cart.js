import React from 'react';
import {View, ScrollView, Pressable, StyleSheet, FlatList, LogBox, LayoutAnimation} from 'react-native';
import Typography from '../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '../utils/Spacer';
import Icon from "../components/Icon/Index"
import colors from '../utils/colors';
import Button from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart, addProductToCart, removeProductFromCart} from '../slices/cart-slice';
import ModalComponent from '../components/Modal';
import CartCard from '../components/CartCard';


// Since we're not using any deeplinks, we can ignore this warning. This is related to passing a function in the navigation params.
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

function Cart({navigation}) {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const cartCardRef = {}
    const [bottomNavHeight, setBottomNavHeight] = React.useState(0);
    const [confirmEmptyModal, setConfirmEmptyModal] = React.useState(false);
    const cartProducts = useSelector(state => state.cart.products);
    const totalCartQuantity = useSelector(state => state.cart.totalQuantity);
    const totalCartAmount = useSelector(state => state.cart.totalAmount);

    //TODOS
    // Add an animation to the height to 0 when removing an item from the cart

    // FUNCTIONS
    const emptyCart = () => {
        totalCartQuantity > 0 ?
            setConfirmEmptyModal(true)
            : null
    }

    const getProduct = (productId) => {
        return cartProducts.find((p) => p.id === productId);
    }

    const actionButtonOnPressLeft = (item) => {
        const cartProduct = getProduct(item.id);
        cartProduct?.quantity === 1 ?
            cartCardRef[item.id]?.current?.openSwipeable()
            : dispatch(removeProductFromCart(item.id))
    } 

    const handleRemoveItem = (itemId) => {
        // This will animate changes over the next render cycle
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        dispatch(removeProductFromCart(itemId))
    };

    React.useEffect(() => {
        navigation.setParams({emptyCart: emptyCart});
    }, [navigation]);

    return (
        <View style={[styles.container, {paddingBottom: bottomNavHeight}]}>
            {totalCartQuantity > 0 ?
                <FlatList
                    style={{width: "100%"}}
                    data={cartProducts}
                    renderItem={({item, index}) => {
                        if (!cartCardRef[item.id]) {  // Initialize ref if not already present
                            cartCardRef[item.id] = React.createRef();
                        }
                        return (<>
                            {index === 0 && <Spacer />}
                            <CartCard
                                ref={cartCardRef[item.id]}
                                loading={false}
                                item={item}
                                quantity={item.quantity}
                                removeButtonOnPress={() => handleRemoveItem(item.id)}
                                actionButtonOnPressLeft={() => actionButtonOnPressLeft(item)}
                                actionButtonOnPressRight={() => dispatch(addProductToCart(item))}
                            />
                        </>)
                    }
                    }
                    keyExtractor={(item, index) => String(index)}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{
                        borderBottomColor: colors.gray2,
                        borderBottomWidth: 1,
                    }}></View>}
                    ListFooterComponentStyle={{paddingBottom: 20}}

                />
                :
                <Icon name="empty-cart" size={100} />
            }
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
                <Button variant="secondary" title="Checkout" />
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
                    onConfirm: () => {
                        dispatch(clearCart())
                        setConfirmEmptyModal(false)
                    },
                }}
            />
        </View>
    );
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.grayBg,
    },
    body: {
        flex: 1,
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
