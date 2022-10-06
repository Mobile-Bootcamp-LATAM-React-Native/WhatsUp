export type ThemeType = {
  primaryColor: string;
  backgroundColor: string;
}

const theme = {
  primaryColor: '#6FCF97',
}

export const lightTheme: ThemeType = {
  ...theme,
  backgroundColor: '#FFF',
}

export const darkTheme: ThemeType = {
  ...theme,
  backgroundColor: '#141414',
}