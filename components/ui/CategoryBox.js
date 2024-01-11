import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function CategoryBox({ title, color }) {
  return (
    <View
      style={[
        styles.screenContainer,
        { backgroundColor: color, borderColor: color },
      ]}
    >
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: 150,
    width: 150,
    borderWidth: 2,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
