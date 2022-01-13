import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))
const loadAssets = (assets) => assets.map(asset => {
  if(typeof asset === "string"){
    return Image.prefetch(asset);
  } else {
    return Asset.loadAsync(asset)
  }
})

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font, require('./assets/fonts/NotoSansKR-Regular.otf')]); //폰트는 이제 promises들의 array다
    const assets = loadAssets([require("./assets/logo.png")])
    //await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require('./assets/logo.png'));
    //await Image.prefetch("") //string이면 prefetch를 씀
//    await new Promise(resolve => setTimeout(resolve, 10000));
  };
  if (!ready) {
    return <AppLoading
      startAsync={startLoading}
      onFinish={onFinish}
      onError={console.error} />;
  }
  return <Text>We are done loading!</Text>;
}