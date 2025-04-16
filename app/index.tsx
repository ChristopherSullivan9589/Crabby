import { Text, View, StyleSheet } from "react-native";
import SearchPage from "./SearchPage";
export default function Index() {
  return (
    <View style={styles.container}>
      <SearchPage />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
