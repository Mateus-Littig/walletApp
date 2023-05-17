import React from 'react'
import { Container, ContentHeader, Avatar, AppName, Status } from './styles'

interface IHeader { // interface criada para definir props para o componente
  appName?: string;
  status?: string;
  avatar?: boolean;
}

export const Header = ({
  appName,
  status,
  avatar
}: IHeader) => {
  return (
    <Container>
      <ContentHeader>
        <AppName>{appName}</AppName>
        <Status>{status}</Status>
      </ContentHeader>
        {avatar && (
          <Avatar
            source={{ uri: 'https://github.com/Mateus-littig.png'}}
          />
        )}
    </Container>
  )
}
