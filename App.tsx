import React from "react"
import { StatusBar } from "expo-status-bar"
import AppLoading from "expo-app-loading"
import { ThemeProvider } from 'styled-components/native'
import { Routes } from "./src/routes/index"

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'

import { DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import Theme  from "./src/styles/theme"

export default function App() {
  const [fontsLoaded] = useFonts ({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={Theme}>
        <StatusBar
          style="dark" translucent backgroundColor="transparent"
        />
          <Routes />
    </ThemeProvider>

  )
}

// colocar img dentro da splash screen
// "splash": {
//   "image": "./assets/splash.png",
//   "resizeMode": "contain",
//   "backgroundColor": "#0F1941"
// },
