import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryBox from "../components/ui/CategoryBox";

/* Navigation prop is supplied by react-navigation to the screen components as listed in the stack.  */
export default function CategoriesScreen({ navigation }) {
  const { height } = useWindowDimensions();

  /* The navigation.navigate() Takes a string as an argument of the relevant page as listed in the navigation stack, or the stack.screen */
  /* To pass params, the second argument in navigate, is an object of params */
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }

    /* JSX */
    return (
      <CategoryBox
        id={item.id}
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  let flatListOrientation = {};

  if (height < 380) {
    flatListOrientation = {
      marginHorizontal: "10%",
    };
  } else if (height > 380) {
    flatListOrientation = {
      marginHorizontal: "5%",
    };
  }

  return (
    <View style={[styles.screenContainer, flatListOrientation]}>
      {/* Flatlist gets passed the Item prop by default. */}
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCategoryItem(item)}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flatList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
});
