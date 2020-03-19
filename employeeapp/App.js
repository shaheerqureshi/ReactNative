import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Contants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Contants.statusBarHeight,
    backgroundColor: '#ebebeb'
  },
});
