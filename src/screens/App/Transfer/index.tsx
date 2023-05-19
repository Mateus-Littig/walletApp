import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GoBack } from '../../../components/GoBack';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ButtonPerson } from '../../../components/ButtonPerson/button';
import {
  Container, Value, ViewMabank, Text, ViewButton, ViewValue, Number
} from './styles';

export const Transfer = () => {

  return (
    <>
      <GoBack />
      <Container>
        <Value>$ 1200</Value>

        <ViewMabank>
          <Text>Mabank</Text>
          <TouchableOpacity>
            <MaterialIcons name='keyboard-arrow-down' size={32} color= {"#5B259F"}/>
          </TouchableOpacity>
        </ViewMabank>

        <ViewValue>
          <Number>1</Number>
          <Number>2</Number>
          <Number>3</Number>
        </ViewValue>
        <ViewValue>
          <Number>4</Number>
          <Number>5</Number>
          <Number>6</Number>
        </ViewValue>
        <ViewValue>
          <Number>7</Number>
          <Number>8</Number>
          <Number>9</Number>
        </ViewValue>
        <ViewValue>
          <Number>00</Number>
          <Number>0</Number>
          <Ionicons name='md-close-circle-outline' size={32} color= {"#5B259F"}/>
        </ViewValue>

        <ViewButton>
          <ButtonPerson title='Transfer' onPress={() => {}}/>
        </ViewButton>
      </Container>
    </>
  );
}
