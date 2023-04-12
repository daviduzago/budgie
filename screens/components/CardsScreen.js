import {View} from "react-native";
import React from "react";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Typography from "../../components/Typography";
import OptionCard from "../../components/Cards";
import ITEMS from "../../assets/ITEMS"


function CardsScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{width: "100%", padding: 10}}>
                <Typography variant="heading1">Cards</Typography>
                <Spacer x={2} />
                <OptionCard
                    item={ITEMS[0]}
                />
                <Spacer x={2} />
            </View>
        </Wrapper>
    );
}

export default React.memo(CardsScreen);