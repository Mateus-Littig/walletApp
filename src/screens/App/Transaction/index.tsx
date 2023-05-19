import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native'
import { Transaction } from '../../../utils/transaction';
import { GoBack } from '../../../components/GoBack';
import {
  Container, ContentFlat, ContentFooter, DetailsTransaction, IconTransaction,
  Acomp, TitleTransaction, SubTitleTransaction, PriceTransaction, Title
} from './styles';

export const TransactionScreen = () => {

  return (
    <>
      <GoBack />
      <Container>
        <Title>Last Transactions</Title>
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
            showsVerticalScrollIndicator={false}
          />
      </Container>
    </>
  );
}
