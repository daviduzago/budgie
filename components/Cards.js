import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Typography from './Typography';
import Button from './Button';
import Icon from './Icon/Index';
import colors from '../utils/colors';
import Spacer from '../utils/Spacer';

export default function OptionCard(props) {
    const {image, loading, deliveryTime = 10, comboTitle, comboItems, price = "0.0", rating = 5} = props;

    return (
        <View style={style.container}>
            <View style={style.leftSection}>
                <Image source={{uri: image}} style={{flex: 1, height: 100, resizeMode: "cover", borderRadius: 10}} />
                <Spacer />
                <View style={{flexDirection: 'row', alignItems: "center", paddingHorizontal: 8}}>
                    <Icon strokeWidth={2} name="clock" size={20} color={colors.gray3} />
                    <Spacer x={0.5} />
                    <Typography variant="body" color={colors.gray3}>{deliveryTime} min</Typography>
                </View>
                <Spacer x={0.5} />
                <View style={{flexDirection: 'row', alignItems: "center", paddingHorizontal: 8}}>
                    {
                        [1, 2, 3, 4, 5].map((index) => {
                            return <Icon
                                key={index}
                                name={index + 1 < rating ? "star-solid" : "star-outlined"}
                                color={colors.yellow}
                                size={20}
                            />
                        })
                    }
                </View>
            </View>
            <View style={style.rightSection}>
                <Typography bold style={{fontSize: 20}} nowrap color={colors.grayPrimary}>{comboTitle}</Typography>
                <Spacer x={0.5} />
                <View style={{paddingLeft: 8}}>
                    {
                        comboItems.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <View style={{flexDirection: "row"}}>
                                        <Typography variant="body" color={colors.gray3} nowrap>x{item.quantity}</Typography>
                                        <Spacer x={0.5} />
                                        <Typography variant="body" color={colors.gray3} nowrap>{item.name}</Typography>
                                    </View>
                                    <Spacer x={0.5} />
                                </React.Fragment>
                            )
                        })
                    }
                </View>
                <Spacer x={0.5} />
                <Button
                    borderColor={colors.gray3}
                    color={colors.gray3}
                    variant="outlined"
                    title="View more information"
                    small
                    fullWidth
                    textVariant="extraSmall" />
                <Spacer />
                <View style={{flexDirection: "row"}}>
                    <Button
                        variant="outlined"
                        textVariant="medium"
                        title={`$${price}`}
                        shape="round"
                        small
                    />
                    <Spacer />
                    <Button
                        variant="primary"
                        title="Add to cart"
                        textVariant="medium"
                        shape="round"
                        small
                    />
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
    },
    rightSection: {
        flex: 2 / 3,
        paddingVertical: 8,
    },
})
