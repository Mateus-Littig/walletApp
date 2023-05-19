import React from 'react'
import { Container, ContentHeader, Avatar, AppName, Status } from './styles'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
interface IHeader { // interface criada para definir props para o componente
  appName?: string;
  status?: string;
  avatar?: boolean;
  alignText?: boolean;
}

export const Header = ({
  appName,
  status,
  avatar,
  alignText
}: IHeader) => {

  const navigation = useNavigation()

  const handleGoProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <Container>
      <ContentHeader alignText={alignText}>
        <AppName>{appName}</AppName>
        <Status>{status}</Status>
      </ContentHeader>
        {avatar && (
        <TouchableOpacity onPress={handleGoProfile}>
          <Avatar
            source={{ uri: 'https://github.com/Mateus-littig.png'}}
          />
        </TouchableOpacity>
        )}
    </Container>
  )
}
