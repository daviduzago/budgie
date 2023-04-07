import {View, Text, Button} from "react-native";
import Wrapper from "../components/ui/wrapper";

function Home({navigation}) {
    return (
        <Wrapper hasTopNav={false}>
            <Text style={{color: "black", fontFamily: "Lato Bold", fontSize: 24}}>Budgie</Text>
            <Button title="Typography" onPress={() => navigation.navigate("Typography")} />
        </Wrapper>
    );
}

export default Home;
