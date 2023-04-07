import { StyleSheet, View, Text } from "react-native";

function Other() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Other</Text>
    </View>
  );
}

export default Other;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
  },
});
