import { StyleSheet, Text, View } from 'react-native';

// Import a local component
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './screens/MenuItems';
import WelcomeInfo from './screens/WelcomeInfo';
import SectionListMenuItems from './screens/SectionListMenuItems';
import FeedbackForm from './screens/FeedbackForm';

export default function App() {
  return (
    <>
    <View style={{
      flex: 1,
      backgroundColor: '#495E57'
    }}>
      <LittleLemonHeader />
      {/* <WelcomeInfo /> */}
      {/* <WelcomeScreen /> */}
      {/* <MenuItems /> */}
      {/* <SectionListMenuItems /> */}
      <FeedbackForm />
    </View>

    {/* <View>
      <MenuItems />
    </View> */}

    {/* <View style={{
      backgroundColor: '#495E57'
    }}>
      <LittleLemonFooter />
    </View> */}

    </>
  );
}