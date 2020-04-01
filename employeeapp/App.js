import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Contants from 'expo-constants'
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/reducer'
const store = createStore()


const Stack = createStackNavigator();
const myOptions = {
  title:'My sweet Home',
           headerTintColor:'white',
           headerStyle:{
             backgroundColor:'#006aff'
           }
}
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
         name="Home"
         component={Home}
         options = {myOptions}
          />
        <Stack.Screen options = {{...myOptions,title:'Create Employee'}} name="Create" component={CreateEmployee} />
        <Stack.Screen options = {{...myOptions,title:'Profile'}} name="Profile" component={Profile} />
    </Stack.Navigator>
        {/* <Home/>       */}
       {/* <CreateEmployee/> */}
       {/* <Profile/> */}
    </View>
  );
}
export default ()=>{
  return(
    <Provider store={store}>
    <NavigationContainer>
      <View style={styles.container}>
        <App/>
      </View>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
});
