import {View} from "react-native";
import React from "react";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Typography from "../../components/Typography";
import OptionCard from "../../components/Cards";

function CardsScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{width: "100%", padding: 10}}>
                <Typography variant="heading1">Cards</Typography>
                <Spacer x={2} />
                <OptionCard
                    deliveryTime={15}
                    image={"https://picsum.photos/200"}
                    comboTitle={"The capital burger combo"}
                    comboItems={[
                        {name: "Burger", quantity: 1},
                        {name: "Fries", quantity: 1},
                        {name: "Coke", quantity: 1},
                    ]}
                    price={"10.00"}
                />
                <Spacer x={2} />
                <OptionCard
                    deliveryTime={15}
                    image={"https://picsum.photos/200"}
                    comboTitle={"The capital burger combo"}
                    comboItems={[
                        {name: "Burger", quantity: 1},
                        {name: "Fries", quantity: 1},
                        {name: "Coke", quantity: 1},
                    ]}
                    price={"10.00"}
                />
            </View>
        </Wrapper>
    );
}

export default CardsScreen;