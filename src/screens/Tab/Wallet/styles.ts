import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center
`
export const Content = styled.View`
  width: 80%;
  height: 140px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.PURPLECARD};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ViewBalance = styled.View`
`
export const Elipse = styled.Image`
  position: absolute;
  top: -24%;
  right: 25px;
`
export const TitleBalance = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`
export const TitleValue = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`

export const ViewCard = styled.View`

`
export const TitleCard = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`
export const TitleMabank = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`
export const ElipseGr = styled.Image`
  position: absolute;
  top: 12%;
  left: 35px;
`
export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
  gap: 10px;
`
export const IconTransfer = styled.Image`
  width: 80px;
  height: 80px;
`
export const TitleIcon = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PURPLEDARK2};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  text-align: center;
`
export const IconPayment = styled.Image`
  width: 80px;
  height: 80px;`
export const IconPayout = styled.Image`
  width: 80px;
  height: 80px;
`
export const IconAddCard = styled.Image`
  width: 80px;
  height: 80px;
`

export const Footer = styled.View`
  flex: 1;
  margin-top: 25px;
`

export const ContentFlat = styled.View`

`
export const ContentHeader = styled.View`
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`
export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PURPLEDARK3};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`
export const ButtonViewAll = styled.TouchableOpacity`

`
export const ButtonTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PURPLEDARK2};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`
export const ContentFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export const DetailsTransaction = styled.View`
  flex-direction: row;
`
export const Acomp = styled.View`
  flex-direction: column;
  justify-content: center;
`
export const IconTransaction = styled.Image`

`

export const TitleTransaction = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXTDARK};
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const SubTitleTransaction = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.COLORS.GRAY4};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const PriceTransaction = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXTDARK};
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
