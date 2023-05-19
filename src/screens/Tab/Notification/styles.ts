import styled from "styled-components/native"

export const Container = styled.View`
bottom: 30px;

`
export const ViewHeader = styled.View`
  bottom: 5px;
  height: 90px;
`
export const TitleNew = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ViewBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`
export const ViewText = styled.View`

`
export const TextDate = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.GRAY3};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const TextInfo = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const TextPgt = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.GRAY3};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ViewPonto = styled.View`
  background-color: red;
  width: 7px;
  height: 7px;
  border-radius: 7px;
  margin-left: 350px;
  bottom: 100px;
`
export const ViewIcon = styled.View`
  justify-content: center;
  background-color: aqua;
`
export const TitleRecent = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-top: 5px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
