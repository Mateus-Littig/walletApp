import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../screens/Auth/SignUp'
import Login from '../screens/Auth/Login'
import { Profile } from '../screens/App/Profile'
import { AddCard } from '../screens/App/AddCard'
import { DetailsCard } from '../screens/App/DetailsCard'
import { Transfer } from '../screens/App/Transfer'
import { TransactionScreen } from '../screens/App/Transaction'
import { TabRoutes } from './tab.routes'
const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      <Screen name="TabRoutes" component={TabRoutes} />
      <Screen name="Profile" component={Profile} />
      <Screen name="AddCard" component={AddCard} />
      <Screen name="DetailsCard" component={DetailsCard} />
      <Screen name="Transfer" component={Transfer} />
      <Screen name="TransactionScreen" component={TransactionScreen} />
    </Navigator>
  )
}
