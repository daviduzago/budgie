import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Expand from './Expand';
import Icon from './Icon/Index';
import colors from '../utils/colors';
import Typography from './Typography';
import Button from './Button';
import Spacer from '../utils/Spacer';
import RadioSelect from './RadioSelect';

function ComboOptions(props) {
    const {label, items} = props;
    const [selection, setSelection] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    return (
        <View style={styles.container}>
            <Pressable onPress={() => setOpen(!open)}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 12,
                    paddingHorizontal: 20,
                    borderBottomColor: colors.gray2,
                    borderBottomWidth: 1,
                }}>
                    <Typography variant='medium'>{label}</Typography>
                    <View style={{flex: 1}}></View>
                    <Button small title={!selection ? "Required" : "Done"} textVariant="extraSmall" variant={!selection ? "outlined-danger" : "primary"} />
                    <Spacer />
                    <View style={{width: 24, height: 24, justifyContent: 'center', alignItems: "center", backgroundColor: colors.gray2, borderRadius: 50}}>
                        <Icon name={open ? 'chevron-up' : 'chevron-down'} strokeWidth={2} size={20} color="black" />
                    </View>
                </View>
            </Pressable>
            <Expand open={open}>
                {items.map((item, index) => {
                    return <Pressable key={item.id} onPress={() => {setSelection(item.id)}}>
                        <RadioSelect item={item} checked={selection === item.id} />
                    </Pressable>
                })}
            </Expand>
        </View >
    );
}

export default React.memo(ComboOptions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});