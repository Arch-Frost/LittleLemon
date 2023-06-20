import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import WelcomeScreen from './screens/WelcomeScreen'
import SectionListMenuItems from './screens/SectionListMenuItems'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = focused ? 'ios-home' : 'ios-home-outline'
                    } else if (route.name === 'Menu') {
                        icon = 'ios-list'
                    }
                    return <Ionicons name={icon} size={size} color={color} />
                }, 
                tabBarActiveTintColor: 'tomato', 
                tabBarInactiveTintColor: 'gray',
                headerStyle: {backgroundColor: '#FEEA98'},
                headerTintColor: '#333333',
                headerTitleStyle: {fontWeight: 'bold'},
                tabBarStyle: {backgroundColor: '#FEEA98',},
            })}
            initialRouteName='Home'
            >
                <Tab.Screen name='Home' component={WelcomeScreen} />
                <Tab.Screen name='Menu' component={SectionListMenuItems} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}