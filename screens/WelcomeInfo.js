import React from 'react'

import { Text, View, ScrollView} from 'react-native'

const infoText = 'Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!'

export default function WelcomeInfo() {
    return (
        <View style={{ flex: 1 , backgroundColor: '##495E57'}}>
        <ScrollView>
            <Text   
                style={{
                    padding: 40,
                    fontSize: 50,
                    color: '#EDEFEE',
                    textAlign: 'center',
                }}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={{
                    fontSize: 38,
                    padding: 20,
                    marginVertical: 8,
                    color: '#EDEFEE',
                    textAlign: 'center',
                }}>
                {infoText}
            </Text>
            </ScrollView>
        </View>
    )
}
