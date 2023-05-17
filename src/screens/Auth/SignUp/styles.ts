import styled from "styled-components/native"

export const Container = styled.View`
  padding: 20px
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
  flex-direction: row;
  justify-content: center;
  margin-top: 11px;
`
export const TextFooter = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
  color: ${({theme}) => theme.COLORS.GRAY1};
`
export const TextRegister = styled.Text`
  color: ${({theme}) => theme.COLORS.BLUE1};
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};

`
