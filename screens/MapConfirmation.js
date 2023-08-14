import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../utils/colors';
import MapView, {Marker} from "react-native-maps";

const morada = {
    "address_components": [
        {
            "long_name": "Carrera 7",
            "short_name": "Cra. 7",
            "types": [
                "route"
            ]
        },
        {
            "long_name": "Neiva",
            "short_name": "Neiva",
            "types": [
                "locality",
                "political"
            ]
        },
        {
            "long_name": "Neiva",
            "short_name": "Neiva",
            "types": [
                "administrative_area_level_2",
                "political"
            ]
        },
        {
            "long_name": "Huila",
            "short_name": "Huila",
            "types": [
                "administrative_area_level_1",
                "political"
            ]
        },
        {
            "long_name": "Colombia",
            "short_name": "CO",
            "types": [
                "country",
                "political"
            ]
        },
        {
            "long_name": "410002",
            "short_name": "410002",
            "types": [
                "postal_code"
            ]
        }
    ],
    "formatted_address": "Cra. 7, Neiva, Huila, Colombia",
    "geometry": {
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
    },
}

function MapConfirmation({route, navigation}) {
    const [region, setRegion] = React.useState({
        latitude: 2.9618696,
        longitude: -75.2870794,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const onRegionChange = (region) => {
        setRegion({region});
    };

    return (
        <View style={styles.container}>
            <MapView
                provider='google'
                style={{flex: 1}}
                initialRegion={region}
                onRegionChange={onRegionChange}
            />
            <Marker
                coordinate={{latitude: region?.latitude, longitude: region?.longitude}}
            />
        </View>
    );
}

export default MapConfirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayBg,
    },
});