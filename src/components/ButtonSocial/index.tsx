import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { Button, IconSocial, Title } from './styles'
import { RectButtonProps } from'react-native-gesture-handler'

interface ButtonSocialProps extends RectButtonProps {
  title: string;
  iconName: React.ComponentProps<typeof Fontisto>["name"] //propriedade para identificar o icon via props
}

// title?: string indica que o title não é obrigatório
export function ButtonSocial({title, iconName} : ButtonSocialProps)  {
//propriedade para identificar o icon e o title via props
  return (
    <Button>
      <IconSocial name={iconName} />
      <Title>{title}</Title>
    </Button>
  )
}
