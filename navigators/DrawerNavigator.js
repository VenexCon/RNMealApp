import FavouritesScreen from "../screens/FavouritesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      <Drawer.Screen name="Favourites" component={FavouritesScreen} />
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}

const drawerScreenOptions = {
  headerTitleAlign: "center",
};
