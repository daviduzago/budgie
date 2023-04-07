import {View} from "react-native";
import Typography from "../../components/Typography";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"

function TypographyScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, padding: 20}}>
                <Typography variant={"display"}>Display</Typography>
                <Spacer />
                <Typography variant={"heading1"}>heading1</Typography>
                <Spacer />
                <Typography variant={"heading2"}>heading2</Typography>
                <Spacer />
                <Typography variant={"body"}>body</Typography>
                <Spacer />
                <Typography variant={"body"}>body</Typography>
                <Spacer />
                <Typography variant={"extraSmall"}>extraSmall</Typography>
            </View>
        </Wrapper>
    );
}

export default TypographyScreen;
