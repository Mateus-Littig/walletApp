import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Header } from "../../../components/Header";
import {
  Container,
} from './styles'

export default function Notification () {
  // const navigation = useNavigation()

  // const handleSignUp = () => {
  //   navigation.navigate('SignUp')
  // }

  return (
  <>
    <Header appName="Notifications"/>
    <Container>
    </Container>
  </>
  )
}
