import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 15px;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ContentHeader = styled.View`
  justify-content: center;
  padding: 10px;
  margin-left: 15px;
`
export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`
export const AppName = styled.Text`
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-size: 24px;
  font-weight: 500;
  font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
`
export const Status = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.COLORS.GRAY4};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
