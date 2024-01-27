import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealScreen", {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc", foreground: "yes" }}
        style={({ pressed }) => {
          pressed ? styles.buttonPressed : null;
        }}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>{duration} Minutes</Text>
            <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
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
  buttonPressed: {
    opacity: 0.5,
  },
});
