import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#ccc", foreground: "yes" }}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>{duration} Minutes</Text>
          <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    overflow: "hidden",
    padding: 10,
    elevation: 6,
    shadowColor: "grey",
    shadowOpacity: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.os === "android" ? "hidden" : "visible",
    borderRadius: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    margin: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 4,
    justifyContent: "center",
  },
  detailText: {
    fontSize: 12,
  },
});
