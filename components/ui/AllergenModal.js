import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import IconBox from "./IconBox";

export default function AllergenModal({ modalVisible, allergenModalHandler }) {
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
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          allergenModalHandler();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Allergen Information</Text>
            <View style={styles.allergenContainer}>
              <Text style={styles.allergenText}>Vegetarian:</Text>
              {vegetarianIcon}
            </View>
            <View style={styles.allergenContainer}>
              <Text style={styles.allergenText}>Vegan:</Text>
              {veganIcon}
            </View>
            <View style={styles.allergenContainer}>
              <Text style={styles.allergenText}>Gluten Free:</Text>
              {glutenFreeIcon}
            </View>
            <View style={styles.allergenContainer}>
              <Text style={styles.allergenText}>Lactose Free:</Text>
              {lactoseFreeIcon}
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={allergenModalHandler}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    borderBottomWidth: 2,
  },
  allergenContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  allergenText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
