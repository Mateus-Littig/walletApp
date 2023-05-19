import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const Content = styled.View`
`
export const TextAddNew = styled.Text`
  font-size: 21px;
  margin-top: 15px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
  text-align: center;
`
export const Value = styled.Text`
  font-size: 36px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
  text-align: center;
`
export const ViewMabank = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`
export const Text = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ViewValue = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  gap: 10px;
  margin-top: 40px;
`
export const Number = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ViewButton =  styled.View`
  width: 80%;
`
