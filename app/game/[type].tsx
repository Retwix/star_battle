import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function GameScreen() {
  const { type } = useLocalSearchParams<{ type: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puzzle {type}</Text>
      <Text style={styles.placeholder}>Game board goes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  placeholder: {
    fontSize: 16,
    opacity: 0.5,
  },
});
