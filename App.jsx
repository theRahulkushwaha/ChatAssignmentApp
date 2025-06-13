import React from 'react';
import { SafeAreaView } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  return (
    <MenuProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ChatScreen />
      </SafeAreaView>
    </MenuProvider>
  );
};

export default App;
