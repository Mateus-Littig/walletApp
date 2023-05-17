import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { GoBack } from '../../../components/GoBack';
import { OptionsSettings } from '../../../components/Settings';
import {
  Container, ViewAvatar, Avatar, ViewBck, TextAvatar, ViewTitle, Title, ViewOptions,
  ViewFooter, TextDelete
} from './styles';

export const Profile = () => {
  return (
    <>
      <GoBack />
      <Container>
        <ViewAvatar>
          <Avatar source={{ uri: 'https://github.com/Mateus-littig.png'}}/>
          <ViewBck>
            <TextAvatar>change</TextAvatar>
          </ViewBck>
        </ViewAvatar>

        <ViewTitle>
          <Title>Mateus</Title>
          <AntDesign name='edit' size={26} color= {"#5B259F"}/>
        </ViewTitle>

        <ViewOptions>
          <OptionsSettings name='Connected Acccount'/>
          <OptionsSettings name='Privacy and security'/>
          <OptionsSettings name='Login Settings'/>
          <OptionsSettings name='Service Center'/>
        </ViewOptions>
        <ViewFooter>
          <TouchableOpacity>
            <Octicons
              name='trash'
              size={38}
              color= {"#5B259F"}
            />
          </TouchableOpacity>
          <TextDelete>Delete Account</TextDelete>
        </ViewFooter>

      </Container>
    </>
  );
}
