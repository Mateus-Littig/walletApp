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
          <TouchableOpacity>
            <Number>1</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>2</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>3</Number>
          </TouchableOpacity>
        </ViewValue>
        <ViewValue>
          <TouchableOpacity>
            <Number>4</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>5</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>6</Number>
          </TouchableOpacity>
        </ViewValue>
        <ViewValue>
          <TouchableOpacity>
            <Number>7</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>8</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>9</Number>
          </TouchableOpacity>
        </ViewValue>
        <ViewValue>
          <TouchableOpacity>
            <Number>00</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Number>0</Number>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='md-close-circle-outline' size={32} color= {"#5B259F"}/>
          </TouchableOpacity>
        </ViewValue>

        <ViewButton>
          <ButtonPerson title='Transfer' onPress={() => {}}/>
        </ViewButton>
      </Container>
    </>
  );
}
