import * as React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'

const green = '#495E57'
const yellow = '#F4CE14'
const gray = '#EDEFEE'

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    
    return (
        <KeyboardAvoidingView 
        style={styles.container}
        abehavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
                <Text style= {styles.headingSection}>
                    How was your visit to Little Lemon?
                </Text>
                <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
                </Text>
                <TextInput 
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder='First Name'
                style={styles.input}
                />
                <TextInput 
                value={lastName}
                onChangeText={onChangeLastName}
                placeholder='Last Name'
                style={styles.input}
                />
                <TextInput 
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                placeholder='Phone Number'
                keyboardType='phone-pad'
                style={styles.input}
                />
                <TextInput 
                value={message}
                onChangeText={onChangeMessage}
                multiline={true}
                numberOfLines={5}
                maxLength={250}
                placeholder='Please leave feedback here'
                style={styles.messageInput}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: yellow
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: yellow
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: gray,
        textAlign: 'center',
        backgroundColor: green
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: gray,
        textAlign: 'center',
        backgroundColor: green,
    }
});