import * as React from 'react'
import { Text, ScrollView, StyleSheet, Image, useColorScheme } from 'react-native'

const ColorThemes = () => {
    const colorScheme = useColorScheme();
    return (
        <ScrollView 
        style={[
            styles.container, 
            colorScheme === 'light' 
            ? {backgroundColor: '#fff'} 
            : {backgroundColor: '#333333'},]}>
            <Image
            style={styles.logo} 
            source={require("../img/littleLemonHeader.png")} 
            accessible={true}
            accessibilityLabel='Little Lemon Header'
            />
            <Text style={styles.regular}> Color Scheme: {colorScheme} </Text>
            
        </ScrollView>
    )
}

export default ColorThemes;

const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
      resizeMode: 'contain'
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
    },
    regular: {
      fontSize: 18,
      textAlign: 'center',
    },
  });