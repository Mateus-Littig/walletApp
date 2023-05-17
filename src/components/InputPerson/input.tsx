import React, { useState } from 'react';
import Icon from '@expo/vector-icons/Ionicons'
import { useTheme } from 'styled-components'
import { Container, InputText } from './styles'
import { TextInputProps, TouchableOpacity } from 'react-native'

interface InputProps {
  RightIcon?: boolean // icone da direita
  LeftIcon?: boolean // icone da esquerda
  iconName?: keyof typeof Icon.glyphMap // nome do icone
  iconSize?: number // tamanho do icone
  iconColor?: string // cor do icone
  secureTextEntry?: boolean // chave de segurança
}

export default function Input ({
  RightIcon,
  LeftIcon,
  iconName,
  iconSize,
  iconColor,
  secureTextEntry,
  ...rest
} : InputProps & TextInputProps) {
  const { COLORS } = useTheme()
  const [ secury, setSecury ] = useState(secureTextEntry)

  return (
    <Container>
      {LeftIcon && (
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor || COLORS.GRAY2}
          style={{ padding: 5 }}
        />
      )}
      <InputText
        {...rest}
        secureTextEntry={secury}
        placeholderTextColor={COLORS.GRAY3}
      />
      {RightIcon && (
        <TouchableOpacity onPress={() => setSecury(!secury)}>
          <Icon
            name={secury ? 'eye-off' : 'eye'}
            size={iconSize}
            color={iconColor || COLORS.GRAY3}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>

      )}
    </Container>
  )
}
