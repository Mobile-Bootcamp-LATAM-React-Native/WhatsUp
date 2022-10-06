import { ColorSchemeName, useColorScheme } from 'react-native';

import { ThemeType, lightTheme, darkTheme } from '../styles';

export const useMyTheme = () => {
  const schema = useColorScheme();
  const theme: ThemeType = schema == 'light' ? lightTheme : darkTheme;

  return theme;
}