import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, color, onPress, size }) {
  return (
    <Pressable
      onPress={onPress}
      style={(pressed) => {
        pressed ? styles.pressed : null;
      }}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});
