import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryBox from "../components/ui/CategoryBox";

export default function CategoriesScreen() {
  const { width, height } = useWindowDimensions();

  let flatListOrientation = {};

  if (height < 380) {
    flatListOrientation = {
      marginVertical: 10,
      marginHorizontal: "10%",
    };
  } else if (height > 380) {
    flatListOrientation = {
      marginVertical: "15%",
      marginHorizontal: "5%",
    };
  }

  return (
    <View style={[styles.screenContainer, flatListOrientation]}>
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryBox title={item.title} color={item.color} />
        )}
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
