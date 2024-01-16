import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={mealsCategoriesOptions}
        >
          <stack.Screen name="MealsCategories" component={CategoriesScreen} />
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
