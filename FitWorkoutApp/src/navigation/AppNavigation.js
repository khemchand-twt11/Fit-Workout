// AppNavigator.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserProfile from '../screens/UserProfile'
import Welcome from '../screens/Welcome'

const Stack = createNativeStackNavigator()

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name='UserProfile' component={UserProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
