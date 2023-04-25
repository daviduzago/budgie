import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import colors from "../../utils/colors";
import CartIcon from "../../components/CartIcon";
import AddToCartButton from "../../components/AddToCartButton";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../../slices/counter-slice";

export default function CartIconScreen() {
    const [loading, setLoading] = React.useState(false)
    const [cart, setCart] = React.useState(0)
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.value)
    return (
        <Wrapper dark hasTopNav>
            <View style={{flex: 1, padding: 20, width: '100%', alignItems: "center"}}>
                <Spacer x={4} />
                <View style={{flexDirection: "row"}}>
                    <CartIcon items={counter} />
                </View>
                <Spacer x={4} />
                <View style={{width: 200}}>
                    <AddToCartButton
                        variant="primary"
                        fullWidth
                        borderColor={colors.white}
                        title={counter > 0 ? counter : "Add to cart"}
                        textVariant="medium"
                        shape="round"
                        iconRight={counter > 0 ? "plus" : null}
                        iconLeft={counter > 0 ? "trash" : null}
                        onPressText={counter === 0 ? () => dispatch(increment()) : null}
                        onPressLeft={counter > 0 ? () => dispatch(decrement()) : null}
                        onPressRight={counter > 0 ? () => dispatch(increment()) : null}
                    />
                </View>
            </View >
        </Wrapper >
    );
}
