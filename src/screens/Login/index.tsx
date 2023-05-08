import React from "react"
import { SafeAreaView } from 'react-native'

import { ButtonGoogle } from "../../components/ButtonGoogle/buttonGoogle"
import { ButtonSocial } from "../../components/ButtonSocial"
import { Input } from "../../components/Input"
import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter
} from './styles'

export default function Login () {
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
          <Input name='email'/>
        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>

  )
}
