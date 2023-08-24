import React from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Typography from './Typography';
import Icon from './Icon/Index';
import colors from '../utils/colors';
import Spacer from '../utils/Spacer';
import AddToCartButton from './AddToCartButton';
import LoadingLine from './LoadingLine';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function CartCard(props, ref) {
    const {item, loading} = props;
    const swipableRef = React.useRef(null);

    const [comboItems, setComboItems] = React.useState("");

    React.useImperativeHandle(ref, () => ({
        closeSwipeable: () => {
            swipableRef.current.close();
        },
        openSwipeable: () => {
            swipableRef.current.openRight();
        }
    }));

    const rightSwipeAction = () => {
        return (
            <Pressable onPress={() => {
                props.removeButtonOnPress(item);
                swipableRef.current.close();
            }}
                style={{backgroundColor: colors.danger, paddingHorizontal: 16, justifyContent: 'center', alignItems: "center"}}>
                <Icon name="trash" size={24} color={colors.white} />
            </ Pressable>
        )
    }

    // Concat combo items in a single line, separated by comma
    React.useEffect(() => {
        if (!loading) {
            let items = "";
            item?.comboItems?.map((e, index) => {
                items += e.name + (index < item.comboItems.length - 1 ? ", " : "");
            })
            setComboItems(items);
        }

    }, [item.comboItems])

    return (
        <GestureHandlerRootView>
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
                        {!loading && <Typography variant="medium" nowrap color={colors.grayPrimary}>{item?.comboTitle}</Typography>}
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
                                    disabled={loading}
                                    variant="outlined"
                                    title={loading ? "0" : item.quantity}
                                    textVariant="medium"
                                    small
                                    iconSize={23}
                                    iconRight="plus"
                                    iconLeft="trash"
                                    onPressLeft={props.actionButtonOnPressLeft}
                                    onPressRight={props.actionButtonOnPressRight}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

export default React.memo(React.forwardRef(CartCard));

const style = StyleSheet.create({

    containerCart: {
        flex: 1,
        backgroundColor: colors.grayBg,
        flexDirection: "row",
        overflow: "hidden"
    },
})
