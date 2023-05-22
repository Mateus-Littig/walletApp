import React from "react";
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { OptionsSettings } from '../../../components/Settings'
import { Header } from "../../../components/Header";
import {
  Container, ViewFooter, TextLogOut
} from './styles'
import { Ionicons } from "@expo/vector-icons";

export default function Settings () {
  const navigation = useNavigation()

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  const handleGoProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <>
      {/* <TouchableOpacity>
        <Ionicons
          name="md-chevron-back-circle-outline"
          size={32}
          color= {"#5B259F"}
        />
      </TouchableOpacity> */}
      <Header appName="Settings" alignText/>
      <Container>
        <OptionsSettings iconLeft typeProfile name="Profile" onPress={handleGoProfile}/>
        <OptionsSettings iconLeft typeNotification name="Notifications"/>
        <OptionsSettings iconLeft typeWallet name="Your Wallet"/>
        <OptionsSettings iconLeft typeSettings name="Login Settings"/>
        <OptionsSettings iconLeft typeService name="Service Center"/>
        <ViewFooter>
          <TouchableOpacity onPress={handleLogin}>
            <Ionicons
              name="log-out-outline"
              size={38}
              color= {"#5B259F"}
            />
          </TouchableOpacity>
          <TextLogOut>Log Out</TextLogOut>
        </ViewFooter>
      </Container>
    </>

  )
}
