import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/data";
import { useEffect } from "react";
import colors from "../constants/colors";
import IconBox from "../components/ui/IconBox";

export default function MealScreen({ route, navigation }) {
  useEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({ title: mealTitle });
  }, [mealId, navigation]);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  const {
    title,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = selectedMeal;

  //this could easily be a seperate component.
  const vegetarianIcon = (
    <IconBox
      color={"white"}
      bgColor={"green"}
      size={15}
      iconName={"leaf"}
      text={"Vegetarian"}
    />
  );

  const veganIcon = (
    <IconBox
      color={"white"}
      bgColor={"orange"}
      size={15}
      iconName={"tree"}
      text={"Vegan"}
    />
  );

  const glutenFreeIcon = (
    <IconBox
      color={"black"}
      bgColor={"yellow"}
      iconName={"exclamation-circle"}
      size={15}
      text={"GF"}
    />
  );

  const lactoseFreeIcon = (
    <IconBox
      color={"white"}
      bgColor={"blue"}
      iconName={"exclamation-circle"}
      size={15}
      text={"LF"}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.allergenContainer}>
          {isVegetarian ? vegetarianIcon : null}
          {isVegan ? veganIcon : null}
          {isGlutenFree ? glutenFreeIcon : null}
          {isLactoseFree ? lactoseFreeIcon : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "90%",
    height: 300,
    borderRadius: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: colors.textPrimary,
  },
  allergenContainer: {
    flexDirection: "row",
    margin: 8,
    justifyContent: "space-around",
  },
});
