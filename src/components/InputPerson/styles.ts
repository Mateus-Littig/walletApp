import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 0 12px;
  height: 55px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
  margin-top: 10px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  height: 50px;
  border: 0;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`
