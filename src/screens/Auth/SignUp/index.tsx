import React from "react";
import { SafeAreaView, TouchableOpacity } from 'react-native'
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

export default function SignUp () {
  const {COLORS} = useTheme();
  const navigation = useNavigation()

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Immediately feel the{'\n'}ease of transacting just{'\n'}by registering</Title>

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
            iconSize={25}
            iconName="mail-outline"
            autoCorrect={false} // corretor do celular não corrige
            autoCapitalize="none" // primeira letra do email minuscula
            placeholder="Email"
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
            title="Register"
            onPress={() => {}}
            // variant="primary"
          />
        </ContentBody>

        <ContentFooter>
          <TextFooter>You have account?</TextFooter>
          <TouchableOpacity onPress={handleLogin}>
            <TextRegister> Login</TextRegister>
          </TouchableOpacity>
        </ContentFooter>
      </Container>
    </SafeAreaView>
  )
}
