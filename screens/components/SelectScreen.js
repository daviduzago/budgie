import React from "react";
import {View} from "react-native";
import Wrapper from "../../components/ui/wrapper";
import Spacer from "../../utils/Spacer"
import Select from "../../components/Select";
import Typography from "../../components/Typography";

function SelectScreen() {
    const [variants, setVariants] = React.useState(["light", "dark", "none"]);
    const [selectedVariant, setSelectedVariant] = React.useState();
    return (
        <Wrapper hasTopNav>
            <View style={{flex: 1, width: "100%", padding: 20}}>
                <View>
                    <Typography>{selectedVariant || "none"}</Typography>
                    <Typography>Select with options</Typography>
                    <Select
                        title="Variants"
                        selected={selectedVariant}
                        variant={selectedVariant}
                        options={variants}
                        onChange={(value) => setSelectedVariant(value)}
                    />
                    <Spacer />
                    <Typography>Multi Select with no limit</Typography>
                    <Select
                        variant={selectedVariant}
                        selected="option1,option2"
                        options={['option1', 'option2', 'option3']}
                        multi
                        saveTitle="Save me"
                        onChange={() => { }}
                    />
                    <Spacer />
                    <Typography>Multi Select with limit and no limit label</Typography>
                    <Select
                        variant={selectedVariant}
                        selected="option1,option2"
                        options={['option1', 'option2', 'option3']}
                        multi limit={2}
                        saveTitle="Save me"
                        onChange={() => { }}
                    />
                    <Spacer />
                    <Typography>Multi Select with limit and limit label</Typography>
                    <Select
                        variant={selectedVariant}
                        selected="option1,option2"
                        options={['option1', 'option2', 'option3']}
                        multi
                        limit={2}
                        limitLabel={'options'}
                        saveTitle="Save me"
                        onChange={() => { }}
                    />
                    <Spacer />
                    <Typography>Select with labels for sections</Typography>
                    <Select
                        variant={selectedVariant}
                        selected="option1"
                        options={[
                            {title: 'section', type: 'label'},
                            'option1',
                            'option2',
                            {title: 'section 2', type: 'label'},
                            'option 3',
                        ]}
                        onChange={() => { }}
                    />
                </View>
            </View>
        </Wrapper>
    );
}

export default SelectScreen;