import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Home';
import Navigation from './Navigation';

export default function App() {
  return (
    // <SafeAreaProvider style={{ backgroundColor: '#eee' }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    // </SafeAreaProvider>
  );
}
