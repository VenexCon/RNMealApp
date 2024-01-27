import { useContext, useState } from "react";
import { FavoriteContext } from "../store/context/favorites-context";
import MealsList from "../components/ui/MealsList.js/MealsList";
import { MEALS } from "../data/data";

export default function FavouritesScreen() {
  const favoriteMealCtx = useContext(FavoriteContext);
  //Loops through twice ish. Once for each meal, then again for the .includes() method.
  const listOfFavs = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  return <MealsList displayedMeals={listOfFavs} />;
}
