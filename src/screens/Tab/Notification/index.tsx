import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { GoBack } from "../../../components/GoBack";
import { Header } from "../../../components/Header";
import {
  Container, ViewHeader, TitleNew, ViewBody, ViewText, TextDate, TextInfo, TextPgt,
  ViewPonto, TitleRecent
} from './styles'

export default function Notification () {

  return (
    <>
      <Header appName="Notification" alignText />
      <Container>
        <TitleNew>New</TitleNew>

        <ViewBody>
          <ViewText>
            <TextDate>29 April 2023, 7.14 PM</TextDate>
            <TextInfo>You receveid Rp 100.000 from{'\n'}Vania de Sousa Littig</TextInfo>
            <TextPgt>'Pay debt'</TextPgt>
          </ViewText>
          <Entypo name='chevron-with-circle-up' size={20} color= {"#56BE15"}/>
        </ViewBody>
        <ViewPonto />

        <ViewBody>
          <ViewText>
            <TextDate>29 April 2023, 9.02 AM</TextDate>
            <TextInfo>You spent Rp 32.000 for Coffe{'\n'}Cetar back Tugu Sentral</TextInfo>
            <TextPgt>'Buy drink'</TextPgt>
          </ViewText>
          <Entypo name='chevron-with-circle-down' size={20} color= {"#FF3333"}/>
        </ViewBody>
        <ViewPonto />

        <TitleRecent>Recent</TitleRecent>

        <ViewBody>
          <ViewText>
            <TextDate>28 April 2023, 8.32 AM</TextDate>
            <TextInfo>You spent Rp 210.000 for pay{'\n'}Osnir Littig</TextInfo>
            <TextPgt>'Buy items'</TextPgt>
          </ViewText>
          <Entypo name='chevron-with-circle-down' size={20} color= {"#FF3333"}/>
        </ViewBody>

        <ViewBody>
          <ViewText>
            <TextDate>28 April 2023, 8.31 AM</TextDate>
            <TextInfo>You spent Rp 210.000 for pay{'\n'}Osnir Littig</TextInfo>
            <TextPgt>'Buy items'</TextPgt>
          </ViewText>
          <Entypo name='chevron-with-circle-down' size={20} color= {"#FF3333"}/>
        </ViewBody>

        <ViewBody>
          <ViewText>
            <TextDate>28 April 2023, 8.31 AM</TextDate>
            <TextInfo>You spent Rp 210.000 for pay{'\n'}Osnir Littig</TextInfo>
            <TextPgt>'Buy items'</TextPgt>
          </ViewText>
          <Entypo name='chevron-with-circle-down' size={20} color= {"red"}/>
        </ViewBody>
      </Container>
    </>
  )
}
