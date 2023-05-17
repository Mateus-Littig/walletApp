import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GoBack } from '../../../components/GoBack';
import {
  Container, Content, ViewCard, Elipse, RetangCard, ElipseOutPq, ElipseOutGr, Visa,
  ViewTitle, Title, ViewFooter, TextAddNew
} from './styles';

export const AddCard = () => {
  return (
    <>
      <GoBack />
      <Container>

        <ViewTitle>
          <Title>Add Card</Title>
        </ViewTitle>

        <Content>
          <ViewCard>
            <Elipse source={require('../../../assets/elipseGrBck.png')} />
            <RetangCard source={require('../../../assets/retangCard.png')} />
            <ElipseOutPq source={require('../../../assets/elipseOutPq.png')} />
            <ElipseOutGr source={require('../../../assets/elipseOut.png')} />
            <Visa source={require('../../../assets/visa.png')} />
          </ViewCard>
        </Content>
        <ViewFooter>
          <TextAddNew>Add a new card{'\n'}on your wallet for easy life</TextAddNew>
        </ViewFooter>

      </Container>
    </>
  );
}