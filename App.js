import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import DrawerNavigator from "./navigators/DrawerNavigator";
import FavoriteContextProvider from "./store/context/favorites-context";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <stack.Navigator
            initialRouteName="Home"
            screenOptions={mealsCategoriesOptions}
          >
            <stack.Screen
              name="Home"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={({ route, navigation }) => {
                const { catId } = route.params;
              }}
            />
            <stack.Screen
              name="MealScreen"
              component={MealScreen}
              options={{
                headerRight: () => {
                  return <Text>In the header</Text>;
                },
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mealsCategoriesOptions = {
  headerTitleAlign: "center",
};
