import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import Home from './Home';
import Departments from './Departments';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Departments') {
                        iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#3D8CFF',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Departments" component={Departments} />
        </Tab.Navigator>
    )
}
