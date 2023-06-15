import React from 'react'

import { Text, View, ScrollView } from 'react-native'

const green = "495E57"
const yellow = "F4CE14"

const menuItemsToDisplay = [
    ' Lemons \n More Lemons \n Even More Lemons \n Lemons Forever \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n Lemons for Everyone \n Lemons for All \n Sweet Lemons \n Sour Lemons \n Lemons for You \n Lemons for Me \n\n',
]

const MenuItems = () => {
    return (
        <View style = {{ flex: 0.8 }}>
            <ScrollView style = {{
                padding: 40,
                backgroundColor: green,
            }}>
                <Text style={{fontSize: 40, flexWrap: 'wrap', color:'white', textAlign:'center'}}>
                    View Menu
                </Text>
                <Text style={{color:{yellow}, fontSize:20, color:'white'}}>
                    {menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
}

export default MenuItems;