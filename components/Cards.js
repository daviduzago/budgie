import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import Typography from './Typography';
import Button from './Button';
import Icon from './Icon/Index';
import colors from '../utils/colors';
import Spacer from '../utils/Spacer';
import AddToCartButton from './AddToCartButton';

const Bullet = (props) => {
    const {quantity, name} = props
    return (
        <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', paddingLeft: 16}}>
                <Typography variant="body" color={colors.gray3}>
                    {`\u2022`}{' '}
                </Typography>
                <Typography variant="body" color={colors.gray3}>
                    x{quantity}
                </Typography>
                <Spacer x={0.5} />
                {/* TODO: Fix the nowrap not working for long items */}
                <Typography nowrap variant="body" color={colors.gray3}>
                    {name}
                </Typography>
            </View>
            <Spacer x={0.5} />
        </View>
    )
}

export default function OptionCard(props) {
    const [cart, setCart] = React.useState(0);
    const {item, onAddCart} = props;

    return (
        <View style={style.container}>
            <View style={style.leftSection}>
                <ImageBackground
                    source={require("../assets/fast-food.png")}
                    /* TODO:Fixthecenteringofthedefaultimage */
                    imageStyle={{resizeMode: "contain", width: "100%", height: "100%", }}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        justifyContent: !item.image ? "center" : null,
                        alignItems: !item.image ? "center" : null,
                        overflow: "hidden",
                    }}>
                    <Image source={{uri: item.image}} style={{
                        flex: 1,
                        height: 100,
                        resizeMode: "contain",
                        borderRadius: 10,

                    }} />
                </ImageBackground>
                <Spacer />
                <View style={style.rowCenter8}>
                    <Icon strokeWidth={2} name="clock" size={20} color={colors.gray3} />
                    <Spacer x={0.5} />
                    <Typography variant="body" color={colors.gray3}>{item.deliveryTime} min</Typography>
                </View>
                <Spacer x={0.5} />
                <View style={style.rowCenter8}>
                    {
                        [1, 2, 3, 4, 5].map((index) => {
                            return <Icon
                                key={index}
                                name={index <= item.rating ? "star-solid" : "star-outlined"}
                                color={colors.yellow}
                                size={20}
                            />
                        })
                    }
                </View>
            </View>
            <View style={style.rightSection}>
                <Typography bold style={{fontSize: 20}} nowrap color={colors.grayPrimary}>{item.comboTitle}</Typography>
                <Spacer x={0.5} />
                <>
                    {
                        item.comboItems.map((item, index) => {
                            return (
                                <Bullet key={"bullet" + index} quantity={item.quantity} name={item.name} />
                            )
                        })
                    }
                </>
                <Spacer x={0.5} />
                <Button
                    borderColor={colors.gray3}
                    color={colors.gray3}
                    variant="outlined"
                    title="View more information"
                    small
                    fullWidth
                    textVariant="small" />
                <Spacer />
                <View style={{flexDirection: "row", flex: 1}}>
                    <Button
                        variant="outlined"
                        textVariant="medium"
                        title={`$${item.price}`}
                        shape="round"
                        small
                    />
                    <Spacer />
                    <View style={{flex: 1}}>
                        <AddToCartButton
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
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden"
    },
    leftSection: {
        flex: 1 / 3,
        padding: 8,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    rightSection: {
        flex: 2 / 3,
        paddingVertical: 8,
        paddingRight: 8
    },
    rowCenter8: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 8
    }
})
