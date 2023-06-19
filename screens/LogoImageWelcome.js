import * as React from 'react'
import { Text, ScrollView, StyleSheet, Image, ImageBackground, View } from 'react-native'

const green = '#495E57'
const yellow = '#F4CE14'
const gray = '#EDEFEE'

const LogoImageWelcome = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                style={styles.logo} 
                source={require("../img/littleLemonLogo.png")} />
                
                <Text style={styles.headerText}>
                    Little Lemon
                </Text>
            </View>

            <Text style={styles.title}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would
                    love to hear your experience with us!
            </Text>

        </ScrollView>
    )
}

export default LogoImageWelcome;

const styles = StyleSheet.create({
    logo: {
       height: 100,
       width: 100,
       resizeMode: 'contain',
       
    },
    innerContainer: {
        flex: 0.2, 
        flexDirection: 'row', 
        alignContent: 'center'
    },

    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#333333',
    },
  
    headerText: {
        color: gray,
        fontSize: 30,
        verticalAlign: 'middle',
        padding: 20
    },

    title: {
      marginTop: 16,
      paddingVertical: 10,
      color: gray,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
