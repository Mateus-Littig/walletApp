import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const Content = styled.View`
  margin-top: 50px;
  margin-bottom: 10px;
`
export const ViewCard = styled.View`

`
export const Card = styled.Image`

`
export const ViewTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-size: 28px;
  font-weight: 500;
  font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
`
export const Body = styled.View`
  width: 50%;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`
export const OptionCard = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY4};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const InfoOption = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXTDARK};
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ViewFooter = styled.TouchableOpacity`
  align-items: center;
  margin-top: 50px;
`
export const TextAddNew = styled.Text`
  font-size: 21px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
  text-align: center;
`
