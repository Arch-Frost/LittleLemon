import { StyleSheet, Text, View } from 'react-native';

// Import a local component
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import WelcomeInfo from './components/WelcomeInfo';

export default function App() {
  return (
    <>
    <View style={{
      flex: 1,
      backgroundColor: '#495E57'
    }}>
      <LittleLemonHeader />
      <WelcomeInfo />
      {/* <WelcomeScreen /> */}
      {/* <MenuItems /> */}
    </View>

    
    <View style={{
      backgroundColor: '#495E57'
    }}>
      <LittleLemonFooter />
    </View>

    </>
  );
}