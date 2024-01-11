import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryBox from "../components/ui/CategoryBox";

export default function CategoriesScreen() {
  return (
    <View style={styles.screenContainer}>
      <FlatList
        numColumns={2}
        style={styles.flatList}
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
    marginTop: 100,
  },
  flatList: {
    flex: 1,
    borderWidth: 4,
    flexGrow: 1,
  },
});
