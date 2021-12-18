import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Home';

export default function App() {
  return (
      <SafeAreaProvider style={{backgroundColor: '#eee'}}>
        <Home />
      </SafeAreaProvider>
  );
}
