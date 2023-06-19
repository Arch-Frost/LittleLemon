import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen';
import SectionListMenuItems from './screens/SectionListMenuItems';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import { TextInput } from 'react-native-web';

const Stack = createNativeStackNavigator();

function App() {
  return (

  <NavigationContainer>
    <View style={styles.container}>
      <LittleLemonHeader />
      <Stack.Navigator 
      initialRouteName='Login' 
      screenOptions={
        {headerStyle: {backgroundColor: '#333333'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'}}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Menu' component={SectionListMenuItems} />
      </Stack.Navigator>
    </View>

    <View style={styles.footerContainer}>
      <LittleLemonFooter />
    </View>
  </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  }
})