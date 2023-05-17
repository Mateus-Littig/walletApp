import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';

export const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <AntDesign name='leftcircleo' size={32} color= {"#5B259F"}/>
    </Container>
  );
}
