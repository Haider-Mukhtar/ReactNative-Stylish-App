import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//My App Screens
import SignIn from './screens/SignIn'

const App = () => {

  //Stack Navigator
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})