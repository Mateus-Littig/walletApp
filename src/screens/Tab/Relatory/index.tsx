import React from "react";
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header } from '../../../components/Header'
import { Transaction } from "../../../utils/transaction";
import {
  Container, Graphic, Value, ViewBalance, TextTotal, ValueBalance, Footer,
  ContentFlat, ContentFooter, DetailsTransaction, IconTransaction, Acomp,
  TitleTransaction, SubTitleTransaction, PriceTransaction, ContentHeader,
  Title, ButtonViewAll, ButtonTitle
} from './styles'

export default function Relatory () {
  const navigation = useNavigation()

  const handleGoViewAll = () => {
    navigation.navigate('TransactionScreen')
  }
  return (
  <>
    <Header appName="Income Stats"/>
    <Container>
      <Graphic source={require('../../../assets/Graphic.png')}/>
      <Value>$ 2100</Value>

      <ViewBalance>
        <TextTotal>Total Balance</TextTotal>
        <ValueBalance>$ 13.248</ValueBalance>
      </ViewBalance>

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
  </>
  )
}
