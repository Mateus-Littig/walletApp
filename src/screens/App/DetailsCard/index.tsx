import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GoBack } from '../../../components/GoBack';
import {
  Container, Content, ViewCard, Card, ViewTitle, Title, ViewFooter, TextAddNew,
  Body, OptionCard, InfoOption
} from './styles';

export const DetailsCard = () => {
  return (
    <>
      <GoBack />
      <Container>
        {/* <TouchableOpacity onPress={handleGoAddCard}> */}
          <ViewTitle>
            <Title>Detail Card</Title>
          </ViewTitle>

          <Content>
            <ViewCard>
              <Card source={require('../../../assets/DetailCard.png')} />
            </ViewCard>
          </Content>

          <Body>
            <OptionCard>Name</OptionCard>
            <InfoOption>Mateus Littig</InfoOption>
          </Body>
          <Body>
            <OptionCard>Bank</OptionCard>
            <InfoOption>Mabank</InfoOption>
          </Body>
          <Body>
            <OptionCard>Account</OptionCard>
            <InfoOption>.... .... .... 2138</InfoOption>
          </Body>
          <Body>
            <OptionCard>Status</OptionCard>
            <InfoOption>Active</InfoOption>
          </Body>
          <Body>
            <OptionCard>Valid</OptionCard>
            <InfoOption>2020 - 2025</InfoOption>
          </Body>

          <ViewFooter>
            <TextAddNew>Delete card</TextAddNew>
          </ViewFooter>
        {/* </TouchableOpacity> */}
      </Container>
    </>
  );
}
