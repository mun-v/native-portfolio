import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="#FB751B" />
      <Text style={styles.loadingText}>. . .</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#FB751B",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Loading;
