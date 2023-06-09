import styled from "styled-components/native"

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  align-items: center;
`
export const Graphic = styled.Image`
`
export const Value = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  font-size: 14px;
  bottom: 155px;
  right: 5px;
`
export const ViewBalance = styled.View`
  margin-top: 20px;
  align-items: center;
`
export const TextTotal = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY4};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ValueBalance = styled.Text`
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-size: 36px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
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
