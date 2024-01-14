import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

export default function CategoryBox({ title, color, onPress }) {
  return (
    <View
      style={[
        styles.screenContainer,
        { backgroundColor: color, borderColor: color },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc", foreground: "yes" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: 150,
    width: 150,
    color: "black",
    margin: 10,
    padding: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 5,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.os === "android" ? "hidden" : "visible",
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
