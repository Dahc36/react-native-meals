import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

function fetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setfontLoaded(true)} />;
  }

  return <MealsNavigator></MealsNavigator>;
}
