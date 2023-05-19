import React from "react";
import { FlatList } from 'react-native'
import { TouchableOpacity } from'react-native'
import { useNavigation } from '@react-navigation/native'
import { Transaction } from "../../../utils/transaction";
import Transfer from '../../../assets/convert.png'
import Payment from '../../../assets/export.png'
import Payout from '../../../assets/money-send.png'
import AddCard from '../../../assets/add-circle.png'

import { Header } from "../../../components/Header";
import {
  Container, Content, ViewBalance, Elipse, TitleBalance, TitleValue, ViewCard,
  TitleCard, TitleMabank, ElipseGr, Body, IconTransfer, TitleIcon, IconPayment,
  IconPayout, IconAddCard, Footer, ContentFlat, ContentHeader, Title, ButtonViewAll,
  ButtonTitle, ContentFooter, IconTransaction, DetailsTransaction, TitleTransaction,
  SubTitleTransaction, PriceTransaction, Acomp
} from './styles'

export default function Wallet () {
  // const navigation = useNavigation()
  // const handleSignUp = () => {
  //   navigation.navigate('SignUp')
  // }
  const navigation = useNavigation()

  const handleGoTransfer = () => {
    navigation.navigate('Transfer')
  }
  const handleGoAddCard = () => {
    navigation.navigate('AddCard')
  }
  const handleGoViewAll = () => {
    navigation.navigate('TransactionScreen')
  }

  return (
    <Container>
      <Header appName="Wallet" status="Active" avatar/>
      <Content>
        <ViewBalance>
          <Elipse source={require('../../../assets/elipsePq.png')} />
          <TitleBalance>Balance</TitleBalance>
          <TitleValue>$ 1.234</TitleValue>
        </ViewBalance>

        <ViewCard>
          <TitleCard>Card</TitleCard>
          <TitleMabank>Mabank</TitleMabank>
          <ElipseGr source={require('../../../assets/elipseGr.png')} />
        </ViewCard>
      </Content>

      <Body>
        <TouchableOpacity onPress={handleGoTransfer}>
          <IconTransfer source={Transfer} />
          <TitleIcon>Transfer</TitleIcon>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconPayment source={Payment}/>
          <TitleIcon>Payment</TitleIcon>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconPayout source={Payout}/>
          <TitleIcon>Payout</TitleIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoAddCard}>
          <IconAddCard source={AddCard}/>
          <TitleIcon>Add Card</TitleIcon>
        </TouchableOpacity>
      </Body>

      <Footer>
        <FlatList
          data={Transaction}
          renderItem={({ item }) => (
            <ContentFlat>
              <ContentFooter>
                <DetailsTransaction>
                    <IconTransaction source={item.icon}/>
                    <Acomp>
                    <TitleTransaction>{item.title}</TitleTransaction>
                    <SubTitleTransaction>{item.subtitle}</SubTitleTransaction>
                    </Acomp>
                </DetailsTransaction>

                <PriceTransaction>$ {item.price}</PriceTransaction>
              </ContentFooter>
            </ContentFlat>
          )}
          ListHeaderComponent={
            <ContentHeader>
                <Title>Last Transaction</Title>
                <ButtonViewAll onPress={handleGoViewAll}>
                  <ButtonTitle>View all</ButtonTitle>
                </ButtonViewAll>
              </ContentHeader>
          }
          showsVerticalScrollIndicator={false}
        />
      </Footer>
    </Container>
  )
}
