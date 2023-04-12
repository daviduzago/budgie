import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import colors from "../../utils/colors";
import CartIcon from "../../components/CartIcon";
import AddToCartButton from "../../components/AddToCartButton";

export default function CartIconScreen() {
    const [loading, setLoading] = React.useState(false)
    const [cart, setCart] = React.useState(0)
    return (
        <Wrapper dark hasTopNav>
            <View style={{flex: 1, padding: 20, width: '100%', alignItems: "center"}}>
                <Spacer x={4} />
                <View style={{flexDirection: "row"}}>
                    <CartIcon items={cart} />
                </View>
                <Spacer x={4} />
                <View style={{width: 200}}>
                    <AddToCartButton
                        variant="primary"
                        fullWidth
                        borderColor={colors.white}
                        title={cart > 0 ? cart : "Add to cart"}
                        textVariant="medium"
                        shape="round"
                        iconRight={cart > 0 ? "plus" : null}
                        iconLeft={cart > 0 ? "trash" : null}
                        onPressText={cart === 0 ? () => setCart(cart + 1) : null}
                        onPressLeft={cart > 0 ? () => setCart(cart - 1) : null}
                        onPressRight={cart > 0 ? () => setCart(cart + 1) : null}
                    />
                </View>
            </View >
        </Wrapper >
    );
}
