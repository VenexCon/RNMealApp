import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/data";
import { useState, useLayoutEffect, useContext } from "react";
import colors from "../constants/colors";
import IconBox from "../components/ui/IconBox";
import IconButton from "../components/ui/IconButton";
import AllergenModal from "../components/ui/AllergenModal";
import { FavoriteContext } from "../store/context/favorites-context";

export default function MealScreen({ route, navigation }) {
  /* State */
  const [modalVisible, setModalVisible] = useState(false);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  const favoriteMealCtx = useContext(FavoriteContext);

  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

  function changeStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealCtx.deleteFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeStatusHandler}
            size={30}
            color={mealIsFavorite ? "gold" : "black"}
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, mealIsFavorite]);

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
          <Text style={styles.duration}>
            Time to Cook: <Text style={styles.durationlength}>{duration}m</Text>
          </Text>
        </View>
        <View style={styles.allergenContainer}>
          {isVegetarian ? vegetarianIcon : null}
          {isVegan ? veganIcon : null}
          {isGlutenFree ? glutenFreeIcon : null}
          {isLactoseFree ? lactoseFreeIcon : null}
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subHeading}>Ingredients:</Text>
          {ingredients.map((ingredient, index) => {
            return (
              <Text style={styles.subPoint} key={index}>
                {ingredient}
              </Text>
            );
          })}
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subHeading}>Steps:</Text>
          {steps.map((step, index) => {
            return (
              <View key={index} style={styles.stepView}>
                <Text style={styles.bulletPoint}>{index + 1}</Text>
                <Text style={styles.subPoint} key={index}>
                  {step}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  duration: {
    fontWeight: "bold",
  },
  durationlength: {
    color: colors.primary,
  },
  allergenContainer: {
    flexDirection: "row",
    margin: 8,
    justifyContent: "space-around",
  },
  subSection: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    gap: 2,
    width: "90%",
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 16,
    borderBottomWidth: 2,
  },
  subPoint: {
    marginLeft: 10,
  },
  bulletPoint: {
    fontWeight: "bold",
    fontSize: 16,
  },
  stepView: {
    flexDirection: "row",
    gap: 4,
    marginLeft: 10,
    marginVertical: 10,
    padding: 10,
  },
  favorite: {
    fontWeight: "bold",
    color: "#101be6",
    padding: 10,
    borderRadius: 20,
  },
});
