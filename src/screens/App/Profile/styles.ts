import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const ViewTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const ViewAvatar = styled.View`
  width: 96px;
  height: 96px;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
`
export const Avatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 50px;
`
export const ViewBck = styled.View`
  position: absolute;
  width: 100%;
  height: 26px;
  background-color: rgba(47, 17, 85, 0.7);
  opacity: 0.8;
  top: 70px;
  align-items: center;
`
export const TextAvatar = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 14px;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-size: 28px;
  font-weight: 500;
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const ViewOptions = styled.View`
  margin-top: 52px;
  width: 90%;
`
export const ViewFooter = styled.View`
  align-items: center;
  margin-top: 50px;
`
export const TextDelete = styled.Text`
  font-size: 21px;
  margin-top: 15px;
  color: ${({theme}) => theme.COLORS.PURPLEDARK2};
  font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
