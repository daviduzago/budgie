import {FlatList, View} from "react-native";
import React from "react";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Typography from "../../components/Typography";
import Card from "../../components/Cards";
import ITEMS from "../../assets/ITEMS"
import Button from "../../components/Button";
import {Pagination} from "react-native-snap-carousel";
import colors from "../../utils/colors";
import Swiper from "../../components/Swiper";

const data = [
    {
        title: "20% Discount",
        subtitle: "Refer and earn 20% discount on your next purchase",
        buttonText: "Refer a friend",
        image: "https://picsum.photos/100",
        fullImage: "https://picsum.photos/300/120",
    },
    {
        title: "20% Discount",
        subtitle: "Refer and earn 20% discount on your next purchase",
        buttonText: "Refer a friend",
        image: "https://picsum.photos/100",
        fullImage: "https://picsum.photos/300/120",
    },
    {
        title: "20% Discount",
        subtitle: "Refer and earn 20% discount on your next purchase",
        buttonText: "Refer a friend",
        image: "https://picsum.photos/100",
        fullImage: "https://picsum.photos/300/120",
    },
];

const ITEM_WIDTH = 300;
const ITEM_SPACING = 8;

export default function CardsScreen() {
    const [loading, setLoading] = React.useState(false);
    const [activeSlide, setActiveSlide] = React.useState(0);
    return (
        <Wrapper hasTopNav>
            <View style={{width: "100%", padding: 10}}>
                <Typography variant="heading1">Cards</Typography>
                <Spacer x={2} />
                <Button fullWidth title="Toggle loading" onPress={() => setLoading(!loading)} />
                <Spacer x={2} />
                <Card
                    option
                    loading={loading}
                    item={ITEMS[0]}
                />
                <Spacer />
                <Card
                    cart
                    loading={loading}
                    item={ITEMS[3]}
                />
                <Spacer />
                <Card
                    promo
                    loading={loading}
                    image={"https://picsum.photos/100"}
                    title={"20% Discount"}
                    subtitle="Refer and earn 20% discount on your next purchase"
                    buttonText={"Refer a friend"}
                />
                <Spacer />
                <View style={{flex: 1, alignItems: "center"}}></View>
                <Swiper data={data} loading={loading} />
            </View>
        </Wrapper>
    );
}
