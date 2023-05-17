import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignUp from '../screens/Auth/SignUp'
import Login from '../screens/Auth/Login'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthRoutes = () => {
  return (
    <Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
    </Navigator>
  )
}
