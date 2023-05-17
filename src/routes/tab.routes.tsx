import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import theme from '../styles/theme'
import Wallet from '../screens/Tab/Wallet'
import Relatory from '../screens/Tab/Relatory'
import Notification from '../screens/Tab/Notification'
import Settings from '../screens/Tab/Settings'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName='Wallet'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarActiveTintColor: '#333',
        tabBarStyle: {
          width: "80%",
          height: 78,
          backgroundColor: '#5B259F',
          marginBottom: 30,
          borderRadius: 30,
          marginLeft:"10%"
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Screen
        name='wallet'
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name='wallet'
                  size={35}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY4 }
                />
              ) : (
                <Ionicons
                  name='wallet-outline'
                  size={35}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Relatory"
        component={Relatory}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name='bar-chart'
                  size={30}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              ) : (
                <Ionicons
                  name='bar-chart-outline'
                  size={30}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name='notifications-sharp'
                  size={30}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              ) : (
                <Ionicons
                  name='notifications-outline'
                  size={30}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              )}
            </View>
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              { focused ? (
                <Ionicons
                  name='settings'
                  size={30}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              ) : (
                <Ionicons
                  name='settings-outline'
                  size={30}
                  color={ focused ? theme.COLORS.WHITE : theme.COLORS.GRAY6 }
                />
              )}
            </View>
          ),
        }}
      />
    </Navigator>
  )
}
