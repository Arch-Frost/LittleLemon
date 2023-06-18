import React from 'react'

import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'

const green = '#495E57'
const yellow = '#F4CE14'
const gray = '#EDEFEE'

const menuItemsToDisplay = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },	
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
  ];

const Separator = () => <View style={menuStyles.separator}></View>

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>

const Footer = () => <Text style={menuStyles.footerText}>
    All right reserved by Little Lemon, 2023
</Text>

const Item = ({ name })  => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
    </View>
);

const MenuItems = () => {
    const renderItem = ({ item }) => <Item name={item.name} />;

    return (
        <View style={menuStyles.container}>
            <FlatList 
            data={menuItemsToDisplay} 
            keyExtractor={(item) => item.id} 
            renderItem={renderItem}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
            ></FlatList>
        </View>
    )
}

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.8,
    },
    
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: green,
    },
    
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    
    itemText: {
        color: yellow,
        fontSize: 36,
    },

    separator: {
        borderBottomWidth: 1,
        borderColor: gray,
    },

    footerText: {
        color: gray,
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center'
    }
});