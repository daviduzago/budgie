import React from "react";
import {FlatList} from "react-native";
import {Pagination} from "react-native-snap-carousel";
import Spacer from "../utils/Spacer"
import Card from "../components/Cards";
import colors from "../utils/colors";

const ITEM_WIDTH = 300;
const ITEM_SPACING = 8;

// THIS NEEDS SOME LOVE, THE CARD IS NOT BEING CENTERED AS IT SHOULD
export default function Swiper(props) {
    const {data, loading} = props;
    const [activeSlide, setActiveSlide] = React.useState(0);
    return (
        <>
            <FlatList
                data={data}
                ItemSeparatorComponent={() => <Spacer x={2} />}
                renderItem={({item, index}) =>
                    <Card
                        key={item.title + index}
                        promo
                        loading={loading}
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        buttonText={item.buttonText}
                        fullImage={item.fullImage}
                    />
                }
                horizontal
                snapToInterval={ITEM_WIDTH + ITEM_SPACING}
                snapToAlignment="center"
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd={(event) => {
                    setActiveSlide(Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width));
                }}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={{paddingTop: 8}}
                dotStyle={{backgroundColor: colors.grayPrimary}}
                inactiveDotStyle={{backgroundColor: colors.gray3}}
            />
        </>
    );
}
