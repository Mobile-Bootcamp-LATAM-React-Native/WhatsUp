import { useState, useRef } from 'react';
import { useColorScheme } from 'react-native';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { ThemeType, lightTheme, darkTheme } from '../styles';

export const useMyTheme = () => {
  const schema = useColorScheme();
  const theme: ThemeType = schema == 'light' ? lightTheme : darkTheme;

  return theme;
}

export const useApp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);
  const confirmation = useRef<FirebaseAuthTypes.ConfirmationResult>(null);

  return { isSignedIn, setIsSignedIn, isLoading, setIsLoading, isBusy, setIsBusy, confirmation };
}