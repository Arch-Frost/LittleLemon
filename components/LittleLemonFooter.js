import * as React from 'react'
import { View, Text } from 'react-native'

export default function LittleLemonFooter() {
    // Add footer at the bottom of the screen
    return (
        <View style={{marginBottom:10}}>
            <Text style={{ 
                padding: 5,
                fontSize: 15, 
                color: 'yellow', 
                textAlign:'center',
                }}>
            All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    )
}