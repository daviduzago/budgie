import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Expand from './Expand';
import colors from '../utils/colors';
import Typography from './Typography';
import RadioButton from './RadioButton';

function RadioSelect(props) {
    const {checked, item} = props;
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderBottomColor: colors.gray2,
            borderBottomWidth: 1,
        }}>
            <Typography color="gray4">{item.name}</Typography>
            <RadioButton checked={checked} />
        </View>
    );
}

export default React.memo(RadioSelect);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});