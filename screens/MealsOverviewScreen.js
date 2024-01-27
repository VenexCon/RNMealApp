import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/data";
import MealsList from "../components/ui/MealsList.js/MealsList";
import { useEffect } from "react";
import Meal from "../models/meal";

//Any component registered as a screen gets passed route and navigation by default.
export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  //Set options in a useEffect, due to animations
  //This achieves the same as setting screen options in the screen.stack element.
  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
