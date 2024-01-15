import { View, Text } from "react-native";

export default function MealScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text>{catId}</Text>
    </View>
  );
}
