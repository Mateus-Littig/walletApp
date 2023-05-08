import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  useRef,
  useEffect
} from "react";
import { useTheme } from "styled-components";
import {  } from 'react-hook-form'
import { Ionicons} from "@expo/vector-icons"
import { Container, InputText, IConContainer } from './styles'
import { TextInputProps } from 'react-native'

interface InputRef {
  focus(): void
}

interface InputValueReference {
  value: string
}

interface InputProps extends TextInputProps {
  name: string
  value?: string
  iconName?: React.ComponentProps<typeof Ionicons>["name"]
  containerStyle?: { [key: string]: string | number}
}

export const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  iconName,
  name,
  value,
  containerStyle,
  ...rest
}) => {
  const theme = useTheme()
  const [hasError, setHasError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  // const {
  //   registerField,
  //   fieldName,
  //   defaultValue = '',
  //   error
  // } = useField(name)
  // const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  // useEffect(() => {
  //   setHasError( !!error)
  // }, [error])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
    setHasError(false)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  return (
    <Container style={containerStyle}>
      <IConContainer
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
      >
        <Ionicons
          name={iconName}
          size={25}
          color={
            isFocused || hasError || isFilled
              ? theme.COLORS.BLUE1
              : theme.COLORS.GRAY1
          }
        />
      </IConContainer>

      <InputText
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
        placeholderTextColor={theme.COLORS.GRAY1}
      />
    </Container>
  )
}
