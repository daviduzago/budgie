import React from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Typography from './Typography';
import Button from './Button';
import Icon from './Icon/Index';
import colors from '../utils/colors';
import Spacer from '../utils/Spacer';
import AddToCartButton from './AddToCartButton';
import LoadingLine from './LoadingLine';

const Bullet = (props) => {
    const {quantity, name, loading} = props
    return (
        <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', paddingLeft: 16, alignItems: "center"}}>
                <Typography variant="body" color={colors.gray3}>
                    {`\u2022`}{' '}
                </Typography>
                {!loading && <>
                    <Typography variant="body" color={colors.gray3}>
                        x{quantity}
                    </Typography>
                    <Spacer x={0.5} />
                    {/* TODO: Fix the nowrap not working for long items */}
                    <Typography nowrap variant="body" color={colors.gray3}>
                        {name}
                    </Typography>
                </>}
                {loading && <LoadingLine width={40} />}
            </View>
            <Spacer x={0.5} />
        </View>
    )
}

function OptionCard(props) {
    const [cart, setCart] = React.useState(0);
    const {item, loading = true} = props;

    return (
        <View style={style.containerOption}>
            <View style={style.leftSection}>
                <ImageBackground
                    source={require("../assets/fast-food.png")}
                    /* TODO:Fixthecenteringofthedefaultimage */
                    imageStyle={{resizeMode: "contain", width: "100%", height: "100%", }}
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 10,
                        justifyContent: !item.image ? "center" : null,
                        alignItems: !item.image ? "center" : null,
                        overflow: "hidden",
                    }}>
                    {!loading && <Image source={{uri: item.image}} style={{
                        flex: 1,
                        height: 100,
                        resizeMode: "contain",
                        borderRadius: 10,

                    }} />}
                </ImageBackground>
                <Spacer />
                <View style={style.rowCenter8}>
                    <Icon strokeWidth={2} name="clock" size={20} color={colors.gray3} />
                    <Spacer x={0.5} />
                    {!loading && <Typography variant="body" color={colors.gray3}>{item.deliveryTime} min</Typography>}
                    {loading && <LoadingLine width={60} />}
                </View>
                <Spacer x={0.5} />
                <View style={style.rowCenter8}>
                    {
                        [1, 2, 3, 4, 5].map((index) => {
                            return <Icon
                                key={index}
                                name={loading ? "star-outlined" : index <= item.rating ? "star-solid" : "star-outlined"}
                                color={loading ? colors.gray2 : colors.yellow}
                                size={20}
                            />
                        })
                    }
                </View>
            </View>
            <View style={style.rightSection}>
                {!loading && <Typography bold variant="medium" nowrap color={colors.grayPrimary}>{item.comboTitle}</Typography>}
                {loading && <LoadingLine width={90} height={23} />}
                <Spacer x={0.5} />
                <>
                    {!loading && item.comboItems.map((item, index) => {
                        return (
                            <Bullet key={"bullet" + index} loading={loading} quantity={item.quantity} name={item.name} />
                        )
                    })
                    }
                    {loading && [1, 2, 3].map((item, index) => {
                        return (
                            <Bullet key={"bullet" + index} loading={loading} quantity={item.quantity} name={item.name} />
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
                        title={loading ? '$00.00' : `$${item.price}`}
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

function CartCard(props) {
    const {item, loading} = props;
    const swipableRef = React.useRef(null);

    const [cart, setCart] = React.useState(1);
    const [comboItems, setComboItems] = React.useState("");

    React.useEffect(() => {
        if (!loading) {
            let items = "";
            item.comboItems.map((e, index) => {
                items += e.name + (index < item.comboItems.length - 1 ? ", " : "");
            })
            setComboItems(items);
        }

    }, [item.comboItems])

    const rightSwipeAction = () => {
        return (
            <Pressable onPress={() => {
                swipableRef.current.close();
                console.log("Removed")
            }}
                style={{backgroundColor: colors.danger, paddingHorizontal: 16, justifyContent: 'center', alignItems: "center"}}>
                <Icon name="trash" size={24} color={colors.white} />
            </ Pressable>
        )
    }

    return (
        /*  TODO: The swiping is not working properly on android, neither the close() */
        <Swipeable ref={swipableRef} renderRightActions={rightSwipeAction}>
            <View style={style.containerCart}>
                <View style={{padding: 8, justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable onPress={() => console.log("Open Combo")}>
                        <ImageBackground
                            source={require("../assets/fast-food.png")}
                            imageStyle={{resizeMode: "contain", width: "100%", height: "100%", }}
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 10,
                                justifyContent: !item.image ? "center" : null,
                                alignItems: !item.image ? "center" : null,
                                overflow: "hidden",
                            }}>
                            <Pressable style={{position: 'absolute', top: 4, right: 4, zIndex: 10, }}>
                                <Icon name="eye" color={colors.white} size={24} />
                            </Pressable>
                            {!loading &&
                                <Image source={{uri: item.image}} style={{
                                    flex: 1,
                                    height: 100,
                                    resizeMode: "contain",
                                    borderRadius: 10,

                                }} />}
                        </ImageBackground>
                    </Pressable>
                </View>
                <View style={{flex: 1, padding: 8, paddingVertical: 8, paddingRight: 8}}>
                    {!loading && <Typography variant="medium" nowrap color={colors.grayPrimary}>{item.comboTitle}</Typography>}
                    {loading && <LoadingLine width={70} height={23} />}
                    <Spacer />
                    {!loading && <Typography nowrap variant="small" color="gray3">{comboItems}</Typography>}
                    {loading && <LoadingLine width={90} />}
                    <Spacer />
                    {!loading && <Typography variant="medium">${item.price}</Typography>}
                    {loading && <LoadingLine width={30} height={23} />}
                    <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
                        <View style={{flex: 1 / 2}}>
                            <AddToCartButton
                                fullWidth
                                noBorder
                                variant={cart > 0 ? "outlined" : "outlined-danger"}
                                title={loading ? "0" : cart > 0 ? cart : "Remove"}
                                textVariant="medium"
                                shape="round"
                                small
                                iconSize={23}
                                iconRight={cart > 0 ? "plus" : null}
                                iconLeft={cart > 0 ? "trash" : null}
                                onPressText={cart === 0 ? () => console.log("Removed") : null}
                                onPressLeft={
                                    cart === 1 ? () => swipableRef.current.openRight()
                                        : cart > 0 && cart !== 1 ? () => setCart(cart - 1) : null}
                                onPressRight={cart > 0 ? () => setCart(cart + 1) : null}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Swipeable>

    )
}

function Card(props) {
    const {option, cart} = props;
    return (
        <>
            {option && <OptionCard {...props} />}
            {cart && <CartCard {...props} />}
        </>
    )
}

export default React.memo(Card)

const style = StyleSheet.create({
    containerOption: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden"
    },
    containerCart: {
        flex: 1,
        backgroundColor: colors.grayBg,
        borderBottomColor: colors.gray2,
        borderBottomWidth: 1,
        flexDirection: "row",
        overflow: "hidden"
    },
    leftSection: {
        flex: 1 / 3,
        padding: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    rightSection: {
        flex: 2 / 3,
        paddingVertical: 8,
        paddingRight: 8,
    },
    rowCenter8: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 8
    }
})
