import {View, StyleSheet, ScrollView} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import colors from "../../utils/colors"


const Wrapper = (props) => {
    const insets = useSafeAreaInsets();
    const {children, hasTopNav, dark, centered, scrollEnabled} = props;
    return (
        <View
            style={styles.container}
        >
            <ScrollView
                style={{flex: 1}}
                bounces={false}
                scrollEnabled={scrollEnabled}
                contentContainerStyle={[styles.scrollView, {
                    paddingTop: hasTopNav ? 0 : insets.top,
                    backgroundColor: dark ? colors.grayPrimary : colors.grayBg,
                    alignItems: centered ? "center" : "flex-start",
                    justifyContent: centered ? "center" : "flex-start"
                }]}
                showsVerticalScrollIndicator={false}
            >{children}</ScrollView>
        </View>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.grayBg
    },
    scrollView: {
        flexGrow: 1,
    }
});
