import { View, StyleSheet } from "react-native";
import HomePage from "./home";

export default function Index() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
