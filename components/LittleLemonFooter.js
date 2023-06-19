import * as React from 'react'
import { View, Text } from 'react-native'

export default function LittleLemonFooter() {
    // Add footer at the bottom of the screen
    return (
        <View style={{marginBottom:10, backgroundColor: '#EE9972'}}>
            <Text style={{ 
                fontSize: 18, 
                color: 'black',
                textAlign:'center',
                }}
                numberOfLines={1}>
            All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    )
}