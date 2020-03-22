import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Contants from 'expo-constants'
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
       {/* <Home/>       */}
       {/* <CreateEmployee/> */}
       <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Contants.statusBarHeight,
    backgroundColor: '#e0e0e0'
  },
});
