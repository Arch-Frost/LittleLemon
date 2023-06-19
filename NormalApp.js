import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Import a local component
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./screens/MenuItems";
import WelcomeInfo from "./screens/WelcomeInfo";
import SectionListMenuItems from "./screens/SectionListMenuItems";
import FeedbackForm from "./screens/FeedbackForm";
import PressableMenuScreen from "./screens/PressableMenuScreen";
import ImageWelcome from "./screens/ImageWelcome";
import LogoImageWelcome from "./screens/LogoImageWelcome";
import ColorThemes from "./screens/ColorThemes";
import WindowDimensions from "./screens/WindowDimensions";

export default function App() {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        {/* <LittleLemonHeader /> */}
        {/* <WelcomeInfo /> */}
        {/* <MenuItems /> */}
        {/* <SectionListMenuItems /> */}
        {/* <FeedbackForm /> */}
        {/* <PressableMenuScreen /> */}
        {/* <ImageWelcome /> */}
        {/* <LogoImageWelcome /> */}
        {/* <ColorThemes /> */}
        <WindowDimensions />
      </View>

      {/* <View>
        <MenuItems />
      </View> */}

      {/* <View style={{
        backgroundColor: '#333333'
      }}>
        <LittleLemonFooter />
      </View> */}
    </NavigationContainer>
  );
}
