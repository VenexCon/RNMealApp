import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconBox({ iconName, color, bgColor, size, text }) {
  const myIcon = <Icon name={iconName} size={size} color={color} />;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text>{myIcon}</Text>
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 6,
    borderRadius: 10,
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontWeight: "bold",
  },
});
