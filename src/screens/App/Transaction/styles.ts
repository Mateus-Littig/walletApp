import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
`;
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
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.PURPLEDARK3};
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  text-align: center;
`
export const ContentFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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
