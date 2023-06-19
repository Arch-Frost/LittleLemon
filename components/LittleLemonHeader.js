import * as React from 'react'
import { View, Text } from 'react-native'

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.2, backgroundColor: '#EE9972' }}
        >
            <Text style={{ 
                padding: 30, 
                fontSize: 30, 
                color: 'black', 
                textAlign:'center', 
                textAlignVertical:'center',
                }}
                numberOfLines={1}>
                Little Lemon
            </Text>
        </View>
    );
}