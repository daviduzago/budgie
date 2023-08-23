import React from 'react';
import {View, ScrollView, Pressable, StyleSheet, FlatList} from 'react-native';
import Typography from '../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '../utils/Spacer';
import Icon from "../components/Icon/Index"
import colors from '../utils/colors';
import Button from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart} from '../slices/cart-slice';
import ModalComponent from '../components/Modal';
import Cards from '../components/Cards';


function Cart({navigation}) {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const [bottomNavHeight, setBottomNavHeight] = React.useState(0);
    const [confirmEmptyModal, setConfirmEmptyModal] = React.useState(false);
    const cartProducts = useSelector(state => state.cart.products);
    const totalCartQuantity = useSelector(state => state.cart.totalQuantity);
    const totalCartAmount = useSelector(state => state.cart.totalAmount);

    const emptyCart = () => {
        totalCartQuantity > 0 ?
            setConfirmEmptyModal(true)
            : null
    }

    React.useEffect(() => {
        navigation.setParams({emptyCart: emptyCart});
    }, [navigation]);

    return (
        <View style={[styles.container, {paddingBottom: bottomNavHeight}]}>
            {totalCartQuantity > 0 ?
                <FlatList
                    data={cartProducts}
                    renderItem={({item, index}) => {
                        //const {title, iconRight, iconLeft} = actionButtonDetails(item);
                        return (<>
                            {index === 0 && <Spacer />}
                            <Cards
                                cart
                                loading={false}
                                item={item}
                            />
                        </>)
                    }
                    }
                    keyExtractor={(item, index) => String(index)}
                    showsVerticalScrollIndicator={false}
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
                    <Spacer />
                    <Typography variant="heading2" color="white">${totalCartAmount}</Typography>
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
