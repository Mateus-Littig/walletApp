import React from 'react'
import { Button, IconGoogle, Title } from './styles'
import PngGoogle from '../../assets/iconGoogle.png'
import { RectButtonProps } from 'react-native-gesture-handler'

interface ButtonGoogleProps extends RectButtonProps {
  title: string;
}

export function ButtonGoogle({title} : ButtonGoogleProps) {

  return (
    <Button>
      <IconGoogle source={PngGoogle} resizeMode='contain' />
      <Title>{title}</Title>
    </Button>
  )
}
