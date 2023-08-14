import React from 'react';
import Wrapper from "../components/ui/wrapper"
import {Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Input from '../components/Input';
import Spacer from '../utils/Spacer';
import colors from '../utils/colors';
import Button from '../components/Button';
import Typography from '../components/Typography';

const style = {
    poweredContainer: {
        backgroundColor: colors.grayBg,
    },
    textInputContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    textInput: {
        color: "#000",
        fontSize: 17,
        fontFamily: "Lato Regular",
    },
    predefinedPlacesDescription: {
        color: '#1faadb',
    },
    row: {
        backgroundColor: colors.grayBg,
        padding: 13,
        height: 44,
        flexDirection: 'row',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#c8c7cc',
    },
    description: {
        fontFamily: "Lato Regular",
        fontSize: 17,
        color: colors.gray4
    },
    powered: {
        fontFamily: "Lato Regular",
        fontSize: 17,
    }
}

const morada = {
    "location": {
        "lat": 2.9618696,
        "lng": -75.2870794
    },
    "viewport": {
        "northeast": {
            "lat": 2.963242280291502,
            "lng": -75.2858210197085
        },
        "southwest": {
            "lat": 2.960544319708498,
            "lng": -75.28851898029151
        }
    }
}


function SearchAddress() {
    //TODO: If user has saved locations, show them as predefined places
    return (
        <View style={{flex: 1, padding: 10, backgroundColor: colors.grayBg}}>
            <GooglePlacesAutocomplete
                onPress={(data, details = null) => {
                    /* we need to send address_components, formatted_address,geometry */
                    console.log(JSON.stringify(details.geometry, null, 4));
                }}
                query={{
                    /* TODO: API key must be fetched from server */
                    key: 'AIzaSyCVz-LK6wIBWWLmfhzFV09bULzuTdOLavw',
                    language: 'es-419',
                    components: 'country:co',
                }}
                placeholder='Enter address e.g.: 123 Main St'
                minLength={2}
                autoFocus={false}
                returnKeyType={'default'}
                fetchDetails={true}
                textInputProps={{
                    autoFocus: true,
                }}
                listEmptyComponent={() => (
                    <View style={{flex: 1, alignItems: "center", paddingTop: 20}}>
                        <Typography variant="medium">No results were found</Typography>
                    </View>
                )}
                onFail={(error) => console.error(error)}
                styles={style}
            />
        </View>
    );
}

export default SearchAddress;