import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  width: 130px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 15px;
  background-color: ${({theme}) => theme.COLORS.GRAY5};
  margin-right: 20px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
`

export const IconGoogle = styled.Image`
  width: 24px;
  height: 24px;
`

export const Title = styled.Text`
 font-size: 15px;
 margin-left: 15px;
 font-weight: 600;
 font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`
