import styled, { css } from "styled-components/native"
import { TextInput, ViewProps } from "react-native"

interface IContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled?: boolean;
}

interface ITextContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled?: boolean;
}

export const Container = styled.View`
  width: 85%;
  height: 50px;
  flex-direction: row;
  margin-bottom: 10px;
`
export const IConContainer = styled.View<IContainerProps>`
  width: 55px;
  height: 50px;
  justify-content: center;
  align-items: center;

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.COLORS.BLUE1};
  `}
  // se estiver habilitado ou em foco ele dará esta estilização
  ${({ hasError }) => hasError && css`
  border-bottom-color: ${({theme}) => theme.COLORS.RED};
  `}

  margin-right: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
`
export const InputText = styled(TextInput)<ITextContainerProps>`
  flex: 1;
  font-size: 12px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY3};
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  background-color: ${({ theme }) => theme.COLORS.GRAY5};

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.COLORS.BLUE1};
  `}
  ${({ hasError }) => hasError && css`
  border-bottom-color: ${({theme}) => theme.COLORS.RED};
  `}

  padding: 0 10px;
`
