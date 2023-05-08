import styled from 'styled-components/native'
import { Fontisto } from '@expo/vector-icons'

export const Button = styled.TouchableOpacity`
  width: 130px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 15px;
  background-color: ${({theme}) => theme.COLORS.BLUE};
  margin-right: 5px;
`

export const IconSocial = styled(Fontisto)`
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
 font-size: 15px;
 margin-left: 15px;
 font-weight: 600;
 font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
 color: ${({theme}) => theme.COLORS.WHITE};
`
