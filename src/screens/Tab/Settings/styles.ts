import styled from "styled-components/native"

export const Container = styled.View`
  padding: 30px;
  flex: 1;
`
export const ViewFooter = styled.View`
  align-items: center;
  margin-top: 50px;
`
export const TextLogOut = styled.Text`
  font-size: 21px;
  margin-top: 15px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
