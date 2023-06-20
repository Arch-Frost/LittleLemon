import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import WelcomeScreen from './screens/WelcomeScreen'
import SectionListMenuItems from './screens/SectionListMenuItems'

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FEEA98',
                    
            },
                drawerStyle: {
                    backgroundColor: '#FEEA98',
                }
            }}>
                <Drawer.Screen name='Home' component={WelcomeScreen} />
                <Drawer.Screen name='Menu' component={SectionListMenuItems} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}