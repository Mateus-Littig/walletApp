import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  width: 55%;
  height: 63px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-left: 23%;
`
export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
