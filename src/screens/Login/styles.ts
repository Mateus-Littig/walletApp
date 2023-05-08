import styled from "styled-components/native"

export const Container = styled.View`
  padding: 10px
`
export const ContentHeader = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px
`
export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  margin-top: 40px;
  font-weight: 600;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
  color: ${({theme}) => theme.COLORS.PURPLEDARK1};
`
export const Description = styled.Text`
  margin-top: 60px;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`

export const ViewButton = styled.View`
  flex-direction: row;
`
export const ContentBody = styled.View`

`
export const ContentFooter = styled.View`

`
