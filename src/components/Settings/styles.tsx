import styled from "styled-components/native"

export const Container = styled.View`
  padding: 10px 15px;
  bottom: 25px;
  margin-bottom: 10px;
`
export const ViewProfile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  justify-content: space-between;
`
export const ProfileName = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`

