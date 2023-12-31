import React, { useState } from 'react'

import { Text, View, SectionList, StyleSheet, Pressable } from 'react-native'

const green = '#495E57'
const yellow = '#F4CE14'
const gray = '#EDEFEE'

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];
  
const Separator = () => <View style={menuStyles.separator}></View>

const Footer = () => <Text style={menuStyles.footerText}>
    All right reserved by Little Lemon, 2023
</Text>

const Item = ({ name })  => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
    </View>
);

const PressableMenuScreen = () => {
    const renderItem = ({ item }) => <Item name={item} />;

    const renderSectionHeader = ({section: { title }}) => (
        <Text style={menuStyles.sectionHeader}>{title}</Text>
    )

    const [showMenu, setShowMenu] = useState(false);

    return (
        <View>
            {!showMenu && (
                <Text style={menuStyles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. View our
                    menu to explore our cuisine with daily specials!
                </Text>
            )}
            <Pressable 
            style={menuStyles.button}
            onPress={() => {
                setShowMenu(!showMenu);
            }}>
                <Text style={menuStyles.buttonText}>
                    {showMenu ? 'Home' : 'Show Menu'}
                </Text>
                
            </Pressable>
            {showMenu && (
                <SectionList
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ListFooterComponent={Footer}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={Separator}
                ></SectionList>
            )}
        </View>
    )
}

export default PressableMenuScreen;

const menuStyles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: yellow,
      fontSize: 32,
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: gray,
    },
    footerText: {
      color: gray,
      fontSize: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: gray,
        borderColor: gray,
        borderWidth: 2,
        borderRadius: 12
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: gray,
        textAlign: 'center',
        backgroundColor: green,
    },
  });
  