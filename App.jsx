import React from 'react';
import { SafeAreaView } from 'react-native';
import RegisterScreen from './src/screens/Register/RegisterScreen.js';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RegisterScreen />
    </SafeAreaView>
  );
};

export default App;
