import React from "react"
import { SafeAreaView, TouchableOpacity} from 'react-native'
import { useTheme } from "styled-components"
import Input from '../../../components/InputPerson/input'
import { useNavigation } from '@react-navigation/native'
import { ButtonGoogle } from "../../../components/ButtonGoogle/buttonGoogle"
import { ButtonSocial } from "../../../components/ButtonSocial"
import { ButtonPerson } from "../../../components/ButtonPerson/button"
import {
  Container, ContentHeader, Title, Description, ViewButton, ContentBody,
  ContentFooter, TextFooter, TextRegister
} from './styles'

export default function Login () {
  const {COLORS} = useTheme();
  const navigation = useNavigation()
  const handleTabRoutes = () => {
    navigation.navigate('TabRoutes')
  }
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Welcome back {'\n'}to Wallet App</Title>

          <Description>Sign up with</Description>

          <ViewButton>
            <ButtonGoogle title="Google" />
            <ButtonSocial iconName="facebook" title="Facebook" />
          </ViewButton>
        </ContentHeader>

        <ContentBody>
          <Input
            LeftIcon
            iconSize={25}
            iconName="md-person-outline"
            autoCorrect={false} // corretor do celular não corrige
            autoCapitalize="none" // primeira letra do email minuscula
            placeholder="Username"
          />
          <Input
            LeftIcon
            RightIcon
            iconSize={25}
            secureTextEntry
            autoCorrect={false}
            iconName="key-outline"
            placeholder="Password"
          />

          <ButtonPerson
            title="Login"
            onPress={handleTabRoutes}
            // variant="primary"
          />
        </ContentBody>

        <ContentFooter>
          <TextFooter>Don't have an account yet?</TextFooter>
          <TouchableOpacity onPress={handleSignUp}>
            <TextRegister> Register</TextRegister>
          </TouchableOpacity>
        </ContentFooter>
      </Container>
    </SafeAreaView>
  )
}
