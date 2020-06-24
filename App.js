import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navigator from './routes/Drawer';
import {globalStyles} from './styles/GlobalStyle';

export default function App() {
  return (
    <View style={globalStyles.mainContainer}>
      <Navigator />
    </View>
  );
}
