import React from 'react';
import {View, ScrollView, Pressable, StyleSheet} from 'react-native';
import Typography from '../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spacer from '../utils/Spacer';
import Icon from "../components/Icon/Index"
import colors from '../utils/colors';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import ModalComponent from '../components/Modal';


function Cart({navigation}) {
    const insets = useSafeAreaInsets();
    const [bottomNavHeight, setBottomNavHeight] = React.useState(0);
    const [confirmEmptyModal, setConfirmEmptyModal] = React.useState(false);
    const totalCartQuantity = useSelector(state => state.cart.totalQuantity);

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
            {totalCartQuantity > 1 ?
                <ScrollView bounces={false} style={{flex: 1, width: "100%"}} contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.body}>
                        <Typography variant="medium">Cart</Typography>
                    </View>
                </ScrollView>
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
                    <Typography variant="heading2" color="white">$0.00</Typography>
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
                    onCancel: () => {setModals({...modals, confirmation: !modals.confirmation})},
                    onConfirm: () => {console.log("Cart Emptied")},
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
