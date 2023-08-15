import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import Button from "../components/Button"
import colors from '../utils/colors';
import Icon from "../components/Icon/Index"
import MapView from "react-native-maps";
import React from 'react';
import Spacer from "../utils/Spacer"
import Typography from '../components/Typography';

const data = {
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

// Array order would be like this:
// 0: Carrera o Calle
// 1: Ciudad
// 2: Municipio
// 3: Departamento
// 4: País
// 5: Código postal

function MapConfirmation({route, navigation}) {
    const insets = useSafeAreaInsets();
    const [region, setRegion] = React.useState({
        latitude: data.geometry.location.lat,
        longitude: data.geometry.location.lng,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080
    });

    const onRegionChange = (region) => {
        setRegion({region});
    };

    return (
        <View style={styles.container}>
            <MapView
                provider='google'
                style={{...StyleSheet.absoluteFillObject}}
                initialRegion={region}
                onRegionChange={onRegionChange}
                loadingEnabled={true}
                loadingIndicatorColor={colors.primary}
                loadingBackgroundColor={colors.grayBg}
                moveOnMarkerPress={false}
                showsUserLocation={false}
                showsCompass={false}
                showsPointsOfInterest={false}
            >
            </MapView>
            <View style={{position: "absolute", zIndex: 10, paddingBottom: 80}}>
                <Icon name="pin" size={70} />
            </View>
            <View style={[styles.confirmationBox, {paddingBottom: insets.bottom + 20, }]}>
                <View style={{paddingLeft: 4}}>
                    <Typography variant="medium" color="black">{data.address_components[2].short_name}</Typography>
                    <Spacer />
                    <Typography light color="black">{data.address_components[2].short_name}, {data.address_components[3].short_name}, {data.address_components[4].long_name}</Typography>
                    <Spacer />
                </View>
                <Button onPress={() => console.log(JSON.stringify(region, 4, null))} fullWidth title="Confirm" />
            </View>
        </View>
    );
}

export default MapConfirmation;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.grayBg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmationBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: colors.white,
        justifyContent: 'center',
    }
});