/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import DemoOnLayout from './src/DemoOnLayout';

export default function App() {
  return (
    <View
      style={{
        paddingTop:
          Platform.OS === 'android'
            ? StatusBar.currentHeight
            : 0,
      }}
    >
      <DemoOnLayout />
    </View>
  );
}
