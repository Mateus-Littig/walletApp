import React from "react";
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons"
import {
  Container, ViewProfile, ProfileName
} from './styles'


interface IProfile {
  name?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  typeProfile?: boolean
  typeNotification?: boolean;
  typeWallet?: boolean;
  typeSettings?: boolean;
  typeService?: boolean;
  onPress?: () => void;
  styles?: string;
}

export const OptionsSettings = ({
  name, iconLeft, iconRight, typeProfile, typeNotification,
  typeWallet, typeSettings, typeService, onPress, styles
}: IProfile) => {
  const navigation = useNavigation()

  return (
      <Container>
        <ViewProfile>
          {iconLeft && (
            <>
              {typeProfile && (
                <Ionicons
                  name='person-outline'
                  size={27}
                  color= {"#5B259F"}
                />
              )}
              {typeNotification && (
                <Ionicons
                  name='notifications-outline'
                  size={27}
                  color= {"#5B259F"}
                />
              )}
              {typeWallet && (
                <Ionicons
                  name='md-wallet-outline'
                  size={27}
                  color= {"#5B259F"}
                />
              )}
              {typeSettings && (
                <Ionicons
                  name='settings-outline'
                  size={27}
                  color= {"#5B259F"}
                />
              )}
              {typeService && (
                <Feather
                  name='phone-call'
                  size={27}
                  color= {"#5B259F"}
                />
              )}
            </>
          )}
          <ProfileName>{name}</ProfileName>
          <TouchableOpacity onPress={onPress}>
            <MaterialIcons
              styles={styles}
              name='keyboard-arrow-right'
              size={25}
              color= {"#5B259F"}
            />
          </TouchableOpacity>
        </ViewProfile>
      </Container>
  )
}
