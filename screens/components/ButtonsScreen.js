import {View} from "react-native";
import Button from "../../components/Button";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import {HiPlus} from "react-icons/hi";
import colors from "../../utils/colors";


function ButtonsScreen() {
    return (
        <Wrapper hasTopNav>
            <View style={{width: "100%", padding: 20}}>
                <Button fullWidth title={"Button"} />
                <Spacer />
                <Button iconRight={<HiPlus />} iconLeft={<HiPlus />} title={"Button"} />
            </View>
        </Wrapper>
    );
}

export default ButtonsScreen;
