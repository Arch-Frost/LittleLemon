import React from "react";

import { Text, View, SectionList, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const Separator = () => <View style={menuStyles.separator}></View>;

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const SectionListMenuItems = ( {navigation} ) => {
  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={Separator}
      ></SectionList>
    </View>
  );
};

export default SectionListMenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7F23C",
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#B4D945",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  headerText: {
    color: "black",
    fontSize: 30,
    flexWrap: "wrap",
    textAlign: "center",
  },  
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
    color: "black",
  },
});
