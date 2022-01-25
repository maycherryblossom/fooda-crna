import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Root from "./navigation/Root";

// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))

// const loadImages = (images) => images.map(image => {
//   if(typeof asset === "string"){
//     return Image.prefetch(image);
//   } else {
//     return Image.loadAsync(image)
//   }
// })

export default function App() {
  const [assets] = useAssets(require("./assets/logo.png"))
  const [loaded] = Font.useFonts(Ionicons.font)
  // const [ready, setReady] = useState(false);
  // const onFinish = () => setReady(true);
  // const startLoading = async () => {
  //   const fonts = loadFonts([Ionicons.font, require('./assets/fonts/NotoSansKR-Regular.otf')]); //폰트는 이제 promises들의 array다
  //   const images = loadImages([require("./assets/logo.png")])
  //   await Promise.all([...fonts, ...images]);
  // };
  if (!assets || !loaded) {
    return <AppLoading
      // startAsync={startLoading}
      // onFinish={onFinish}
      // onError={console.error} 
      />;
  }
  return (<NavigationContainer>
    <Root />
  </NavigationContainer>
  );
}