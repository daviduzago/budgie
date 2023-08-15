import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import colors from '../utils/colors';
import InputAbs from "../components/InputAbs";
import React from 'react';
import Spacer from "../utils/Spacer"
import Typography from '../components/Typography';

const tags = ["Home", "Office", "Other"]

function AddressDetailsConfirmation({navigation, route}) {
    const insets = useSafeAreaInsets();
    const [addressHasDetails, setaddressHasDetails] = React.useState(false)
    const [selectedTag, setSelectedTag] = React.useState(null)

    return (
        <View style={[styles.container, {paddingBottom: insets.bottom + 20}]}>
            <Pressable onPress={() => Keyboard.dismiss()} style={{flex: 1}}>
            <InputAbs label="City, Country" disabled value="Neiva, Colombia" placeholder="City, Country" />
            <InputAbs label="Address or location *" value="123 Main St" placeholder="Address or location *" />
            <InputAbs disabled={addressHasDetails} label="Details: apt / flat / house" placeholder="e.g.: Royal Building apt 201" />
            <Pressable onPress={() => setaddressHasDetails((prev) => !prev)} style={{flexDirection: "row", alignItems: "center"}}>
                <Checkbox checked={addressHasDetails} />
                <Spacer />
                <Typography color="gray3" variant="body" normal>The address has no details</Typography>
            </Pressable>
            <Spacer x={2} />
            <Typography color="gray3" variant="medium">Tags:</Typography>
            <Spacer x={2} />
            <View style={{flexDirection: "row", alignItems: "center", columnGap: 10}}>
                {tags.map((tag, index) => (
                    <Button
                        key={index}
                        small
                        onPress={() => {
                            if (selectedTag === tag) setSelectedTag(null)
                            else setSelectedTag(tag)
                        }}
                        title={tag} variant={selectedTag === tag ? "primary" : "outlined"} textVariant="body" />
                ))}
            </View>
            <Spacer x={2} />
            {selectedTag === "Other" && <InputAbs label="Details: apt / flat / house" placeholder="e.g.: Friend's house, high school, College" />}
        </Pressable>
            <Button fullWidth title="Save" />
        </View>
    )
}

export default AddressDetailsConfirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.grayBg
    }
})