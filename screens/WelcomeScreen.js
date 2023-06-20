import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.image} />
      <Text style={styles.text}>
        Little Lemon, your local {'\n'}
        Mediterranian Bistro</Text>
    </View>

    <View style={{backgroundColor: '#fff'}}>
      <Pressable onPress={() => {navigation.navigate("Subscribe")}}>
        <Text style={styles.button}>Newsletter</Text>
      </Pressable>
    </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#495E57',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    
  },
  image: { 
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 100, 
    resizeMode: 'contain',
  }
})