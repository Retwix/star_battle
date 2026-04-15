import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PUZZLE_TYPES = [
  { id: "5x5", label: "5×5" },
  { id: "6x6", label: "6×6" },
  { id: "8x8", label: "8×8" },
  { id: "10x10", label: "10×10" },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Battle</Text>
      <Text style={styles.subtitle}>Choose a puzzle size</Text>
      {PUZZLE_TYPES.map((type) => (
        <TouchableOpacity
          key={type.id}
          style={styles.button}
          onPress={() => router.push(`/game/${type.id}`)}
        >
          <Text style={styles.buttonText}>{type.label}</Text>
        </TouchableOpacity>
      ))}
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
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    opacity: 0.6,
  },
  button: {
    width: 200,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#2f95dc",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
