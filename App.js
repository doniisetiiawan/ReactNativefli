/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import Democrv from './src/Democrv';

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
      <Democrv />
    </View>
  );
}
