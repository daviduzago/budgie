import {View} from "react-native";
import React from "react";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Typography from "../../components/Typography";
import Card from "../../components/Cards";
import ITEMS from "../../assets/ITEMS"
import Button from "../../components/Button";


function CardsScreen() {
    const [loading, setLoading] = React.useState(false);
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
            </View>
        </Wrapper>
    );
}

export default React.memo(CardsScreen);