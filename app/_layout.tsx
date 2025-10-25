import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d0d0ff',
  }
});