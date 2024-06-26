import {View} from "react-native";
import React from "react";
import Button from "../../components/Button";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import AddToCartButton from "../../components/AddToCartButton";

function ButtonsScreen() {
    const [disabled, setDisabled] = React.useState(false);
    const [cart, setCart] = React.useState(0)
    return (
        <Wrapper hasTopNav>
            <View style={{width: "100%", padding: 20}}>
                <Button title={disabled ? "Enable" : "Disable"} onPress={() => setDisabled(!disabled)} />
                <Spacer />
                <Button disabled={disabled} fullWidth title={"Primary"} />
                <Spacer />
                <Button disabled={disabled} variant={"outlined"} iconLeft={"bell"} iconRight={"plus"} fullWidth title={"Outlined"} />
                <Spacer />
                <Button disabled={disabled} variant={"secondary"} iconRight={"plus"} title={"Secondary"} />
                <Spacer />
                <Button disabled={disabled} variant={"outlined-danger"} iconLeft={"plus"} title={"Outlined Danger"} />
                <Spacer />
                <Button disabled={disabled} variant={"text"} title={"Text"} />
                <Spacer />
                <Button disabled={disabled} shape={"circle"} iconLeft={"bell"} />
                <Spacer />
                <View style={{width: 150}}>
                    <AddToCartButton
                        disabled={disabled}
                        fullWidth
                        variant="primary"
                        title={cart > 0 ? cart : "Add to cart"}
                        textVariant="medium"
                        shape="round"
                        small
                        iconSize={23}
                        iconRight={cart > 0 ? "plus" : null}
                        iconLeft={cart > 0 ? "trash" : null}
                        onPressText={cart === 0 ? () => setCart(cart + 1) : null}
                        onPressLeft={cart > 0 ? () => setCart(cart - 1) : null}
                        onPressRight={cart > 0 ? () => setCart(cart + 1) : null}
                    />
                </View>
                <Spacer />
                <Button variant="orderGray" disabled={disabled} iconRight={"users"} title="1 Person" />
            </View>
        </Wrapper>
    );
}

export default ButtonsScreen;
