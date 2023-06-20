import * as React from 'react';
import { ValidateEmail } from '../utils';
import { 
  View,
  ScrollView, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  Pressable, 
  KeyboardAvoidingView, 
  Platform,
  Alert,
  Button
} from 'react-native';

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState('');
  
  return (
  <>
  <KeyboardAvoidingView 
    style={styles.container}
    abehavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode='on-drag'>
        <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.image} />
        <Text style={styles.regularText}>
          Subscribe to our newsletter for our {'\n'} latest delicious recipies!
        </Text>

        <TextInput 
        style={styles.input} 
        placeholder="Type your email" 
        value={email}
        onChangeText={onChangeEmail}
        keyboardType='email-address'
        />
        

        <Pressable>        
          <View style={styles.button}>
            <Button 
            title="Subscribe" 
            disabled={!validateEmail(email)}
            color={'#495E57'}
            style={styles.button}
            onPress={() => {
            Alert.alert('Thank you for subscribing!', 'You will now receive our latest recipies in your inbox.')
            }}
          />
          </View>
        </Pressable>

      </ScrollView>
  </KeyboardAvoidingView>
  </>
  )
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    margin: 20,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: '#495E57',
    marginBottom: 0,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 60,
    resizeMode: 'contain',
  },
  regularText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  }
})